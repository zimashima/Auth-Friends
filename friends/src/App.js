import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Link, Container} from '@material-ui/core'
import './App.css';

//components
import Login from './components/Login'
import Public from './components/Public'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <Router>
      <Container>

        <Public />
        <Link href="/login">Login</Link>
        <Switch>
          <PrivateRoute path="/FriendList" component={FriendList} />
          <Route path="/login" component={Login} />
        </Switch>

      </Container>
    </Router>
  );
}

export default App;
