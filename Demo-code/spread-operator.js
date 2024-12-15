const firstCat = {
    name: 'Zuza',
}

const secondCat = {
    isFuzzy: true,
}

console.log( { ...firstCat, ...secondCat } );
console.log( [ ...Object.entries(firstCat), ...Object.entries(secondCat) ] );