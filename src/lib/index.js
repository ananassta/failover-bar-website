import beerList from '../beer/beerList.json';

export const getAllBeerInformation = (beerId) =>
  beerList.find((beer) => beer.id === beerId);

export const getAllBeersForCategory = (category) =>
  beerList.filter((beer) => beer.category === category);

export const getAllCategories = () =>
  Array.from(new Set(beerList.map((beer) => beer.category))).sort();

export const getFullInfoKeys = (beerId) => {
  const beerInformation = getAllBeerInformation(beerId);
  const shortInfo = ['id', 'name', 'image', 'description', 'price', 'amount'];
  const fullInfo = [];
  Object.keys(beerInformation).forEach((keyName) => {
    if (!shortInfo.includes(keyName)) {
      fullInfo.push(keyName);
    }
  });
  return fullInfo;
};
