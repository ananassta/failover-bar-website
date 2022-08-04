import beerList from '../beer/beerList.json';
import {
  getAllBeerInformation,
  getAllBeersForCategory,
  getAllCategories
} from '../api';

describe('Testing beer finding', () => {
  test('Beer finding by id', () => {
    const testingBeer = beerList[2];
    const foundedBeer = getAllBeerInformation(testingBeer.id);
    Object.keys(foundedBeer).forEach((key) => {
      expect(foundedBeer[key]).toBe(testingBeer[key]);
    });
  });

  test('Finding not existing beer', () => {
    expect(getAllBeerInformation('-1')).toBeFalsy();
  });
});

describe('Testing getting beer by category', () => {
  test('Test right filtering buy category', () => {
    const { category } = beerList[1];
    const checkingBeers = getAllBeersForCategory(category);
    checkingBeers.forEach((checkBeer) => {
      const checkBeerWithId = beerList.find((beer) => beer.id === checkBeer.id);
      expect(checkBeerWithId?.category).toBe(category);
    });
  });

  test('Test right filtering length buy category', () => {
    const { category } = beerList[2];
    const checkingBeers = getAllBeersForCategory(category);
    const rightBeers = beerList.filter((beer) => beer.category === category);
    expect(checkingBeers.length).toBe(rightBeers.length);
  });

  test('Test non existing category', () => {
    const checkBeerList = getAllBeersForCategory('');
    expect(checkBeerList.length).toBeFalsy();
  });
});

describe('Test getting all categories', () => {
  let allCategories = [];
  let checkAllCategories = [];

  beforeAll(() => {
    allCategories = Array.from(
      new Set(beerList.map((beer) => beer.category))
    ).sort();
    checkAllCategories = getAllCategories();
  });

  test('Test right categories length', () => {
    expect(checkAllCategories.length).toBe(allCategories.length);
  });

  test('Test all categories order', () => {
    checkAllCategories.forEach((categoryItem, index) => {
      expect(categoryItem.category).toBe(allCategories[index]);
    });
  });
});
