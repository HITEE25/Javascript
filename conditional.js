let a = 4;
let b = 7;
if(a > b){
    console.log("a >b");
}
else{
    console.log("b > a");
}
//dark-mode
let mode="dark-mode";
let color;
if(mode === "dark-mode"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);

//else-if
if(a < 0){
    console.log("a is negative");
}
else if(a === 0){
    console.log("a is zero")
}
else if(a > 0 && a<=100){
    console.log("small positive number");
}
else{
    console.log("large positive number");
}

//ternary-operator

let age = 18;
result = age >= 18? "adult" : "not adult";
console.log(result);
