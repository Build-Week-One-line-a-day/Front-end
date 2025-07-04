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
              Log In
            </button>
          </div>
        </div>
      </Form>
    </ContainerDiv>
  );
};

UserForm.propTypes = {
  status: PropTypes.object,
};

export default withRouter(
  withFormik({
    mapPropsToValues: (props) => ({
      username: props.username || '',
      password: props.password || '',
    }),

    handleSubmit: (values, formikBag) => {
      axios
        .post('https://back-end-c9ai.onrender.com/api/auth/login', values)
        .then((res) => {
          formikBag.props.setId(res.data.user.id);
          formikBag.props.setWelcome(res.data.message);
          formikBag.props.notify?.(); // Optional chaining in case `notify` isn't passed
          localStorage.setItem('token', res.data.token);
          formikBag.props.history.push('/recent');
        })
        .catch((err) => {
          console.error('Login error:', err);
        });
    },
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
            top: 45vh;
            left: 60%;
            width: 35vw;

            @media only screen and (max-width: 600px) {
                flex-direction: row;
                top: 35vh;
                position: static;
                width: 100%
                justify-content: space-around;
            }
        
            input {
                font-size: 1rem;
                margin-bottom: 15px;
                height: 30px;
                padding: 1rem;
                border: 0;
            }

            button {
                border-radius: 20px;
                height: 40px;
                margin-top: 20px;
                // font-family: 'Poiret One', cursive;
                font-weight: 600;
                font-size: 1.4rem;
                border: 0;
                @media only screen and (max-width: 600px) {
                    font-size: 1rem;
                    margin-top: -3px;
                    /* font-family: 'Poiret One',cursive; */
                    font-weight: 800;
                }
            }
        }
        
    }

    

`;