//Remove duplicates from an array
//Anonymous
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),c=[],count=0
var duplicateRem = function(a){
    for(i=0;i<a.length;i++){
   if(c.length===0){
       c.push(a[i])
   }else{
       for(j=0;j<c.length;j++){
           if(c[j]==a[i]){
               count++
           }
       }if(count>0){count=0;}else{c.push(a[i])}
   }
}
    return c;
}
console.log(duplicateRem(arr).join(" "));
})


//IIFE

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});const userInput = [];inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),c=[],count=0
var duplicateRem = function(a){
    for(i=0;i<a.length;i++){
   if(c.length===0){
       c.push(a[i])
   }else{
       for(j=0;j<c.length;j++){
           if(c[j]==a[i]){
               count++
           }
       }if(count>0){count=0;}else{c.push(a[i])}
   }
}
    return c;
}(arr)
console.log(duplicateRem.join(" "));
})
