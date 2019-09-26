import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';



const EditEntry = (props) => {
    // console.log('props - edit entry form', props)
    // console.log('edit entry id prop', props.id)
    
    
    return (
        <ContainerDiv>
            <Form>
                <h1>One Line A Day Journal</h1>
        
                {/* This field needs to be updated to
                change depending on what date the 
                user selected to edit
                <h2>09/20/2019</h2> */}
                <div className="form-content">
                    
                    <Field type="text" value={props.values.title} name="title" placeholder="Entry Title" />

                    
                    <Field component="textarea" value={props.values.contents} name="contents" placeholder="Enter something about your day here" />
                    
                    <Field type="hidden" name="id" />
                    <button type="submit">Save Entry</button>
                </div>
            </Form>
        </ContainerDiv>
    )
}

export default withRouter(withFormik({
    mapPropsToValues: (values, formikBag) => {
        // console.log('props to values', values)
        // console.log('formik props', props)
        // console.log('Edit entry formikBag', formikBag)
        return {
            title: values.location.state.title || ``,
            contents: values.location.state.contents || '',
            id: values.location.state.id || ''
        }
    },


    handleSubmit: (values, formikBag) => {
        // console.log("Values", values);
        // console.log('formikBag', formikBag)
        const id = formikBag.props.match.params.id
        // console.log('formikBag props location state', id)
        const updatedEntry = {title: values.title, contents: values.contents}
        // const {id, ...rest} = values.location.state;
        axios.put(`https://bw-one-line-a-day.herokuapp.com/api/users/posts/${id}`, updatedEntry)
          .then((res) => {
            //   console.log('Edit Entry res', res)
                formikBag.props.history.push('/recent')
                // console.log(formikBag)
          })
          .catch((err) => {
            console.log('Error: ', err)
          })
      }

})(EditEntry))



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
            background-color:#ba2545;
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