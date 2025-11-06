const { argv } = require('node:process');

let x = Number(argv[2]);

let func = function(a){
    if (a===1){
        return 1
    } else {
        return a*func(a-1)
    }
}

if (isNaN(x)){
    console.log(1);
} else{
    console.log(func(x));
}