import React, {useState} from 'react'

import {Card, CardActions, Typography, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core'
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      width: 350,
      margin: 20
    },

  }));


const Friend = (props) =>{

    const classes = useStyles()

    const [editValue, setValue] = useState({
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

    const editChange = e => {
        setValue({...editValue, [e.target.name]: e.target.value})
    }

    return(
        <Card style={{padding: 30, margin: 20, width: 300}}>
            <Typography variant="h5" color="primary">{props.name} ({props.age})</Typography>
            <Typography variant="body1">{props.email}</Typography>
            <CardActions>
                <Tooltip title="Edit">
                <IconButton onClick={toggleOpen}><EditIcon color="secondary"/></IconButton>
                </Tooltip>
                <Dialog open={open} onClose={toggleClose}>
            <DialogTitle id="addFriend">Add a new Friend</DialogTitle>
                <DialogContent>
                    <form onSubmit={()=> props.handleEdit(props.editValue, props.id)}>
                        <div className="formandbutton">
                        <TextField
                            className={classes.textField}
                            required 
                            id="name"
                            label="Friend's Name"
                            name="name"
                            variant="outlined"
                            defaultValue={props.name}
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <TextField
                            className={classes.textField}
                            required 
                            id="age"
                            label="Friend's Age"
                            defaultValue={props.age}
                            name="age"
                            variant="outlined"
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <TextField
                            className={classes.textField}
                            required 
                            id="email"
                            label="Friend's Email"
                            defaultValue={props.email}
                            name="email"
                            variant="outlined"
                            onChange={e => editChange(e)}
                            autoFocus/>
                        <Button type="submit" variant="contained" color="primary">Edit</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
                <Tooltip title="Delete">
                <IconButton onClick={()=> props.handleDelete(props.id)}><DeleteIcon color="secondary"/></IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Friend;