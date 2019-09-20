import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import HomeImage from '../../img/HomeImage.svg';

const UserForm = ({status}) => {
    console.log("status", status)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(status) {
            setUsers([ ...users, status])
        }
    }, [status, users])

    return (
        <ContainerDiv>
            <h1>One Line A Day Journal</h1>
            <Form>
                <div className="img-and-form">
                    <img width={600} src={HomeImage}/>
                    <div className="form-content">
                        <Field type="text" name="username" placeholder="Username" />
                        <Field type="password" name="password" placeholder="Password" />
                        <button type="submit">Register</button>
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
        console.log("Values", values);
        console.log('formikBag', formikBag)
        axios.post('https://bw-one-line-a-day.herokuapp.com/api/auth/register', values)
          .then((res) => {
            localStorage.setItem('token', res.data.token)
            formikBag.props.history.push('/recent')
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

    h1 {
        font-size: 3rem;
    }

    form {

        .form-content {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 45%;
            left: 60%;
            width: 12%;
        
            input {
                font-size: 1rem;
                margin-bottom: 15px;
                height: 30px;
            }

            button {
                font-size: 1rem;
                border-radius: 20px;
                height: 40px;
                margin-top: 20px;
                font-family: 'Poiret One', cursive;
                font-weight: 600;
                font-size: 1.4rem;
            }
        }
        
    }

    

`;