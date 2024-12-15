
function solve(input) {

    const farmers = input.shift()

    input.splice(0, farmers).reduce((_, detail) => {
        const [name, workArea, taskString] = detail.split(" ");
        const tasks = taskString ? taskString.split(",") : [];
        farmers[name] = { workArea, tasks: new Set(tasks) };
        return farmers;
    }, farmers);

    // Process commands
    input.forEach(entry => {


        const parts = entry.split(" / ");
        const command = parts[0];

        switch (command) {
            case "Execute": {
                const [name, workArea, task] = [parts[1], parts[2], parts[3]];
                if (farmers[name] && farmers[name].workArea === workArea && farmers[name].tasks.has(task)) {
                    console.log(`${name} has executed the task: ${task}!`);
                } else {
                    console.log(`${name} cannot execute the task: ${task}.`);
                }
                break;
            }
            case "Change Area": {
                const [name, newWorkArea] = [parts[1], parts[2]];
                if (farmers[name]) {
                    farmers[name].workArea = newWorkArea;
                    console.log(`${name} has changed their work area to: ${newWorkArea}`);
                }
                break;
            }
            case "Learn Task": {
                const [name, newTask] = [parts[1], parts[2]];
                if (farmers[name]) {
                    if (farmers[name].tasks.has(newTask)) {
                        console.log(`${name} already knows how to perform ${newTask}.`);
                    } else {
                        farmers[name].tasks.add(newTask);
                        console.log(`${name} has learned a new task: ${newTask}.`);
                    }
                }
                break;
            }
        }
    
    });

    Object.keys(farmers).sort().forEach(name => {
        const { workArea, tasks } = farmers[name];
        const taskList = [...tasks].sort().join(", ");
        console.log(`Farmer: ${name}, Area: ${workArea}, Tasks: ${taskList}`);
    });

}

// Run the program
executeCommands();
