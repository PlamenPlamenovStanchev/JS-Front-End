function solve(fruit, weigthIngrams, pricePerKg){
    const weigthInKg = weigthIngrams / 1000;
    const cost = weigthInKg * pricePerKg;
    console.log (`I need $${cost.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruit}.`)
}