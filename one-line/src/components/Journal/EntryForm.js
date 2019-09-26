import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';



const EntryForm = (props) => {
    // console.log('props - entry form', props)
    // console.log('id prop', props.id)
    
    
    return (
        <ContainerDiv>
            <Form>
                <h1>One Line A Day Journal</h1>
       
                <h2>09/20/2019</h2>
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
        axios.post(`https://bw-one-line-a-day.herokuapp.com/api/users/${id}/posts`, rest)
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
    font-family: 'Amatic SC', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-family: 'Poiret One', cursive;
        font-weight: 600;
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
            padding: .666rem 0;
            margin-bottom: 10px;
            border: .5px solid darkgray;
        }

        textarea {
            width: 100%;
            padding: 2rem 0;
            margin-bottom: 10px;
            height: 100px;
            border-radius: 5px;
            border: .5px solid darkgray;
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
        }
        button:hover{
            transition: all 150ms linear;
            opacity: .85;
        }
    }
`;