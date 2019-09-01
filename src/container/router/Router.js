import React, { Component,Fragment } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Bank from '../bank/Bank';
import Personal from '../personal/personal';

export default class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Bank"  component={Bank}/>
                    <Route path="/Personal" component={Personal}/>
                </Switch>
            </Fragment>
        )
    }
}
