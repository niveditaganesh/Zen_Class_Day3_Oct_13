//Rotate an array by k times and return the rotated array
//Anonymous
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {
//k number of times the rotation has to be made
//array is entered first
//Format is (arr,k)
var arr=userInput[0].split(" "),c=[],count=0
var k=+userInput[1];
var rotate = function(a,k){
    temp=a.slice(0,k);
    for(i=k;i<a.length;i++){
   c.push(a[i])
}for(i=0;i<temp.length;i++){
    c.push(temp[i])
}
    return c;
}
console.log(rotate(arr,k).join(" "));
})



//IIFE

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {
//k number of times the rotation has to be made
//array is entered first
//Format is (arr,k)
var arr=userInput[0].split(" "),c=[],count=0
var k=+userInput[1];
var rotate = function(a,k){
    temp=a.slice(0,k);
    for(i=k;i<a.length;i++){
   c.push(a[i])
}for(i=0;i<temp.length;i++){
    c.push(temp[i])
}
    return c;
}(arr,k)
console.log(rotate.join(" "));
})
