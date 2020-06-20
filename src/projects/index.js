import React from "react";
import Projects from '../components/projectPanels/index';


export default class projectsPage extends React.Component{
    render() {
        return(
            <>
                <h1 style={{ textAlign: 'center' }}>Projects</h1>
                <Projects/>

            </>
        )
    }
}
