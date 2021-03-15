
//=================================12.call(),apply() and bind()=============================================


//=========================NOTE================================================
//this video should be watched to understand the complete theory
var john={
    firstName:'John',
    lastName:'Williams',
    age:27,
    presentation:function (manner,timeOfDay){
        if(manner==='professional'){
            console.log(
                'Hi everyone, good'+timeOfDay+'I\'m'+this.firstName+" "+this.lastName
            )

        }else if(manner==='friendly'){
            console.log(
                'Whatsup?, good'+timeOfDay+'I\'m'+this.firstName+" "+this.lastName
            )

        }

    }
}


john.presentation('friendly','morning');

var Anna={
    firstName:'Anna',
    lastName:'Hendricks',
    age:27
}


john.presentation.call(Anna,'friendly','morning')//how call works ,Anna doesn't even have presentation() method

//john.presentation.apply(Anna,'friendly','morning')//this works same as call() but only two arguments 
//1.this or the object
//2.array of arguments


//===========================bind()================================
// var years=[1990,1989,2015,2008,1934];

// function  arrayCal(arr,fn){
//     var arrayTemp=[];
//     for(var i=0;i<arr.length;i++){
//         arrayTemp.push(fn(arr[i]));
//     }
//      return arrayTemp;

// }

// function calAge(yearOfBirth){
//     return 2021-yearOfBirth;
// }


// function  fullAge(age){
// return (age>=18);
// }

// function fullAgeCountryWise(limit,age){//the bind example method
//     return (age>=limit)
// }

// var ages=arrayCal(years,calAge)
// console.log(ages);

// var fullOrNot=arrayCal(ages,fullAge);
//     console.log(fullOrNot);

//     var fullAgeJapan=fullAgeCountryWise.bind(this,45);//as the first argument we should pass this or object we prefer
//     var fullOrNotAgeArrayJapan=arrayCal(ages,fullAgeJapan);

//     console.log(fullOrNotAgeArrayJapan);








//================111.Closure=================================================


//=================NOTE===============================
//should watch the video till 11.00 at least
// function retirement(retirementAge){
//     a= " years to retire";
//     return function (yearOfBirth) {
//         var age=2021-yearOfBirth;
//         if(age<=retirementAge){
//         console.log(age+" years to retire")

//         }else{
//                 console.log("retired")
//         }
      

//     }
// }


// var retirmentUS=retirement(65);

//  retirmentUS(1990);//two ways of calling a function that returns a function

//  retirement(65)(1990);



//  function interviewQuetion(job) {//example 2
//     var a="thiz is "
//     return function (name){
//     if (job === 'Designer') {
      
//             console.log(a+ name+ "What kind of UI?");
        
//     } else if (job === 'teacher') {
       
//             console.log(a+ name+"what subject?");
        
//     }else{
//         console.log("no interview");
//     }
// }

// }

// var inteviewTeacher=interviewQuetion('teacher');
// inteviewTeacher('john');

// interviewQuetion('Designer')('rain');







//================================10.IIFE=========================================================
// function game(){
//     var score=Math.random()*10;
//     console.log(5<=score); 
// }

// game();

// ( 
//     function() {//this is the anonymous function of above game()
//         var score=Math.random()*10
//         console.log(5<=score);
//     })();





// (function(goodluck){//example 3
// var score=Math.random()*10
// console.log(score>=5-goodluck);
// })(5);//how to pass arguments to anonymous function



//==============================NOTE ===================================
//1.always encapsulate anonymous function with () so it won't be a statment but an expression
//in example 3 see how to pass arguments to anonymous function














//==================================================9.Functions returning functions===============================
// function interviewQuetion(job) {//thi function returns functions
//     if (job === 'Designer') {
//         return function (name) {
//             console, log("What kind of UI?");
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log("what subject?");
//         }
//     }

// }

// var teacherQuestion=interviewQuetion('teacher');//  BECASE interviewQuetion RETURNS A FUNCTION THIS IS ALSO A FUNCTIONAL EXPRESSION

// teacherQuestion('John');






//==================================passing functoions to functions/callback functions=========================================
// var years=[1990,1965,1937,2005,1998];

// function arrayCal(arr,fn){//fn is a function
//     var arrRes=[];
//     for(var i=0;arr.length>i;i++){
//         arrRes.push(fn(arr[i]));//we call our callback function here
//     }

//     return arrRes;
// }

// function calculateAge(el){
//     return (2021-el);
// }

// function isFullAge(el){
// return el>=18;
// }

// function heartBeatCalc(el){
//     if(el<81 && el>18){
//         return 206-(0.67*el)
//     }else{
//         return -1
//     }

