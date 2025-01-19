let str = "A man, a plan, a canal: Panama";

let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

let isPalindrome = cleanedStr.split("").reverse().join("");
if(cleanedStr === isPalindrome){
    console.log("isPalindrome");
}else{
    console.log(" Not isPalindrome");
}

