//Return median of two sorted arrays of same size
//Anonymous

const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),count=0,b=[]
var brr=userInput[1].split(" ")
var median = function(a,b){
    a=arr.concat(brr).sort((a,b)=>a-b);
    if(a.length%2 ===0){
        m1=a[a.length/2];m2=a[(a.length/2)-1];
        m=(+m1+(+m2))/2
    }else{
        m=a[Math.floor(a.length/2)];
    }
    return m;
};
console.log(median(arr,brr));
})

//IIFE
const readline = require('readline');
const inp = readline.createInterface({ input: process.stdin});
const userInput = [];
inp.on("line", (data) => { userInput.push(data);});inp.on("close", () => {

var arr=userInput[0].split(" "),count=0,b=[]
var brr=userInput[1].split(" ")
var median = function(a){
    a=arr.concat(brr).sort((a,b)=>a-b);
    if(a.length%2 ===0){
        m1=a[a.length/2];m2=a[(a.length/2)-1];
        m=(+m1+(+m2))/2
    }else{
        m=a[Math.floor(a.length/2)];
    }
    return m;
}(arr,brr)
console.log(median);
})