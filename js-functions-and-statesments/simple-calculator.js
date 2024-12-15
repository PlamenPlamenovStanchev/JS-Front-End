// calcualte = (num1, num2, operator) => {
    
    // switch(operator){
        // case 'add':
            // return num1 + num2;
        // case 'subtract':
            // return num1 - num2;
//         case 'multiply':
//             return num1 * num2;
//         case 'devide':
//             return num1 / num2
       
//     }
// }

function calculate(num1, num2, operator){
    const operations = []
    operations['multiply'] = (a,b) => a * b;
    operations['add'] = (a,b) => a + b;
    operations['subtract'] = (a,b) => a - b;
    operations['devide'] = (a,b) => a / b;

    console.log(operations[operator](num1,num2,));
}