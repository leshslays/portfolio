import React, { Component } from 'react';
import '../App.css';
import Showcase from '../components/showcase/project1';

export default class Algotrade extends Component{

    render() {
        return(
            <>

                <h1 className="project-header">&#60;algorithmic trading/></h1>
                <Showcase/>
                <p className="project-main-text">
                    Updated algorithmic trading bot that trades stocks in the NYSE. Using an API and<br/>
                    historical data from from the past 25+ years, this bot can buy/sell for profits, depends on the algorithm.
                </p>

            </>


        )
    }
}