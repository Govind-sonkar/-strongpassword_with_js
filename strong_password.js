// 'use-strict';
const prompt=require("prompt-sync")() 
const ls1=["@","#","$","&"]; 
const ls2=["1","2","3","4","5","6","7","8","9","0"];
const ls3=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const ls4=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
password=prompt("enter your password :-  ")
// console.log(ls1.includes("&"));
a=0
b=0
c=0
d=0
for (i of password){
    // console.log(password[i]);
    if (ls1.includes(i) ){
        a+=1
    }
    if(ls2.includes(i) ){
        b+=1
    }
    if (ls3.includes(i) ){
        c+=1
    }
    if(ls4.includes(i)){
        d+=1
    }
}
//  how many uses spacial charector / number / small lettre / capital letter ?
console.log("spacial charector : ",a,"\nuses of number : ",b,"\nCapital letter : ",c,"\nSmall letter : ",d);  
if (a>=1 && b>=1 && c>=1 && d>=1 && password.length>=8 && password.length<=16){
    console.log("your passwor is strong :-",password);
}else{
    console.log("your password is week :-",password);
}