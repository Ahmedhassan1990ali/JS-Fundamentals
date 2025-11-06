const { argv } = require('node:process');

let x = Number(argv[2])

if (!isNaN(x)){
    console.log("My number: "+ x)
} else {
    console.log("Not a number")
}