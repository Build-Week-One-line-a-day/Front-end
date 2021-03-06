import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import HomeImage from '../../img/HomeImage.svg';

const UserForm = ({status, setId}) => {
    console.log("status", status)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(status) {
            setUsers([ ...users, status])
        }
    }, [status, users])

    return (
        <ContainerDiv>
            <h1><span className="yellow">One Line A Day</span><span className="blue"> Journal</span></h1>
            <Form>
                <div className="img-and-form">
                    <img width={600} src={HomeImage} alt="Girl pointing to phone"/>
                    <div className="form-content">
                        <Field type="text" name="username" placeholder="Username" />
                        <Field type="password" name="password" placeholder="Password" />
                        <button className="loginButtons" type="submit">Register</button>
                    </div>
                </div>
            </Form>
        </ContainerDiv>
    )
}

export default withRouter(withFormik({
    mapPropsToValues: (values) => {
        return {
            username: values.username || '',
            password: values.password || '',
        }
    },

    handleSubmit: (values, formikBag) => {
        // console.log("Values", values);
        // console.log('formikBag', formikBag)
        axios.post('https://bw-one-line-a-day.herokuapp.com/api/auth/register', values)
          .then((res) => {
            // console.log('register res', res)
            formikBag.props.setId(res.data.user.id)
            localStorage.setItem('token', res.data.token)
            formikBag.props.history.push('/recent')
            // setStatus({userid: res.data.user.id})
            // console.log('user id', res.data.user.id)
          })
          .catch((err) => {
            console.log('Error: ', err)
          })
      }
})(UserForm))


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
                // font-family: 'Poiret One', cursive;
                font-weight: 600;
                font-size: 1.4rem;

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