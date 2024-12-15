function processMeetings(request){
    const calendar = {};
    request.forEach(entry =>{
        const [day, name] = entry.split(' ')
        if (calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            calendar[day] = name;
            console.log (`Scheduled for ${day}`)
        }
    });
    for (const key in calendar){
        console.log(`${key} -> ${calendar[key]}`);
    }
}