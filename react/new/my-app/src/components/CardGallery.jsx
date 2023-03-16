import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Cards";
import card from "../card";

function createCard(car){
    return (
        <Card
          title={car.title}
          link={car.img}
          desc={car.desc}
          detail={car.linktodetail}
          />
    )
}


function CardGallery(){
    return (
        <div class="main row">
            {card.map(createCard)}
        </div>
    )
}

export default CardGallery;