// function digitize(n) {
//     //code here
//     let numArr = [];
    
//     while(n > 0){
//       numArr.push(n % 10);
      
//       n = Math.floor(n/10);
//     }
    
//     return numArr;
//   }

// Given a random non-negative number, 
// you have to return the digits of this 
// number within an array in reverse order.

//Is it always going to be integers, any spaces or empty arr

//R: return new array in reverse order

//[123] --> [321]

//E: If we are given 123  should reutrn 321
//E: If we are given 456  should reutrn 654
//E: If we are given 23  should reutrn 32

//p: make and funcitons that takes in array
//map through arr and return the order via method




function digitize(n) {
    // if(arr.length===0 || arr === undefined){
    //   console.log('Array is invalid')
    // }else
      return Array.from(String(n), Number).reverse();
    }
  
    console.log(digitize([321]), [123])
    console.log(digitize([]))