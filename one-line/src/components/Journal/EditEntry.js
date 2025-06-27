import React from 'react';
import PropTypes from 'prop-types';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const EditEntry = () => {
//   const { values } = props;

  return (
    <ContainerDiv>
      <Form>
        <h1>
          <span className="yellow">One Line A Day</span>
          <span className="blue"> Journal</span>
        </h1>

        <div className="form-content">
          <Field type="text" name="title" placeholder="Entry Title" />

          <Field
            component="textarea"
            rows="5"
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

// Add prop types for ESLint compliance
EditEntry.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default withRouter(
  withFormik({
    mapPropsToValues: (props) => {
      const state = props.location.state || {};
      return {
        title: state.title || '',
        contents: state.contents || '',
        id: state.id || '',
      };
    },

    handleSubmit: (values, formikBag) => {
      const id = formikBag.props.match.params.id;
      const updatedEntry = {
        title: values.title,
        contents: values.contents,
      };

      axiosWithAuth()
        .put(`/users/posts/${id}`, updatedEntry)
        .then(() => {
          formikBag.props.history.push('/recent');
        })
        .catch((err) => {
          console.log('Error:', err);
        });
    },
  })(EditEntry)
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
      height: 250px;
      border-radius: 5px;
      border: 0.5px solid darkgray;
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
