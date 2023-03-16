import React from "react";
import { ReactDOM } from "react-dom";

function Tab(props){
    return (
        <div className="tag">
            <img src={props.link} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Tab;