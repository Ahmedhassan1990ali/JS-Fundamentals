const { argv } = require('node:process');

let x = Number(argv[2]);
let y = Number(argv[3]);

let func = function(a,b){
    return a+b
}

console.log(func(x,y));