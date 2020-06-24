import React, { Component } from 'react';
import '../../App.css';
import Title from '../titles/contact';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class Contact extends Component{
    render() {
        return(
            <>
                <center><Title/></center>
                <p className="project-main-text">
                    This is the contact page
                </p>
                <Link href={"https://www.linkedin.com/in/leshlyerivera/"} target="_blank">
                    <LinkedInIcon style={{fontSize:40, color:"#547cb6"}}/>
                </Link>
            </>

        )
    }
}