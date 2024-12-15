function checkForPalindromes(numbers){
    const isPalindrome = (num) => {
        const strNum = num.toString();
        const strNumReversed = strNum.split('').reverse().join('');
        return strNum ===strNumReversed;
    }
    numbers.forEach(num => console.log(isPalindrome(num)));
}