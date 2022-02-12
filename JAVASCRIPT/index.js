// //starting JS -> JavaScript
// //var let const


// // variable declaration
// var a; //int string float ? // humein batana nhi hota js mein ye kya hota hai 



// a = 10;
// console.log(typeof a );
// console.log(a);

// a = "hello"; //re initialize of variable 'a'
// console.log(typeof a);
// console.log(a);

// // typeof operator -> it tells us the type of data stored in a vaiable

// a= true;
// console.log(a);
// console.log(typeof a);

//  a = null;
//  console.log(a);
//  console.log(typeof a);

//Number
// var num = 10;
// console.log(num);
// var float = 2.4;
// console.log(float);

// // Boolean
// var t = true;
// var f = false;
// console.log(t);
// console.log(f);

// //String
// //    ' '      ,      " "     ,   ` ` 
// //single quotes, double quotes, backtick
// var str = 'a';
// console.log(typeof str);
// str = "How you doin ?\n i am fine";
// //backslash n("\n")
// console.log(str);

// var b = `enjoying the course
// what are u doing`;
// console.log(b);

// var num = 4500;
// // ${}
// console.log(`half of ${num} is ${num/2}`);



//VAR HAS SOME PROBLEM

// 1) redeclaration is allowed
var r = "hello";
console.log(r)

var r = 100;
console.log(r);

//let KeyWord is Used
let l = 100 ;  
console.log(l);

// overcome karne ke liye

//  let l = '200'  //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

// we can reinitialize a variable but we cannot redeclare it
l  = 300;
console.log(l);

// loops in JS
var num = 10;
for(var i =0; i < num; i++){
    if( i%2 == 0){   
    console.log("num is even");
}
}

//Constant Keyword
//na hi redeclare na reinitialize
const a =2;
console.log(a);

a = 5; // TypeError: Assignment to constant variable.






