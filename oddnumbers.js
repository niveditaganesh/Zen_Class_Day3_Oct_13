//Print odd numbers in an array

//Anonymous
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),flag=true,b=[]
var odd = function(a){
    for(i=0;i<a.length;i++){
    if(a[i]%2!==0){
        b.push(a[i])
    }
}
    return b;
}
console.log(odd(arr).join(" "));})

//IIFE
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),flag=true,b=[]
var odd = function(a){
    for(i=0;i<a.length;i++){
    if(a[i]%2!==0){
        b.push(a[i])
    }
}
    return b;
}(arr);
console.log(odd.join(" "));
})


