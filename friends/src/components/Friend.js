import React, {useState} from 'react'

import {Card, CardActions, Typography, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core'
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons'


const Friend = (props) =>{

    const [editValue, setValue] = useState({
        name: '',
        age: '',
        email: '',
    })
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(true);
      };
    
    const toggleClose = () => {
        setOpen(false);
    };

    const editChange = e => {
        setValue({...editValue, [e.target.name]: e.target.value})
    }

    return(
        <Card style={{padding: 30, margin: 20}}>
            <Typography variant="h5" color="primary">{props.name}</Typography>
            <Typography variant="body1">Age: {props.age} </Typography>
            <Typography variant="body1">Email: {props.email}</Typography>
            <CardActions>
                <Tooltip title="Edit">
                <IconButton onClick={toggleOpen}><EditIcon /></IconButton>
                </Tooltip>
                <Dialog open={open} onClose={toggleClose}>
            <DialogTitle id="addFriend">Add a new Friend</DialogTitle>
                <DialogContent>
                    <form onSubmit={()=> props.handleEdit(props.editValue)}>
                        <TextField
                            required 
                            id="name"
                            lable="Friend's Name"
                            name="name"
                            defaultValue={props.name}
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <TextField
                            required 
                            id="age"
                            label="Friend's Age"
                            defaultValue={props.age}
                            name="age"
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <TextField
                            required 
                            id="email"
                            label="Friend's Email"
                            defaultValue={props.email}
                            name="email"
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <Button type="submit" variant="contained">Edit</Button>
                    </form>
                </DialogContent>
            </Dialog>
                <Tooltip title="Delete">
                <IconButton onClick={()=> props.handleDelete(props.id)}><DeleteIcon /></IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Friend;