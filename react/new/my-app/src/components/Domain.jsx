import React from "react";
import ReactDOM  from "react-dom";
import Tab from "./Tab";
import Domains from "../domain";

function Tabs(domain){
    return (
        <Tab
         name={domain.title}
         link={domain.icon}
         />
    )
}


function Domain(){
    return (
        <div className="domain">
            {Domains.map(Tabs)}
        </div>
    )
}

export default Domain;