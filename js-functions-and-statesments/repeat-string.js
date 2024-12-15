// function repeatString(str, count){
    // return newstr = str.repeat(count)
    // console.log(newstr)
// }


function repeat(str, n){
    let result = '';
    for (let i = 0; i <n; i++){
        result += str;
    }
    return result
}

repeatString('abc', 3)