import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Fab, Dialog, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core';
import {Add as AddIcon} from '@material-ui/icons'

import Friend from './Friend'



const useStyles = makeStyles(theme => ({
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));

export default function FriendList(props) {

    const classes = useStyles();

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

    useEffect(()=>{
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    },[])
    

    return (
        <div className="friendList">
         <Typography variant="h3"> I probably have friends but I couldn't find them</Typography>
         <Grid container spacing="3">
         {
             friends.map(each => (
                 <Grid item>
                <Friend id={each.id} name={each.name} age={each.age} email={each.email} handleDelete={handleDelete} />
                </Grid>
             ))
         }
        <Fab color="primary" className={classes.absolute} onClick={toggleOpen}>
            <AddIcon />
        </Fab>
        <Dialog open={open} onClose={toggleClose}>
            <DialogTitle id="addFriend">Add a new Friend</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleAdd}>
                        <TextField
                            required 
                            id="name"
                            lable="Friend's Name"
                            name="name"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <TextField
                            required 
                            id="age"
                            label="Friend's Age"
                            name="age"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <TextField
                            required 
                            id="name"
                            label="Friend's Email"
                            name="email"
                            onChange={e => addChange(e)}
                            autoFocus/>
                        <Button type="submit" variant="contained">Add</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Grid>

        </div>
    )
}

