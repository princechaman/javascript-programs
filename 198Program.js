for (let i = 1; i < 5; i++) {
    for (let j = i; j <= 5; j++) {
        document.write("&nbsp;&nbsp;"); 
    }
    for (let k = 1; k <= i; k++) {
        document.write("*");
    }
    for (let k = i - 1; k >= 1; k--) {
        document.write("*");
    }
    document.write("<br>");
}