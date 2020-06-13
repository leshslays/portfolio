import React from "react"
import Thumbnail from "./components/Thumbnail";
import "./App.css";

function Projects(props) {
    return (
        <div>
        <h1>Projects</h1>
            <Thumbnail
                link = "/trading"
                image = "https://www.investopedia.com/thmb/OH9GNL3rGvdkZ1_45LiS9uvKWIo=/680x0/filters:no_upscale():max_bytes(150000):strip_icc()/25-5bfc391246e0fb00511d75cb.jpg"
                title = "Trading Bot"
                category = "App"
            />
    </div>
)
}

export default Projects;