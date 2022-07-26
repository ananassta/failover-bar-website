import React from "react";
import Button from "./Button";

const BeerListItem = (props) => {
    const beer = props.beer;
    return (
        <div>
            <img alt="Beer image"></img>
            <Button name={beer.name} linkName={"./beer"} data={beer.slug}></Button>
            <p>{beer.alco} | {beer.strength}</p>
        </div>
    );
};

export default BeerListItem;