import React, { Component } from 'react';
import '../App.css';
import Showcase from '../components/showcase/project3/index';
import Title from '../components/titles/ninja';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

export default class Ninja extends Component{
    render() {
        return(
            <>
                <center><Title/></center>
                &nbsp;
                <Showcase/>
                <p className="project-main-text">
                    Shhhhhhh this is the ninja report
                </p>
                <Link href={"https://github.com/leshslays/portfolio"} target="_blank">
                    <GitHubIcon style={{fontSize:40, color:"#547cb6"}}/>
                </Link>
            </>

        )
    }
}