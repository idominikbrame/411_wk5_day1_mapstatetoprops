import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './Container/home'
import About from './components/About'
import Car from './Container/car'
import Dashboard from './Container/dashboard'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;