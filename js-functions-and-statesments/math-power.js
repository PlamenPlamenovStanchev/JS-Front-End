// function mathPower(number, power){
    // console.log(number ** power)
// }


function pow(num, power){
    let result = 1;
    for( let i = 0; i < power; i++){
        result *= num
    }
    console.log(result)
}
mathPower(2, 8)