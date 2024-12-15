function solve(array){
    const [ isername, ...passwords] = array;
    passwords.foreach(function(password, index){
        if( password === Array.from(username).reverse().join('')){
            console.log(`User ${username} logged in.`)
        }else if (index >= 3){
            console.log(`User ${user} blocked!`);
        } else {
            console.log('Incorrect password. Try again.')
        }
    });
}