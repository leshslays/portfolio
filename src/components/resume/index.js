import React, { Component } from 'react';
import Viewer from '../pdfViewer/index';

export default class Resume extends Component{
    render() {
        return(
            <>
                <center><Viewer/></center>
            </>
        )
    }
}