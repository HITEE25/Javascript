let marks = prompt("Enter the number");
let grade;
if(marks>=90 && marks<=100){
    grade = "A";
}
else if(marks<=89 && marks>=70){
    grade = "B";
}
else if(marks<=69 && marks>=50){
    grade = "C";
}else if(marks<=49 && marks>=30){
    grade = "D";
}
else{
    grade = "fail";
}
console.log(grade);