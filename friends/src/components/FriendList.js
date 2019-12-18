import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { Typography, Grid } from '@material-ui/core';
import Friend from './Friend'

export default function FriendList(props) {

    const [friends, setFriends] = useState([])


    const getData = () =>{
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
       getData()
    })
    

    return (
        <div>
         <Typography variant="h3"> I probably have friends but I couldn't find them</Typography>
         <Grid container spacing="3">
         {
             friends.map(each => (
                 <Grid item>
                <Friend name={each.name} age={each.age} email={each.email} />
                </Grid>
             ))
         }
         </Grid>
        </div>
    )
}

