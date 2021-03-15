//=======================ES5===========================

function driverTest5(passedTest){//this is fine since var is FUNCTION SCOPED
    if(passedTest){
        var name='john';
        var yob=1991;
    }
    console.log(name+" born in "+ yob +" passed the test");
}

driverTest5(true);



//=======================ES6===========================

function driverTest6(passedTest){//won't work becaue after initalization you can't change a const
    let name;
    const yob=1991;
    if(passedTest){
         name='john';
         
    }
    console.log(name+" born in "+ yob +" passed the test");
}

driverTest6(true);



// var i=23
// for(var i=0;i<5;i++){
//     console.log(i)
// }

// console.log(i);



let i=23
for(let i=0;i<5;i++){
    console.log(i)
}

console.log(i);//since block cope it will print


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
