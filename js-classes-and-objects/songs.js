class Song{
    constructor(type, name, time){
        this.type = type;
        this.name = name;
        this.time = time;
    }
}
let songs = [];
let numberOfSongs = input.shift();
let typeSong = input.pop();

for (let i = 0; i < numberOfSongs; i++){
    let [type, name, time] = input[i].split('_');
    let song = new Song(type, name, time);
    songs.push(song);
}
if (typeSong ==="all"){
    songs.forEach((i) => i.type === typeSong);
    filtereds.forEach((i) => console.log(i.name));
}