import Button from "./components/Button";
import { getAllBeerInformation } from "./api";
import { useLocation } from 'react-router-dom';

export default function Beer(props) {
    const location = useLocation();
    const beerInformation = getAllBeerInformation(location.state.data);
  return (
    <div>
      <p></p>
      <h1 style={{textAlign: "center"}}> Information about beer &quot;{location.state.data}&quot;:</h1>
      <p></p>
      <div>
      {/* {beerInformation.map((categName,idx) => ( */}
      {Object.keys(beerInformation).map((keyName,idx) =>(
        <p key={idx}>{keyName}: {beerInformation[keyName]}</p>
      ))}
      </div>
      {/* <Button name='Back' linkName='./'></Button> */}
      {/* Нужно снова делать запрос или можно вернуться к результатам запроса */}
    </div>
  );
}


  