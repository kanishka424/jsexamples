//==============================15.Classes============================================================
//========================NOTE======================
//Behind the scenes both ES 5 and ES 6 does the same by attaching methods to prototype ,etc...seee the book
//====================================ES5===================
var Person5= function(name,yearOfBirth,job){
this.name=name;
this.yearOfBirth=yearOfBirth;
this.job=job;

}

Person5.prototype.calculateAge=function (){
        let age =new Date().getFullYear()-this.yearOfBirth;//this points to object that calls the method
    console.log(age)
    return age;

}


var john=new Person5("John",1997,"Accountant");
john.calculateAge(1997)


//====================================Es6==========================================
class Person6{//how to define a class
    constructor(name,yearOfBirth,job){//needed method to a Class
     this.name=name;
     this.yearOfBirth=yearOfBirth;
     this.job=job   
}

calculateAge(){//how to decalre a method in a calss behind the scen this will also be attached to prototype object
    let age =new Date().getFullYear()-this.yearOfBirth;//this points to object that calls the method
    console.log(age)
    return age;
}

static greeting(){//how to create a static method
    console.log("grreting")
}

}



let smith=new Person6('Smith',2003,'cleark');
console.log(smith);
smith.calculateAge();
Person6.greeting()//only way to call a static method
//=================Quetion===============
//==how to create a static varible in js
//================================13.Default parameter========================================================
//-=====================================using ES 5========================
// function SmithPerson(firstName,yearOfBirth,lastName,nationality){
//     lastName===undefined ? lastName = 'Smith' :lastName = lastName;
//     nationality===undefined?nationality='Sri Lankan':nationality=nationality;


//     this.firstName=firstName;
//     this.yearOfBirth=yearOfBirth;
//     this.lastName=lastName;
//     this.nationality=nationality;
    

// }


// var John=new SmithPerson('John',1989);

//-=====================================using ES6========================

function SmithPerson(firstName,yearOfBirth,lastName='Peters',nationality='English'){//HOW TO USE DEFAULT PARAMETERS

    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality=nationality;
    

}


var John=new SmithPerson('John',1989);


console.log(John);












//========================12.Rest paramters========================================

//================================ES 5 way=====================================
// function isFullAge5(){
//     console.log(arguments);

//     var fullAgeArray=Array.prototype.slice.call(arguments)//how to convert to an array (we also have Arrays.from() for Node list)

//     fullAgeArray.forEach(
//         function(cur){
//             console.log(18<=(new Date().getFullYear()-cur));
//         }
//     );
    
// }



// isFullAge5(1967,2005,1945);


// isFullAge5(1934,2009,2010,2012,1999);



//===================================ES6 way REST parameter=================================



// function isFullAge6(...years){//using rest parameter ...years will turn into an array we don't explicitly have to do that
// years.forEach(
//     el=>console.log(new Date().getFullYear()-el>=18)
// )
// }

// isFullAge6(1990,2004,1989,1995,1999,2005);


//================================ES 5 passing another argument way=====================================
// function isFullAge5(limit){
//     console.log(arguments);

//     var fullAgeArray=Array.prototype.slice.call(arguments,1)//how to convert to an array (we also have Arrays.from() for Node list)

//     fullAgeArray.forEach(
//         function(cur){
//             console.log(limit<=(new Date().getFullYear()-cur));//how does limit know it is 18?
//         }
//     );
    
// }



// isFullAge5(18,1967,2005,1945);//here and below both we pass age limit at first


// isFullAge5(18,1934,2009,2010,2012,1999);



//===================================ES6 way REST parameter paaing limit argument=================================



// function isFullAge6(limit,...years){//THIS IS SO SIMPLE!!!!
// years.forEach(
//     el=>console.log(new Date().getFullYear()-el>=limit)
// )
// }

// isFullAge6(22,1990,2004,1989,1995,1999,2005);
















//============================11.Spread==================\


// function addAll(a,b,c,d){
//     return a+b+c+d;
// }

// var sum1=addAll(4,3,7,8);
// console.log(sum1);


