import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Profile from './Profile';
import AllUsers from './AllUsers'
import CreateBlog from './CreateBlog';
import ShowBlog from './ShowBlog'
import UserBlogs from './UserBlogs.js'
import Error from './Error.js'

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/Register' exact component={Register} />
            <Route path='/Login' exact component={Login} />
            <Route path='/Profile' exact component={Profile} />
            <Route path='/AllUsers' exact component={AllUsers} />
            <Route path='/CreateBlog' exact component={CreateBlog} />
            <Route path='/Blog/:id' exact component={ShowBlog} />
            <Route path='/User/:id' exact component={UserBlogs} />
            <Route path='/*' exact component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
