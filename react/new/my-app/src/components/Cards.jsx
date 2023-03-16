import React from "react";
import { ReactDOM } from "react-dom";

function Card(props){
    return (
        <div class="col-lg-3 col-sm-12 col-md-6">
          <div class="my-card">
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>
              {props.desc}
            </p>
            <a
              class="read"
              href={props.detail}
              >Read More</a
            >
          </div>
        </div>
    )
}

export default Card;