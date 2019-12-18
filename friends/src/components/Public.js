import React from 'react'

import Login from './Login'
import {Typography, Link, Button} from '@material-ui/core'

export default function Public(){
    return (
        <>
        <div className="container">
        <Typography variant="h3" color="primary">Friends</Typography>
        <Link href="/login"><Button variant="contained" color="primary">Login</Button></Link>
        </div>
        </>
    )
}