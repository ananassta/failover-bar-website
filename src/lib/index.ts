import beerList from '../beer/beerList.json';

export type BeerType = {
  id: string,
  name: string,
  category: string,
  alco: string,
  strength: string,
  manufacturer: string,
  country: string,
  amount: number,
  price: string,
  image: string,
  description: string,
}

export type LocationStateType = {
  beerId?: string,
  data?: string
}

export const getAllBeerInformation = (beerId: string) =>
  beerList.find((beer: BeerType) => beer.id === beerId);

export const getAllBeersForCategory = (category: string) =>
  beerList.filter((beer: BeerType) => beer.category === category);

export const getAllCategories = () =>
  Array.from(new Set(beerList.map((beer: BeerType) => beer.category))).sort();

export const getFullInfoKeys = (beerId: string) => {
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
