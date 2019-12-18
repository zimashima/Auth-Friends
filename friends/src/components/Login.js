import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

import {Button, TextField} from '@material-ui/core'


const Login = (props) => {
  const [credentials, setCredentials] = useState({
     username: 'Lambda School',
     password: 'i<3Lambd4'
  });

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/FriendList')
        })
      .catch(err=> console.log(err))
  }

  const handleChange = e => {
      setCredentials( {
        ...credentials,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={login}>
          <TextField
            required
            type="text"
            name="username"
            label="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <TextField
            required
            type="password"
            name="password"
            label="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button variante="contain" color="secondary" type="submit">Log in</Button>
        </form>
      </div>
    )
}

export default Login;
