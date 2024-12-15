// const checkSign = (numOne, numTwo, numThree) =>{
//     let negativeCount = 0;
//     if (numOne < 0) negativeCount++;
//     if(numTwo < 0) negativeCount++;
//     if (numThree < 0) negativeCount++;
//     console.log(negativeCount % 2 === 0 ? 'Positive' : 'Negative');
// }

function checkSign(num1, num2, num3){
    const array = [num1, num2, num3];
    const isNegative = array.filter(num => num < 0).length %2 !==0;
    console.log(isNegative ? 'Negative' : 'Positive');
}