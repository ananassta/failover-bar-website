import beerList from "../beer/beerList.json";

export function getAllBeerInformation(beerId) {
    const allBeersInOne = beerList;
    for (let i = 0; i < allBeersInOne.length; i++) {
        if (allBeersInOne[i].id === beerId) {
            return {
                id: allBeersInOne[i].id,
                name: allBeersInOne[i].name,
                category: allBeersInOne[i].category,
                alco: allBeersInOne[i].alco,
                strength: allBeersInOne[i].strength,
                manufacturer: allBeersInOne[i].manufacturer,
                country: allBeersInOne[i].country
            }
        }
    }
    return false
}

export function getAllBeersForCategory(category) {
    const allBeersInOne = beerList;
    // const allBeersInOne = await import("../beer/beerList.json");
    const beers = [];
    for (let i = 0; i < allBeersInOne.length; i++) {
        const categ = allBeersInOne[i].category;
        if (categ === category) {
              beers.push({
                slug: allBeersInOne[i].id,
                name: allBeersInOne[i].name,
              });
        }
    //   if more than one category
    //   for (let j = 0; j < categ.length; j++) {
    //     if (categ[j] === category) {
    //       beers.push({
    //         slug: allBeersInOne[i].id,
    //         title: allBeersInOne[i].title,
    //       });
    //     }
    //   }
    }
    return beers;
}

export function getAllCategoriesForCategory() {
    const allBeersInOne = beerList;
    // const allBeersInOne = await import("../beer/beerList.json");
    let categories = [];
    for (let i = 0; i < allBeersInOne.length; i++) {
      const category = allBeersInOne[i].category;
      if (categories.indexOf(category) === -1) {
              categories.push(category);
            }
    //   if more than 1 category
    //   for (let j = 0; j < category.length; j++) {
    //     if (categories.indexOf(category[j]) === -1) {
    //       categories.push(category[j]);
    //     }
    //   }
    }
    const categ = [];
    categories = categories.sort();
    for (let i = 0; i < categories.length; i++) {
      categ.push({
        category: categories[i],
        title: categories[i],
      });
    }
    return categ;
}

export function getAllCategories() {
    const allBeersInOne = beerList;
    // const allBeersInOne = import("../beer/beerList.json");
    let categories = [];
    for (let i = 0; i < allBeersInOne.length; i++) {
        if (categories.indexOf(allBeersInOne[i].category) === -1) {
                  categories.push(allBeersInOne[i].category);
        }
        // for more than one category
    //   const category = allBeersInOne[i].category;
    //   for (let j = 0; j < category.length; j++) {
    //     if (categories.indexOf(category[j]) === -1) {
    //       categories.push(category[j]);
    //     }
    //   }
    }
    const categ = [];
    categories = categories.sort();
    for (let i = 0; i < categories.length; i++) {
      categ.push({
        category: categories[i],
        title: categories[i],
      });
    }
    // console.log(categ)
    return categ;
}