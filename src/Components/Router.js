import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Header from './Header';
import Detail from 'Routes/Detail';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movie/:id' component={Detail} />
      <Route path='/tv' exact component={TV} />
      <Route path='/tv/:id' component={Detail} />
      <Route path='/search' component={Search} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);

export default AppRouter;
