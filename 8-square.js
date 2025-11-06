const { argv } = require('node:process');

let x = Number(argv[2]);

if (isNaN(x)) {
    console.log("Missing size");
}else{
    let st = "";
    for (let z = 0; z<x;z++){st+="X";}
    for (let z = 0; z<x;z++){
        console.log(st);
    }
}