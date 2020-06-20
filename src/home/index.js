import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  "../App.css"

export default class Home extends Component{
    render() {
        return(
            <>
                <h1><center>Projects</center></h1>
                <div className="img-with-text">
                    <ul>
                        <Link to="/about">

                                <img src="https://gbksoft.com/blog/wp-content/uploads/2019/07/trading-984x555.png" alt="Algorithmic Trading Pic"/>
                                <p><a>Algorithmic Trading</a></p>
                        </Link>
                    </ul>
                </div>

            </>
        )
    }
}