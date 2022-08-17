import beerList from '../beer/beerList.json';

export const getAllBeerInformation = (beerId) =>
  beerList.find((beer) => beer.id === beerId);

export const getAllBeersForCategory = (category) =>
  beerList.filter((beer) => beer.category === category);

export const getAllCategories = () =>
  Array.from(new Set(beerList.map((beer) => beer.category))).sort();
