import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

import { Typography, Grid, Fab, Dialog, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Friend from './Friend'


const useStyles = makeStyles(theme => ({
    textField: {
      width: 350,
      margin: 20
    },
  }));

export default function FriendList(props) {

    const classes = useStyles()

    const [friends, setFriends] = useState([])
    const [value, setValue] = useState({
        name: '',
        age: '',
        email: ''
    })
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(true);
      };
    
    const toggleClose = () => {
        setOpen(false);
    };

    const addChange = e => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleAdd = e => {
        e.preventDefault()
        axiosWithAuth().post('/friends', value)
            .then(axiosWithAuth().get('/friends')
                .then(res => setFriends(res.data))
                .catch(err=> console.log(err)))
            .catch(err => console.log(err))
        toggleClose()
    }


    const handleDelete = id =>{
        axiosWithAuth()
         .delete(`/friends/${id}`)
         .then(axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err)))
        .catch(err=> console.log(err))
    }

    const handleEdit = (editValue,id) =>{
        axiosWithAuth()
         .put(`/friends/${id}`, editValue)
         .then(axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err)))
        .catch(err=> console.log(err))
        toggleClose()
    }

    useEffect(()=>{
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    },[])
    

    return (
        <>
        <div className="friendList">
            <div className="header">

         <Typography variant="h3" color="textSecondary"> F R I E N D S !</Typography>
         <Fab color="primary" onClick={toggleOpen}>
            <AddIcon />
        </Fab>
         </div>
         <Grid container spacing="3">
         {
             friends.map(each => (
                 <Grid item>
                <Friend id={each.id} name={each.name} age={each.age} email={each.email} handleDelete={handleDelete} handleEdit={handleEdit}/>
                </Grid>
             ))
         }

        <Dialog open={open} onClose={toggleClose}>
            <DialogTitle id="addFriend">Add a new Friend</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleAdd}>
                        <div className="formandbutton">
                        <TextField
                            required
                            className={classes.textField}
                            id="name"
                            label="Friend's Name"
                            name="name"
                            variant="outlined"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <TextField
                            required
                            className={classes.textField}
                            id="age"
                            label="Friend's Age"
                            name="age"
                            variant="outlined"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <TextField
                            required
                            className={classes.textField}
                            id="email"
                            label="Friend's Email"
                            name="email"
                            variant="outlined"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <Button type="submit" variant="contained" color="primary">Add</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </Grid>

        </div>
        </>
    )
}

