let a= 10;
let b= 25;
let c= 5;
let d= 15;
let largest;

if(a>b && a>c && a>d){
    largest = a;
}else if(b>a && b>c && b>d){
    largest = b;
}else if(c>a && c>b && c>d){
    largest = c;
}
else {
    largest = d;
}
console.log("largest "+ largest);