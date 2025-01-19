let a= 10;
let b= 2;
let c= 5;
let d= 15;
let Smallest;

if(a<b && a<c && a<d){
    Smallest = a;
}else if(b<a && b<c && b<d){
    Smallest = b;
}else if(c<a && c<b && c<d){
    Smallest = c;
}
else {
    Smallest = d;
}
console.log("Smallest "+ Smallest);