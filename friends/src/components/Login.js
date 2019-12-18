import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

import {Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  textField: {
    width: 350,
    margin: 20
  },

}));

const Login = (props) => {

  const classes = useStyles()

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
      <>
      <div className="container">
        <form onSubmit={login}>
          <div className="formandbutton">
          <TextField
            required
            type="text"
            name="username"
            label="Username"
            variant="outlined"
            className={classes.textField}
            value={credentials.username}
            onChange={handleChange}
          />
          <TextField
            required
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className={classes.textField}
            value={credentials.password}
            onChange={handleChange}
          />
          <Button variante="contain" color="primary" type="submit">Log in</Button>
          </div>
          
        </form>
        </div>
      </>
    )
}

export default Login;
