const normalArray = [];

normalArray[0] = 'David';
normalArray[1] = 'Jeff';
normalArray[2] = 'Daniel';
normalArray[456] = 'Peter';

console.log(normalArray);

const associativeArray = [];

associativeArray['water'] = 'Some value 1';
associativeArray['beer'] = 'Some value 2';

console.log(associativeArray);

Object.keys(associativeArray).forEach((element) => {
    console.log('Key: ', element);
    console.log('Value: ', associativeArray[element]);
    console.log('----');
});
