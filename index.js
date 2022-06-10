const readline = require('readline');
import { argv } from 'process';

const welcome = (name) =>  console.log(`Welcome to the File Manager, ${name}!`);

const fs_manager = () => {
    try {
        const user_name = process.argv.slice(2)[0]/*.slice(args[0].indexOf('=') + 1);*/
        console.log(user_name);
    } catch (err) {
        console.log("Invalid input");
        fs_manager();
    }

  /*  console.log(process.argv);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    */
}


/*
rl.on('line', (input) => {
    console.log(`Received: ${input}`);
});*/

fs_manager();
