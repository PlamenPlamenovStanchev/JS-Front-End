// function solve(input){
    // const first = input[0];
    // const last = input[-1];
    // console.log(first + last)
// }

function solve(numbers){
    const first = numbers.shift();
    const last = numbers.pop();
    console.log(first + last)
}