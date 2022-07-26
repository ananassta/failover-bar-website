import Button from "./components/ButtonMenu";
import { getAllBeerInformation } from "./api";
import { useLocation } from 'react-router-dom';
import BeerItem from "./components/BeerItem";
// import { BrowserHistory } from "react-router";

export default function Beer(props) {
    const location = useLocation();
    const beerInformation = getAllBeerInformation(location.state.data);
  return (
    <div>
      <p></p>
      {/* <h1 style={{textAlign: "center"}}> Information about beer &quot;{location.state.data}&quot;:</h1> */}
      <h1 style={{textAlign: "center"}}> Information about beer &quot;{beerInformation.name}&quot;:</h1>
      <p></p>
      <BeerItem beer={beerInformation}></BeerItem>
      {/* <div> */}
      {/* {beerInformation.map((categName,idx) => ( */}
      {/* {Object.keys(beerInformation).map((keyName,idx) =>(
        <p key={idx}>{keyName}: {beerInformation[keyName]}</p>
      ))} */}
      {/* </div> */}
      <Button name='Назад' linkName='../menu/beer-list' data={beerInformation.category}></Button>
      {/* Нужно снова делать запрос или можно вернуться к результатам запроса */}
    </div>
  );
}


  