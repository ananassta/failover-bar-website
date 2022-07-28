import React from 'react';
// import ButtonMenu from './ButtonMenu';
import './style.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import logo from '../images/beer1.png';
// import Paper from '@mui/material/Paper';
// import { borderLeft } from '@mui/system';
// import { green } from '@mui/material/colors';
import beerSign from '../images/empty-beer-photo.svg';

function BeerItem(props) {
  const beerProps = props;
  const beerInformation = beerProps.beer;
  // add rename function for categories
  const shortInfo = {};
  const fullInfo = {};
  Object.keys(beerInformation).forEach((keyName) => {
    //   for (let keyName of Object.keys(beerInformation)) {
    if ((keyName !== 'image') && (keyName !== 'description')) {
      if (['name', 'alco', 'strength'].includes(keyName)) {
        shortInfo[keyName] = beerInformation[keyName];
        // кажется, избыточно
      } else {
        fullInfo[keyName] = beerInformation[keyName];
      }
    }
  });
  const shortDesc = `${fullInfo.manufacturer} (${fullInfo.country}) | ${shortInfo.alco} | ${shortInfo.strength}`;
  // mb just change on beerInformation
  let beerImage = null;
  if (!beerInformation.image) {
    beerImage = beerSign;
  } else {
    beerImage = beerInformation.image;
  }
  // const beerImage = require(`${beerInformation.image}`);
  //   Object.keys(beerInformation).map((keyName) =>
  //     ['name', 'alco', 'strength'].includes(keyName)
  //       ? (shortInfo[keyName] = beerInformation[keyName])
  //       : (fullInfo[keyName] = beerInformation[keyName])
  //   );
  return (
    <div>
      <div className="BeerItemBox">
        <img src={beerImage} alt="Beer" className="BeerImage" />
        <div className="BeerItemShortDecs">
          <p className="BeerItemName">
            {`${beerInformation.name}`}
          </p>
          {/* {Object.keys(shortInfo).map((keyName) => ( */}
          {/* <p key={keyName}> */}
          <p className="BeerItemShortDescText">
            {`${shortDesc}`}
          </p>
          {/* ))} */}
        </div>
      </div>
      <p className="BeerDescText">
        {`${beerInformation.description}`}
      </p>
      <p className="Price">
        {`${beerInformation.price}₽`}
      </p>
      <TableContainer>
        <Table>
          {/* sx={{borderLeft: 0, borderRight: 0}} */}
          <TableBody>
            {Object.keys(fullInfo).map((keyName) => (
              <TableRow
                key={keyName}
                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
              >
                <TableCell
                  sx={{ borderRight: '1px solid rgba(224,224,224,1)' }}
                >
                  {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
                </TableCell>
                <TableCell sx={{ borderLeft: '1px solid rgba(224,224,224,1)' }}>
                  {fullInfo[keyName]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BeerItem;
