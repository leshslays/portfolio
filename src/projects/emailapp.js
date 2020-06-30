import React, { Component } from 'react';
import '../App.css';
import Showcase from '../components/showcase/project2/index';
import Title from '../components/titles/emailapp';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Breadcrum from "../components/breadcrumb/emailapp";

export default class Emailapp extends Component{
    render() {
        return(
            <>
                <Breadcrum/>
                <center><Title/></center>
                &nbsp;
                <Showcase/>
                <p className="project-main-text">
                    Java application that generates an email and password <br/> for a company employee based on credentials, department and company name.
                </p>
                <Link href={"https://github.com/leshslays/emailapp"} target="_blank">
                    <GitHubIcon style={{fontSize:40, color:"#547cb6"}}/>
                </Link>
            </>

        )
    }
}