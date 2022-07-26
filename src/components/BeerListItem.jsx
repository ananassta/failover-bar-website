import React from "react";
import ButtonMenu from "./ButtonMenu";

const BeerListItem = (props) => {
    const beer = props.beer;
    return (
        <div>
            <img alt="Beer image"></img>
            <ButtonMenu name={beer.name} linkName={"./beer"} data={beer.slug}></ButtonMenu>
            <p>{beer.alco} | {beer.strength}</p>
        </div>
    );
};

export default BeerListItem;