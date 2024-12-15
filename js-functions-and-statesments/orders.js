// function orders(price, quantity){

    // let totalPrice = 0
    // switch(product){
        // case 'coffee':
            // totalPrice = price * quantity;
            // break;
        // case 'water':
            // totalPrice = price * quantity;
            // break;
        // case 'coke':
            // totalPrice = price * quantity;
            // break;
        // case 'snacks':
            // totalPrice = price * quantity;
            // break;
    // }
    // console.log(totalPrice)
// }

function calculateOrderProce(product, quantity){
    const drinks = []
    drinks['coffee'] = (q) => q * 1.50;
    drinks['water'] = (q) => q * 1.00;
    drinks['coke'] = (q) => q * 1.40;
    drinks['snacks'] = (q) => q * 2.00;

    console.log(drinks[product](quantity).toFixed(2));
}