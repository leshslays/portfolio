import React, { Component } from 'react';
import '../App.css';
import Showcase from '../components/showcase/project2/index';
import Title from '../components/titles/bananas';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

export default class Bananas extends Component{
    render() {
        return(
            <>
                <center><Title/></center>
                &nbsp;
                <Showcase/>
                <p className="project-main-text">
                    This is the most bananas of all bananas projects!!!
                </p>
                <Link href={"https://github.com/leshslays/portfolio"} target="_blank">
                    <GitHubIcon style={{fontSize:40, color:"#547cb6"}}/>
                </Link>
            </>

        )
    }
}