const yargs = require("yargs/yargs");
const {hideBin} = require('yargs/helpers');
const {add} = require("../app")
const argv = yargs(hideBin(process.argv)).argv


let title = argv.title
let actor = argv.actor
const app =()=>{
    if(argv.add){
        add(actor, title);
        console.log(`Movie ${title} with ${actor} added`);
    }
}

app();