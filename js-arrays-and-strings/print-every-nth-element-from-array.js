function solve(array, step){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (i % step === 0) newArray.push(array[i])
    }

    return newArray
}