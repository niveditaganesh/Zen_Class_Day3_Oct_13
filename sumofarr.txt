//Sum of all numbers in an array
//Anonymous
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),sum=0
var add = function(a){
    for(i=0;i<a.length;i++){
    sum+= +a[i]
    }

    return sum;
};
console.log(add(arr));
})


//IIFE
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),sum=0
var add = function(a){
    for(i=0;i<a.length;i++){
    sum+= +a[i]
    }

    return sum;
}(arr);
console.log(add);
})
