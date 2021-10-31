import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './common/NavigationBar';
import About from './layout/about/About';
import Contact from './layout/contact/Contact';
import Home from './layout/home/Home';
import Projects from './layout/projects/Projects';
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
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>

    </div>

  )
}