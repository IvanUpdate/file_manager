const readline = require('readline');

const welcome = (name) =>  console.log(`Welcome to the File Manager, ${name}!`);

const fs_manager = () => {
    try {
        /*str.match(regexp)*/
        const user_name = process.argv[2].slice(11);
        console.log(user_name);
    } catch (err) {
        console.log("Invalid input");
        fs_manager();
    }

    /*console.log(process.argv);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('What do you think of Node.js? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.close();
    });*/
}


/*
rl.on('line', (input) => {
    console.log(`Received: ${input}`);
});*/

fs_manager();