// //  IF THE ARGUMENT IS AN ARRAY
// //=====================ES 5=============

// var ages=[34,23,56,78]

// var sum2=addAll.apply(null,ages);

// console.log(sum2);



// //=====================ES 6 spread==============================

// var sum3=addAll(...ages);
// console.log(sum3);


// //==================ES 6 spread 2================

// var familySmith=['john','kane','Bravo'];
// var familyMiler=['Ann','Harry','Ben'];


// const bigFamily=[...familySmith,'Lily',...familyMiler];//good example of using spread

// console.log(bigFamily);

// //==================ES 6 spread 3================

// const h=document.querySelector('h1');//querySelector() returns a node

// const boxes=document.querySelectorAll('.box');//querySelectorAll() returns a node list

// const all=[h,...boxes];

// Array.from(all).map(cur=>
//     cur.style.color='purple'
// );






























//=======================================10.Arrays ES 6=============================


//====================================9.Detructuring================================

// //ES 5 way,practically difficult when more values in the array
// var john=['john',26];
// var name5=john[0];
// var age5=john[1];


// //ES6 desttructuring
// const [name,age]=['john',26];//creats two varibles named "name" and "age" using the value provided by the array
//   console.log(name);
// console.log(age)

// //ES 6 destructuring for objects
// var obj={
//     firstName:"Tim",
//    lastName:"Wu"
// }


// const {firstName,lastName}=obj//exact same property name and { } braces are a must
// console.log(firstName);
// console.log(lastName);


// const {firstName: a,lastName: b}=obj//if you want different names
// console.log(a);
// console.log(b);

// //Before ES 5 if we are to return more than single value we must return an object
// //but with destructuring it is much easier

// var calAge=(birthYear)=>{
// const age=new Date().getFullYear()-birthYear;//the varibles returned are block scoped
// return [age,65-age];
// }

// const[agex,retirment]=calAge(1990);
// console.log(agex);
// console.log(retirment);








//=========================================8.8. Arrow Functions Lexical 'this' Keyword==========================

//=======================================with ES 5=====================================
// var box5={
//     color:'green',
//     position:1,
//     clickMe:function(){
//         var self=this;//because in the inner function we don't have access to box5's "this" we use this trick
//         document.querySelector('.green').addEventListener(
//             'click',function(){
                
//                    var str= 'this is the box '+self.color+' and it is in postion '//if we use "this" in this function it would point to global object aka window object
//                     +self.position;

//                     alert(str);
               
//             }
//         )

//     }
// }

// box5.clickMe();




//=======================================with ES 6=====================================
// var box6={
//     color:'green',
//     position:1,
//     clickMe:function(){
       
//         document.querySelector('.green').addEventListener(
//             'click',()=>{//in an arrow function "this" points to surrounding functions "this"
                
//                    var str= `this is the box ${this.color} and it is in postion ${this.position}`;

//                     alert(str);
               
//             }
//         )

//     }
// }

// box6.clickMe();





//=======================================ES 5 with bind()=====================================
// function Person(name){
//     this.name=name
// }

// var john=new Person('John');



// Person.prototype.myFriends5=function(friends){
//     var arr=friends.map(function(el){
//         return`${this.name} is friends with ${el}`
//       }
//     .bind(this))//this binds the "this" of Person object to the function another way instead of var self=this;
//     console.log(arr)
// }

// let friends=['Steve','Harry','Kathy'];


// john.myFriends5(friends);



// function Person(name){
//     this.name=name
// }

// var john=new Person('John');



// Person.prototype.myFriends5=function(friends){
//     var arr=friends.map(el=>`${this.name} is friends with ${el}`  
//     )
//     console.log(arr)
// }

// let friends=['Steve','Harry','Kathy'];


// john.myFriends5(friends);





//=======================================with ES 6 wrong pointing making clickME an arrow function=====================================
// var box66={
//     color:'green',
//     position:1,
//     clickMe:()=>{//now the "this" keyword points to global object because it doen't have it's own and refers to waht box66 points so value s will again be undefined
       
