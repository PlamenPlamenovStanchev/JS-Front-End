// function passwordValidator(password){

//     const patternFullPassword = new RegExp(/^(?=.*\d.*\d)[a-zA-Z\d]{6.10}$/);
    
//     const patterLettersAndDigits = new RegExp(/^[a-zA-z\d]+$/);
//     const patternAtLeast2Digits = new RegExp(/(.*\d){2}/);
    
//     const checkLength = password.length < 6 || password.length > 10;
//     const checkContents = ! patterLettersAndDigits.test(password);
//     const checkNumCount = ! patternAtLeast2Digits.test(password);

//     if ( patternFullPassword.test(password) ){
//         console.log('Password is valid');
//     } else {

//         if ( checkLength ) console.log('Password must be between 6 and 10 characters');
//         if ( checkContents ) console.log('Password must consist only of letters and digits');
//         if ( checkNumCount)  console.log('Password must have at least 2 digits');
//     }
// }

// function validatePassword(password){
//     const errors = passwordConstrainViolation(password);
//     if (errors.length != 0){
//         errors.forEach(e => console.log(e));
//     } else {
//         console.log('Password is valid');
//     }
    
//     function passwordConstrainViolation(password){
//         const errors = [];
    
//         ((p, errors) => {
//             if (p.length < 6 || p.length > 10) errors.push ('Password must be between 6 and 10 character');
//         })(password, errors);
//         ((p, errors) =>{
//             if(!/^[a-zA-Z0-9]+$/.test(p)) errors.push('Password must consist only of letters and digits');
//         })(password, errors);
    
//         ((p,errors) => {
//             if(p.split('').filter(e => Number.isInteger(+e)).length < 2) errors.push('Password must have at least 2 digits');
//         })(p,errors)
//         return errors;
//     }
    
// }


function validatePassword(password) {
    let isValid = true;
  
    // Check if password length is between 6 and 10 characters
    if (password.length < 6 || password.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
    }
  
    // Check if password consists only of letters and digits
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
  
    // Check if password has at least 2 digits
    let digitCount = [...password].filter(char => /\d/.test(char)).length;
    if (digitCount < 2) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
  
    // If all conditions are met, print "Password is valid"
    if (isValid) {
      console.log("Password is valid");
    }
  }

