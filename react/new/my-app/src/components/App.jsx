import React from "react";
import ReactDOM from "react-dom";
import TextMove from "./TextMove";
import Domain from "./Domain";
import CardGallery from "./CardGallery";

function App(){
    return (
        <div className="container">
            <TextMove />
            <h1>Collaborate in this Domains</h1>
            <Domain />
            <h2>or</h2>
            <button>Upload your own project</button>
            <h1>Completed Projects</h1>
            <CardGallery/>
        </div>
    )
}
export default App;