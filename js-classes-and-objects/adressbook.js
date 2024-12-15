function addressBook(input){
    const addressBook = {}
    input.forEach(entry =>{
        const[name, place] = entry.split(':');
        addressBook[name] = place;
    });
    const addressBookSortable = Object.entries(addressBook);
    addressBookSortable.sort(([keyA], [keyB]) =>{
        return keyA.localeCompare(keyB);
    });
    for (const[name, place] of addressBookSortable){
        console.log(`${name} -> ${place}`);
    }
}