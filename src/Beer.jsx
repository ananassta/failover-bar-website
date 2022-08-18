import React from 'react';
import { useLocation } from 'react-router-dom';
import './components/style.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import beerSign from './images/empty-beer-photo.svg';
import { getAllBeerInformation, getFullInfoKeys } from './api';

export default function Beer() {
  const location = useLocation();
  const beerInformation = getAllBeerInformation(location.state.beerId);
  const fullInfo = getFullInfoKeys(location.state.beerId);
  const shortDesc = `${beerInformation.manufacturer || '-'} (${beerInformation.country || '-'}) | ${beerInformation.alco ?? '-'} | ${beerInformation.strength ?? '-'}`;
  const beerImage = beerInformation.image || beerSign;
  return (
    <div className="BeerItemBoxFull">
      <div className="BeerItemBox">
        <img src={beerImage} alt="Beer" className="BeerImage" style={{ width: '9.188em', height: '10.813em' }} />
        <div className="BeerItemShortDecs">
          <p className="BeerItemName">
            {`${beerInformation.name}`}
          </p>
          <p className="BeerItemShortDescText">
            {`${shortDesc}`}
          </p>
        </div>
      </div>
      <p className="BeerDescText">
        {`${beerInformation.description}`}
      </p>
      <div className="PriceDiv">
        <p className="Price">
          {`${beerInformation.price}₽`}
        </p>
      </div>
      <TableContainer>
        <Table>
          <TableBody>
            {fullInfo.map((keyName) => (
              <TableRow
                key={keyName}
                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
              >
                <TableCell
                  sx={{ borderRight: '0.063em solid rgba(117, 117, 117, 1)', width: '2em' }}
                >
                  {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
                </TableCell>
                <TableCell sx={{ borderLeft: '0.063em solid rgba(117, 117, 117, 1)' }}>
                  {beerInformation[keyName]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