//         document.querySelector('.green').addEventListener(
//             'click',()=>{//in an arrow function "this" points to surrounding functions "this"
                
//                    var str= `this is the box ${this.color} and it is in postion ${this.position}`;

//                     alert(str);
               
//             }
//         )

//     }
// }

// box66.clickMe();












// //==============================7.arrow function===================================== 
// const years=[1990,1985,1975,1982];


// //===================Es 5=====================


// var ages5=years.map(function(el){//map with regular function
//     return 2021-el;
// })
// console.log(ages5)


// let ages6=years.map(el=>2021-el);//same sceanrio with arrow functions 1

// console.log(ages6)
// //arrow function with two variables

// ages6=years.map((el,index)=>// 2
//   `${index+1}'s age is ${2021-el}`)

// console.log(ages6);



// //three ways of arrow functions
// //1.One argument + one line  code(no brackets needed around the argument and "return" keyword not required)
// //2.several arguments +one line code("return" keyword not required)
// //3.several argument + several code lines("return" keyword required with {} around code)


// //===============1===========
// //see above
// //===================2
// //see above



// //=======================3========
// ages6=years.map((el,index)=>{
//     let now =new Date().getFullYear();
//     const age=now -el;
//     return `Age element is ${index} and age is ${el}`;
// })

// console.log(ages6);












//=============================6.Strings in ES 6==========================

// let firstName='John';
// let lastName='wills';
// const birthYear=1990
// function calAge(yearOfBirth){
//   return 2021-birthYear;
// }


// //======ES 5=========

// console.log(
//     'Hi I\'m '+firstName+" "+lastName+".I \'m currently "+ calAge(birthYear)+" years old"
// )


// //======ES 6 WITH TEMPLATE LITERALS=========

// console.log(
//     `Hi I'm ${firstName} ${lastName}.I am currently ${calAge(birthYear)}`// TEMPLATE LITERALS 
// )


// //============new String Methods==================

// const n=`${firstName}${lastName}`
// console.log(n.startsWith("J"));
// console.log(n.endsWith("kj"));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5));//because we need space we use TEMPLATE LITERALS











//=============================5.Blocks and IIFE==========================
//to create a block we use { }
//new impler way of keeping  data privacy
// {
//     let a=5;
//     const b=4;
// }

// //console.log(a);//not possible because a is block scoped

// //older wqy of keeping data privacy

// (
//     function(){

//         var c=5;
//     }()
// )

// //console.log(c)//thouggh c is var not possible because of IIFE






//========================================4.variables decalration with let and const==============================================


//=======================ES5===========================

// function driverTest5(passedTest){//this is fine since var is FUNCTION SCOPED
//     if(passedTest){
//         var name='john';
//         var yob=1991;
//     }
//     console.log(name+" born in "+ yob +" passed the test");
// }

// driverTest5(true);



// //=======================ES6===========================

// function driverTest6(passedTest){//won't work becaue after initalization you can't change a const
//     let name;
//     const yob=1991;
//     if(passedTest){
//          name='john';
         
//     }
//     console.log(name+" born in "+ yob +" passed the test");
// }

// driverTest6(true);



// // var i=23
// // for(var i=0;i<5;i++){
// //     console.log(i)
// // }

// // console.log(i);



// let i=23
// for(let i=0;i<5;i++){
//     console.log(i)
// }

// console.log(i);//since block cope it will print


// function driverTest6(passedTest){//won't work becaue after initalization you can't change a const
//     let name;
//     const yob;
//     if(passedTest){
//          name='john';
//          yob=1991;
//     }
//     console.log(name+" born in "+ yob +" passed the test");
// }

// driverTest6(true);

// function driverTest6(passedTest){//this shows an error since let and const are BLOCK SCOPED
//     if(passedTest){
//         let name='john';
//         const yob=1991;
//     }
//     console.log(name+" born in "+ yob +" passed the test");
// }

// driverTest6(true);



//===========================7. Next Generation JavaScript Intro to ES6  ES2015

