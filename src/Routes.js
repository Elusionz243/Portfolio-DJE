import React, { Redirect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './common/NavigationBar';
import About from './layout/about/About';
import Home from './layout/home/Home';
import Curtain from './utils/Curtain';

export default function Routes() {

  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/' exact={true}>
          <Curtain />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>

    </div>

  )
}