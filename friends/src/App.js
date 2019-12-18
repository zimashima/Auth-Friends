import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {Container} from '@material-ui/core'
import './App.css';

//components
import Login from './components/Login'
import Public from './components/Public'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'
import { amber, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: amber,
    type: 'dark'
  },

})


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      
      <Container maxWidth="md">

        <Switch>
          <PrivateRoute path="/FriendList" component={FriendList} />
          <Route exact path="/" component={Public} />
          <Route path="/login" component={Login} />
        </Switch>

      </Container>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
