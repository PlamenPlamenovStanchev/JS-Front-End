// function solve(input){
//     const movies = {};
//     input.forEach((line) =>{
//         if (line.includes('addMovie')){
//             const [_, name] = line.split('addMovie ');
//             movies[name] = { name };
//         } else if (line.includes('directedBy')){
//             const [name, director] = line.split('directedBy');
//             if ( ! movies.hasOwnProperty(name) ) movies[name] = {};
//             movies[name].director = director;

//         } else if (line.includes('onDate')){
//             const [name, date] = line.split('onDate');
//             if ( ! movies.hasOwnProperty(name) ) movies[name] = {};
//             movies[name].date = date;
//         }
    
//     });
//     for (const movie in movies){
//         if (Object.keys(movies[movie]).length > 2) console.log(JSON.stringify(movies[movie]));
//     }
    
// }

function movieManager(commands) {
    let movies = [];

    commands.forEach(command => {
        if (command.startsWith("addMovie")) {
            let name = command.replace("addMovie ", "");
            movies.push({ name });
        } else if (command.includes(" directedBy ")) {
            let [name, director] = command.split(" directedBy ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(" onDate ")) {
            let [name, date] = command.split(" onDate ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    });

    movies
        .filter(m => m.name && m.director && m.date)
        .forEach(m => console.log(JSON.stringify(m)));
}