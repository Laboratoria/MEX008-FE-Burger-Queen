#!/usr/bin/env node

// Esta función lee el Readme y lo convierte en formato HTML

// const https = require('https');
const MarkdownIt = require ('markdown-it');
const fs = require ('fs');
md = new MarkdownIt();

// const [A,B,...args] = process.argv;
// console.log(process.argv);

const readFile = () =>{
fs.readFile('README.md', 'utf-8', (err, resolve) => {
  if(!resolve) {
    console.log('error: ', err);
  } else {
    const result = md.render(resolve);
    console.log(result);
  }
});
}
readFile();



module.exports='readFile';







// if (options.validate !== undefined && options.stats !== undefined){
//     console.log('ha elegido las dos opciones');
// }
// else if (options.validate ===true){
//     console.log('ha elegido validate');
// }else{
//     console.log('ha elegido stats');
    
// }

