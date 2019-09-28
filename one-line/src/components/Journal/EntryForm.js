import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import axiosWithAuth from '../../';
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../../utils/axiosWithAuth';



const EntryForm = (props) => {
    // console.log('props - entry form', props)
    // console.log('id prop', props.id)

    const [quote, setQuote] = useState('')

    useEffect(() => {
        axios.get("http://quotes.stormconsultancy.co.uk/random.json")
            .then(response => {
                console.log('random quote', response);
                setQuote(response.data)
            })
            .catch(err => {
                console.log(err);
            });
            return () => {
                console.log('clean up')
            }
    },[])
    

    
    return (
        <ContainerDiv>
            <Form>
                <h1><span className="yellow">One Line A Day</span><span className="blue"> Journal</span></h1>
                <h2 className="quote">{quote.quote}</h2>
                <h2 className="quote"> - {quote.author}</h2>
                <div className="form-content">
                    
                    <Field type="text" name="title" placeholder="Entry Title" />

                    
                    <Field component="textarea" name="contents" placeholder="Enter something about your day here" />
                    
                    <Field type="hidden" name="id" />
                    <Field type="hidden" name="created_at" />

                    <button type="submit">Save Entry</button>
                </div>
            </Form>
        </ContainerDiv>
    )
}

export default withRouter(withFormik({
    mapPropsToValues: (values) => {
        return {
            title: values.title || '',
            contents: values.contents || '',
            id: values.id || '',
            created_at: values.created_at || ''
        }
    },


    handleSubmit: (values, formikBag) => {
        console.log("Values", values);
        console.log('formikBag', formikBag)
        const {id, ...rest} = values;
        axiosWithAuth().post(`/users/${id}/posts`, rest)
          .then((res) => {
                formikBag.props.history.push('/recent')
                console.log(formikBag)
          })
          .catch((err) => {
            console.log('Error: ', err)
          })
      }

})(EntryForm))




const ContainerDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        width: 800px;
        max-width: 80%;
    }

    h1 {
        font-family: 'Amatic SC', cursive;
        font-size: 5rem;
        .yellow{
            color: #ebbd36
        }
        .blue{
            color: #47cbe6;
        }
    }

    h2 {
        font-family: 'Poiret One', cursive;
        font-weight: 600;
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 0;
        letter-spacing: 5px;
        line-height: 1;
        @media only screen and (max-width:600px){
            font-size: 1.15rem;
        }
    }

    .form-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        input {
            border-radius: 5px;
            width: 100%;
            padding: .666rem;
            margin-bottom: 10px;
            border: .5px solid darkgray;
        }

        textarea {
            width: 100%;
            padding: .666rem;
            margin-bottom: 10px;
            height: 100px;
            border-radius: 5px;
            border: .5px solid darkgray;

            height: 250px;
        }
        button{
            width: 100%;
            color: #fff;
            background-color:#47CBE6;
            margin: 10px;
            padding: 12px 12px;
            cursor: pointer;
            border: 0 none;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight: 800;
            font-size: 1.3rem;
        }
        button:hover{
            transition: all 150ms linear;
            opacity: .85;
        }
    }
`;