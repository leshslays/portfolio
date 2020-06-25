import React, { Component } from 'react';
import '../App.css';
import Showcase from '../components/showcase/project1/index';
import Title from '../components/titles/algotrade';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Breadcrum from "../components/breadcrumb/algotrade";

export default class Algotrade extends Component{
    render() {
        return(
            <>
                <Breadcrum/>
                <center><Title/></center>
                &nbsp;
                <Showcase/>
                <p className="project-main-text">
                    Updated algorithmic trading bot that trades stocks in the NYSE. Using an API and<br/>
                    historical data from from the past 25+ years, this bot can buy/sell for profits, depends on the algorithm.
                </p>
                <Link href={"https://github.com/leshslays/portfolio"} target="_blank">
                <GitHubIcon style={{fontSize:40, color:"#547cb6"}}/>
                </Link>
            </>

        )
    }
}