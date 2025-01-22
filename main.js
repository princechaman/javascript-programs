/*import * as math from './160Module1.js';
import * as string from './160Module2.js';
import * as user from './162Program.js';

console.log(math.add(2, 3));       
console.log(math.subtract(7, 4)); 
console.log(math.multiply(3, 4));
console.log(math.divide(12, 4)); 

console.log(string.toLowerCase("HELLO"));
console.log(string.toUpperCase("hello!!"))

console.log(user.login('sonu','sonu123'));
console.log(user.login('prince','prince123'));
console.log(user.logout());*/
function fatchData() {
    return new Promise((resolve,reject)=>{
        let success = true;
        setTimeout(()=>{
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject("Error fetching data");
            }
        },5000);
    });
}

fatchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
