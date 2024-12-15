function createDictionary(entries) {
    let dictionary = {};

    // Parse each JSON string and add to the dictionary
    entries.forEach(entry => {
        let parsedEntry = JSON.parse(entry);
        let [term, definition] = Object.entries(parsedEntry)[0];
        dictionary[term] = definition; // Add or update term
    });

    // Sort terms alphabetically and print each term with its definition
    Object.keys(dictionary)
        .sort()
        .forEach(term => {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        });
}