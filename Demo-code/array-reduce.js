const array = ['abc','def'];
const acc = {};

array.forEach((element, index, array) => {
    acc[element] = element.length;
});

const obj2 = array.reduce((acc, element, index, array) => {
    acc[element] = element.length;
    return acc;
}, {});

const obj3 = array.reduce((acc, element, index, array) => ({ ...acc, [element]: element.length }), {});

const number = array.reduce()
const string = array.reduce()