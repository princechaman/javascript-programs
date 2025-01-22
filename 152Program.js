function dividesTwoNum(num,d) {
    if (num/d>0) {
        return num/d;
    }
    else{
        throw new Error("Divior is Ziro  And Nagetive");
    }
}

let num = 12;
let d = -2;
console.log(dividesTwoNum(num,d));