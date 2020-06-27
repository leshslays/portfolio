import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Pdf from '../../Resume 2020 CSIT.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Viewer extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={Pdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p style={{color:"aliceblue"}}>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}