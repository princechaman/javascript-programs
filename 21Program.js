let side1 = 5;
let side2 = 3;
let side3 = 5;

if(side1 == side2 && side1 == side3){
    console.log("equilateral");
}else if(side1 == side2 || side1 == side3){
    console.log("isosceles");
}
else{
    console.log("scalene");
}