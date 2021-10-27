import React from 'react';
import {Switch, Route } from 'react-router-dom';
import NavigationBar from './common/NavigationBar';
import About from './layout/about/About';
import Home from './layout/home/Home';

export default function Routes() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  )
}