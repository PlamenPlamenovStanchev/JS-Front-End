function processNumbers(input){
    const phoneBook = {};
    input.forEach(entry => {
        const [name, phone] = entry.split(' ');
    });
    for (const key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}