import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const UserForm = ({status}) => {
    console.log("status", status)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(status) {
            setUsers([ ...users, status])
        }
    }, [status])

    return (
        <Form>
            <Field type="text" name="username" placeholder="Username" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit">Register</button>
        </Form>
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