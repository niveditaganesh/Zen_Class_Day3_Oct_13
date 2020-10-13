//Convert all the strings to title caps in a string array
//Anonymous
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),b=[]
var up = function(a){
    for(i=0;i<a.length;i++){
        b.push(a[i].toUpperCase());
}
    return b;
}
console.log(up(arr).join(" "));
})

//IIFE
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),b=[]
var up = function(a){
    for(i=0;i<a.length;i++){
        b.push(a[i].toUpperCase());
}
    return b;
}(arr);
console.log(up.join(" "));
})
