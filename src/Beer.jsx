import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './components/ButtonMenu';
import { getAllBeerInformation } from './api';
import BeerItem from './components/BeerItem';
// import { BrowserHistory } from "react-router";

export default function Beer() {
  const location = useLocation();
  const beerInformation = getAllBeerInformation(location.state.data);
  return (
    <div>
      <p />
      {/* <h1 style={{textAlign: "center"}}>  */}
      {/* Information about beer &quot;{location.state.data}&quot;:</h1> */}
      <h1 style={{ textAlign: 'center' }}>
        {'Information about beer &quot;{beerInformation.name}&quot;:'}
      </h1>
      <p />
      <BeerItem beer={beerInformation} />
      {/* <div> */}
      {/* {beerInformation.map((categName,idx) => ( */}
      {/* {Object.keys(beerInformation).map((keyName,idx) =>(
        <p key={idx}>{keyName}: {beerInformation[keyName]}</p>
      ))} */}
      {/* </div> */}
      <Button
        name="Назад"
        linkName="../menu/beer-list"
        data={beerInformation.category}
      />
      {/* Нужно снова делать запрос или можно вернуться к результатам запроса */}
    </div>
  );
}
