console.log("HELLO JS");
fullName = "Hitee Jitendrakumar Patel";
console.log(fullName);
age = 5;
console.log(age);
x = null;
y = undefined;
console.log(x);
console.log(y);
isfollow = true;
console.log(isfollow);
let Name = "hitee";//cannot redecalred but updated
Name = "mishu";
var month = 12;
var month = 11;//can redeclared and updated
var month = 24;
const PI = 3.14;//cannot redeclared and not updated
// genarelly const capital letter
//const should be intalize
console.log(month);
console.log(Name);
let a;
a=9;
console.log(a);
let day = 30;
let price=12.45;
let cake="choco";
let z;
let b = null;
let n = BigInt("123");
let uniqueSymbol = Symbol("hello!");
//object
const student ={
fullname : "Hitee Patel",
class : 12,
percentage : 95,
ispass : true,
};
//array
let marks=[56,68,78,45,79];
console.log(marks);
console.log(marks.length);
let heroes=["thor","batman","hulk"]
console.log(heroes);
console.log(typeof heroes);
//for loop
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
//for of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
//function
function abc(){
    console.log("hello world");
}
function print(abc){
    return abc;
}
window.console.log("hello")
//global