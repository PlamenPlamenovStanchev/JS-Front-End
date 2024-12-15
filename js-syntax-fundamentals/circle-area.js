function solve(arg){
    let result;
    let inputType = typeof(arg);
    if (inputType === 'number'){
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2))
    }else {
        console.log(`We cannot calculate circle area, because we received a ${inputType}`)
    }
}
solve(5)
solve('name')