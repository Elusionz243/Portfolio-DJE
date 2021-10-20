import React from 'react';
import {Switch, Route } from 'react-router-dom';
import NavigationBar from './common/NavigationBar';
import Home from './layout/home/Home';

export default function Routes() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}