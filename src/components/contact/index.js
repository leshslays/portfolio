import React, { Component } from 'react';
import '../../App.css';
import Title from '../titles/contact';
import Show from '../contactShow/index'

export default class Contact extends Component{
    render() {
        return(
            <>
                <center><Title/></center>
                <p><br/></p>
                <center><Show/></center>
            </>

        )
    }
}