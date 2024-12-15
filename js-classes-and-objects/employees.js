function solve(input){
    const employees = {}
    input.forEach(element =>{
        employees[element] = element.length
    });
    for (const name in employees) {
        console.log (`Name: ${name} -- Personal Number: ${employees[name]}`)
    }
}

// function solve(input){
//     input.forEach(element =>{
//         console.log(`Name: ${element} -- Personal Number: ${element.length}`)
//     })
// }