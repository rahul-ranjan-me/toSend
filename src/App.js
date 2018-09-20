import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import BlogList from './pages/blogList'
import BlogDetail from './pages/blogDetail'
import CreateBlog from './pages/createBlog'
import EditBlog from './pages/editBlog'
import './css/common.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={BlogList} />
            <Route exact path='/blog/:blogId' component={BlogDetail} />
            <Route exact path='/create-blog' component={CreateBlog} />
            <Route exact path='/edit-blog/:blogId' component={EditBlog} />
          </Switch>
        </HashRouter>
      </div>  
    );
  }
}

export default App;
