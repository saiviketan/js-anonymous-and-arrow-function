//task1
//ananoymous function
var sayHello=function(){
    console.log("hello");
}
sayHello();
//arrow function
var sayHello=() =>{
    console.log("hello");
}
sayHello()
//task2
//ananoymous function
var printNumber=function(a){
    console.log(a);
}
printNumber(5);
//arrow function
var printNumber=(a) =>{
    console.log(a);
    }
    printNumber(5);
//task3
//ananoymous function
var add=function(a,b){
    return a+b;
}
var result=add(10,20);
console.log(result);
//arrow function
var add=(a,b) =>{
    return a+b;
}
var result=add(10,20);
console.log(result);
//task4
//ananoymous function
var addAndPrint=function(a,b){
    console.log(a+b)
} 
addAndPrint(2,3)
//arrow function
var addAndPrint=(a,b) =>{
    console.log(a+b)
}
addAndPrint(2,3);
//task5
//ananoymous function
var subtract=function(a,b){
    return a-b;
}
var result=subtract(10,5);
console.log(result);
//arrow function
var subtract=(a,b) =>{
    return a-b;
}
var result=subtract(10,5);
console.log(result);
//task6
//ananoymous function
var double=function(x){
    return x+x;
}
console.log(double(10));
//array function
var double=(x) =>{
    return x+x;
}
console.log(double(10));
//task7
//ananoymous function
var square=function(x){
    return x*x;
}
console.log(square(10));
//array function
var square=(x) =>{
    return x*x;
}
console.log(square(10));
//task8
//ananoymous function
var isPositive=function(x){
    return x>0;
}
console.log(isPositive(10));
//array function
var isPositive=(x) =>{
    return x>0;
}
console.log(isPositive(10));
//task9
//ananoymous function
var absolute=function(x){
    if(x<0){
        return 0-x;
    }
    return x;
}

console.log(absolute(-5));
//array function
var absolute=(x) =>{
    if(x<0){
        return 0-x;
    }
    return x;
}

console.log(absolute(-5));
//task10
//ananoymous function
var max=function(a,b){
    if(a>b){
        return a;
    }
    return b;
}
console.log(max(20,10));
//array function
var max=(a,b) =>{
    if(a>b){
        return a;
    }
    return b;
}
console.log(max(20,10));