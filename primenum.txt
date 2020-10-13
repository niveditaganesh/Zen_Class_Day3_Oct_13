//Return all the prime numbers in an array
//Anonymous

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),count=0,b=[]
var prime = function(a){
    for(i=0;i<a.length;i++){
    for(j=2;j<+a[i];j++){
        if(a[i]%j===0 ){
            count++
        }
    }if(count===0 && a[i]!=1){
        b.push(a[i]);
    }else{count=0;}
    }

    return b;
};
console.log(prime(arr).join(' '));
})


//IIFE

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),count=0,b=[]
var prime = function(a){
    for(i=0;i<a.length;i++){
    for(j=2;j<+a[i];j++){
        if(a[i]%j===0 ){
            count++
        }
    }if(count===0 && a[i]!=1){
        b.push(a[i]);
    }else{count=0;}
    }

    return b;
}(arr);
console.log(prime.join(' '));
})
