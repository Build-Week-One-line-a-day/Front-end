import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {withFormik, Form, Field} from 'formik';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const EditEntry = props => {
  // console.log('props - edit entry form', props)
  // console.log('edit entry id prop', props.id)

  return (
    <ContainerDiv>
      <Form>
        <h1>
          <span className="yellow">One Line A Day</span>
          <span className="blue"> Journal</span>
        </h1>

        <h2> {props.values.created_at} </h2>
        <div className="form-content">
          <Field
            type="text"
            value={props.values.title}
            name="title"
            placeholder="Entry Title"
          />

          <Field
            component="textarea"
            rows="5"
            value={props.values.contents}
            name="contents"
            placeholder="Enter something about your day here"
          />

          <Field type="hidden" name="id" />
          <button type="submit">Save Entry</button>
        </div>
      </Form>
    </ContainerDiv>
  );
};

export default withRouter(
  withFormik({
    mapPropsToValues: (values, formikBag) => {
      // console.log('props to values', values)
      // console.log('formik props', props)
      // console.log('Edit entry formikBag', formikBag)
      return {
        created_at: values.location.state.created_at.split(' ')[0] || ``,
        title: values.location.state.title || ``,
        contents: values.location.state.contents || '',
        id: values.location.state.id || '',
      };
    },

    handleSubmit: (values, formikBag) => {
      // console.log("Values", values);
      // console.log('formikBag', formikBag)
      const id = formikBag.props.match.params.id;
      // console.log('formikBag props location state', id)
      const updatedEntry = {title: values.title, contents: values.contents};
      // const {id, ...rest} = values.location.state;
      axiosWithAuth()
        .put(`/users/posts/${id}`, updatedEntry)
        .then(res => {
          //   console.log('Edit Entry res', res)
          formikBag.props.history.push('/recent');
          // console.log(formikBag)
        })
        .catch(err => {
          console.log('Error: ', err);
        });
    },
  })(EditEntry),
);

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 800px;
    max-width: 80%;
  }

  h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 5rem;
    .yellow {
      color: #ebbd36;
    }
    .blue {
      color: #47cbe6;
    }
  }

  h2 {
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    font-size: 1.8rem;
    color: #ebbd36;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    input {
      color: #666;
      border-radius: 5px;
      width: 100%;
      padding: 0.666rem;
      margin-bottom: 10px;
      border: 0.5px solid darkgray;
    }

    textarea {
      color: #666;
      width: 100%;
      padding: 0.666rem;
      margin-bottom: 10px;
      height: 100px;
      border-radius: 5px;
      border: 0.5px solid darkgray;

      height: 250px;
    }
    button {
      width: 100%;
      color: #fff;
      background-color: #47cbe6;
      margin: 10px;
      padding: 12px 12px;
      cursor: pointer;
      border: 0 none;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1.3rem;
    }
    button:hover {
      transition: all 150ms linear;
      opacity: 0.85;
    }
  }
`;
