function solve(n, numbers){
    let arr = []
    for (i = 0; i <= n; i++){
        arr.push(numbers[i])
    }
    console.log(arr.reverse().join(' '))
}