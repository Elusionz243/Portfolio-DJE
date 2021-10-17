import React from 'react';
import {Switch, Route } from 'react-router-dom';
import NavigationBar from './common/NavigationBar';

export default function Routes() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/' exact={true}>

        </Route>
      </Switch>
    </div>
  )
}