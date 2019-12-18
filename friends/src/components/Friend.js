import React from 'react'

import {Card, CardActions, Typography, Tooltip, IconButton} from '@material-ui/core'
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons'
import {axiosWithAuth} from './../utils/axiosWithAuth'

const Friend = (props) =>{

    const handleEdit = e => {

    }



    return(
        <Card style={{padding: 30, margin: 20}}>
            <Typography variant="h5" color="primary">{props.name}</Typography>
            <Typography variant="body1">Age: {props.age} </Typography>
            <Typography variant="body1">Email: {props.email}</Typography>
            <CardActions>
                <Tooltip title="Edit">
                <IconButton><EditIcon /></IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                <IconButton onClick={()=> props.handleDelete(props.id)}><DeleteIcon /></IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Friend;