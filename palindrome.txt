//Return all the palindromes in an array
//Anonymous

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),c=[]
var palindrome = function(a){
    for(i=0;i<a.length;i++){
    var  b=a[i].slice(0);
    
        if(a[i]==b.split("").reverse().join("")){
           c.push(a[i]) 
        }
}
    return c;
}
console.log(palindrome(arr).join(" "));
})


//IIFE

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),c=[]
var palindrome = function(a){
    for(i=0;i<a.length;i++){
    var  b=a[i].slice(0);
    
        if(a[i]==b.split("").reverse().join("")){
           c.push(a[i]) 
        }
}
    return c;
}(arr);
console.log(palindrome.join(" "));
})