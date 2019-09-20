import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const EntryForm = ({status}) => {
    console.log('Status', status)
    const [entry, setEntry] = useState([]);
    return (
        <ContainerDiv>
            <Form>
                <h1>One Line A Day Journal</h1>
                {/* The date field below will be hooked up to the backend api
                to display the current date/attach it to the timestamp of the post.
                
                It may change slightly depending on how the backend turns out.*/}
                <h2>09/20/2019</h2>
                <div className="form-content">
                    {/* Entry Title -> This will be hooked up to the backend
                    api when we get access to it. */}
                    <Field type="text" name="title" placeholder="Entry Title" />

                    {/* Entry Content -> This will be hooked up to the backend
                    api when we get access to it. */}
                    <Field component="textarea" name="entry" placeholder="Enter something about your day here" />
                    
                    {/* Submit button -> Hook up to the backend and also route to
                    recent page after data from entry is saved to backend */}
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
            entry: values.entry || '',
        }
    },

    // Once we have backend api we can hook 
    // that up below with the axios request

    handleSubmit: (values, formikBag) => {
        console.log("Values", values);
        console.log('formikBag', formikBag)
        // axios.post('', values)
        //   .then((res) => {

                // the .then will route the save button to the 
                // recent page after saving entry to backend

        //   })
        //   .catch((err) => {
            // console.log('Error: ', err)
        //   })
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

        input {
            margin-bottom: 10px;
        }

        textarea {
            margin-bottom: 10px;
            height: 100px;
        }
    }
`;