// }

// var ages=arrayCal(years,calculateAge);//we have to assign it to a variables to how the result
// console.log(ages);

// var fullAge=arrayCal(ages,isFullAge);//here we pass the array returned by previous function call
// console.log("Age fullness",fullAge);

// var heartBeat=arrayCal(ages,heartBeatCalc);
// console.log("Heart Beats",heartBeat);





//=====================================NOTE==========================
//callbacks-function that we pas to other functions that will be call back later
//having callbacks is nice rather than having a single function do all stuff






//========================================================================Inheritance==========================


// var Person=function(name,yearOfBirth,job){

//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
// }


// Person.prototype.calculateAge =//way to inherit in JS, otherwise if we put in function contructor ever instance will contain the method
// function(){
//     console.log(2021-this.yearOfBirth)
// }




// var john =new Person("John",1990,"teacher");//new keyword will make the "this" point to current object
// var jane =new Person("Jane",1969,"deisgner");
// var mark =new Person("Mark",1948,"retired");



// john.calculateAge();//this is because prototype 

//==============NOTE====
//way to inherit in JS is prototype 
//otherwise if we put in function contructor ever instance will contain the method this way 
//only Person class will have it but instnce can use it














//====================================================="this" keyword in javascript===============================

// console.log("this in global context",this);//refers to windows object (the default)

// function calculateAge(yearOfBirth){
//     console.log("this in a regular function",this)//refers to windows object (the default)
//     return 2021-yearOfBirth;

// }

// calculateAge(1991);


// John={
//     name:"John",
//     yearOfBirth:"1980",
//     calculateAge:function(){
//         console.log("this inside method",this)//thi refers to John object
//         console.log("John's age",2021-this.yearOfBirth)

//         function innerFunction(){
//             console.log("inner FUnction's this",this)
//         }
//     }
// }

// John.calculateAge();



//  Mike={
//     name='Mike',
//     yearOfBirth=1972

// }


// Mike.calculateAge=John.calculateAge//METHOD BORROWING

// Mike.calculateAge();




//=================================Scopin and scope chain============================


// var a="Hello";//LEXICAL  SCOPING-children functions call parents
// first()

// function first(){
//     var b="World";
//     second();
    
//     function second(){

//       var c="EXOTIC"
//       console.log(a+b+c);
// ;    }
// }


// var a="Hi!"
// first()

// function first()
// {
//     var b="Hey!"
//     second()

//     function second(){//secon() has access to third() because third is declared in global context and second() has access to it
//         var c="Hello!"
//         third();

//     }
// }

// function third(){
//     var d="Kanishka"
//     //console.log(c);//third() has no access to c
//     console.log(a +d)//third() has  access to a and d

// }





//=====================Hoisting==================================

//  calculateAge(1991);//this excutes right because of HOISTING

// function calculateAge(birthYear){
//     console.log(2021-birthYear)
// }

// //retirement(1991);//THIS CANT BE DONE BECAUSE EVEN THOUGH FUNCTION DECALRATIONS GETS HOISTED NOT FUNCTION EXPRESSIONS

// var retirement=function(birthYear){
// console.log(55-(2021-birthYear));
// }

// retirement(1991);//how to call a fnction expression

// console.log(age);//possible because of Hoisting but the value will be "undefined"
// var age=23;
// console.log(age);

// function foo(){
//     console.log(age);//wiil print "undefined" since  it sees "age" in foo's execution context
//     var age=65;
//     console.log(age);
// }

// foo();
// console.log(age)//print 23 because it doesn't have any knowledge about foo's  Execution context






















// function calculateAge(birthYear){
//     return 2021-birthYear;
// }

// var johnAge=calculateAge(1978);
// var rainAge=calculateAge(1988);
// var dogAge=calculateAge(2019);


// function calculateRetirmentYear(name,age){
//     var retirmentAge=55;
//     var yearsToRetirment=55-age;
//     if(yearsToRetirment>0){
//         console.log("For "+name+"there are "+yearsToRetirment+"years to retire")
//     }else{
//         console.log(name+" already retired");
//     }

// }


// calculateRetirmentYear("John",johnAge);
// calculateRetirmentYear("Rain",rainAge);
// calculateRetirmentYear("Dog",dogAge);

//===========================STORAGE=========================================
// localStorage.setItem("key","value");
// localStorage.getItem("key");
// localStorage.setItem("key2","value");
// localStorage.removeItem("key2");
// localStorage.getItem("key2");

// sessionStorage.setItem("key2","value");


// document.cookie='name=smith'
// console.log("hi")
