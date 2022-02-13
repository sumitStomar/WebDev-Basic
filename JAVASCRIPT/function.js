function calculator(str,a,b){
    if(str == 'add'){
        return function add(){
            console.log(a + b);
        }
    }
;
}
//Primitive Type Data 
//Boolean,null,Undefined,String,
//Reference Type  =>Array,Object,Function,
let returnedFunc = calculator('add', 3, 2);//Function expression
calculator()
//Javascript is a loosely typed language  and java is tricticly type language
// int a=10;//Strictly typed language lilike Java,C++
// a=10;//Loosely Type Language, like php,javascript,python
// console.log("returned function is \n" + );

// 3) IIFE-> Imediately invoke function expression

// function add(a, b){
//     return a + b;
// }
// add(2,3);

// let additionIIFE = (function (a,b) {
//     console.log(a+b);   
// })(20,30);


// 2d array

