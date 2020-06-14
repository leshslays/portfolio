import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from '../home/index';
import About from '../about/index';
import Nav from '../components/Toolbar/Toolbar';


export default class Main extends Component{
    render(){
        return(
            <>
                <Nav/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Router>
                </>
        )
    }

}