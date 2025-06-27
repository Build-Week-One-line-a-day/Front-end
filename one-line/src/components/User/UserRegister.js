import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import HomeImage from '../../img/HomeImage.svg';

const UserForm = () => {
  return (
    <ContainerDiv>
      <h1>
        <span className="yellow">One Line A Day</span>
        <span className="blue"> Journal</span>
      </h1>
      <Form>
        <div className="img-and-form">
          <img width={600} src={HomeImage} alt="Girl pointing to phone" />
          <div className="form-content">
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button className="loginButtons" type="submit">
              Register
            </button>
          </div>
        </div>
      </Form>
    </ContainerDiv>
  );
};

UserForm.propTypes = {
  status: PropTypes.object,
  setId: PropTypes.func
};

export default withRouter(
  withFormik({
    mapPropsToValues: (props) => ({
      username: props.username || '',
      password: props.password || ''
    }),

    handleSubmit: (values, formikBag) => {
      axios
        .post('https://back-end-c9ai.onrender.com/api/auth/register', values)
        .then((res) => {
          formikBag.props.setId(res.data.user.id);
          localStorage.setItem('token', res.data.token);
          formikBag.props.history.push('/recent');
        })
        .catch((err) => {
          console.error('Registration error:', err);
        });
    }
  })(UserForm)
);



const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Amatic SC', cursive;


    background: #cf0732;
    background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
    border-bottom-left-radius: 55rem;
    border-bottom-right-radius: 55rem;
    border-bottom: 2px solid #edc71c;

    h1 {
        font-size: 5rem;
        .yellow{
            color: #ebbd36
        }
        .blue{
            color: #47cbe6;
        }
    }

    img {
        @media only screen and (max-width: 600px) {
            width: 90%;
        }
    }

    form {

        .form-content {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 45%;
            left: 60%;
            width: 12%;

            @media only screen and (max-width: 600px) {
                flex-direction: row;
                top: 35vh;
                position: static;
                width: 100%
                justify-content: space-around;
            }
        
            input {
                border: 0;
                font-size: 1rem;
                margin-bottom: 15px;
                height: 30px;
                padding: 1rem;
            }

            button {
                border-radius: 20px;
                height: 40px;
                border: 0;
                margin-top: 20px;
                // font-family: "Jua", sans-serif;
                font-weight: 600;
                font-size: 1.4rem;

                @media only screen and (max-width: 600px) {
                    font-size: 1rem;
                    margin-top: -3px;
                    /* font-family: "Jua", sans-serif; */
                    font-weight: 800;
                }
            }
        }
        
    }

    

`;