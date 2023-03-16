import React from "react";
import ReactDOM from "react-dom";


const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVo1Z8225g-VX2NkX_2H5e-XGNZOHF-XK1xQ&usqp=CAU"
function TextMove(){
    return (
        <div className="move">
            <img src="{url}" className="imgs" />
            <div className="textmove">
                yolo
            </div>
        </div>
    )
}
export default TextMove;