import React from 'react'
import {Card, CardActions, Typography, Tooltip, IconButton} from '@material-ui/core'

import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons'

const Friend = (props) =>{
    return(
        <Card style={{padding: 30}}>
            <Typography variant="subtitle1" color="primary">{props.name}</Typography>
            <Typography variant="body1">Age: {props.age} </Typography>
            <Typography variant="body1">Email: {props.email}</Typography>
            <CardActions>
                <Tooltip>
                <IconButton><EditIcon /></IconButton>
                </Tooltip>
                <Tooltip>
                <IconButton><DeleteIcon /></IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Friend;;