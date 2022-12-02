//Operaters
//fruit = prompt('What is you favorite fruit?');
//console.log(fruit);
/*food = Number(prompt('hot much was the food'));
tipPercentage = Number(prompt('how much % tip do you want live')) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;
console.log('tip ampount',tipAmount);
console.log('total', total);*/






//console.log(tipAmount);

//alert(tipAmount);
/*apps which built by javascript will never use prompt to interact with user
we user forms
*/


// Baby Wather APP
// condtionals
// Condtional Operaters [==, ===,<, > ,>= , <=, !=, !==]
// if rain ===> 'Grap Amberaila'
//else ====>  'Wear your sun glass'
//let weather = prompt('How is the weather');
//if (weather == 'rainy'){
//    console.log('Grap Amberala');
//} else{
 //   console.log('Wear your sunglasses');

//}


//FUNCTION
//function sayMyName(name) {
    //console.log(name);
    

//}
//sayMyName('Sofia');
//this fuctiona who called 'sayMyName' have one parrameter called name.
//it will log my name in the console
/*
function greeting(name) {
    
    greet = `hi ${name} , Nice to meet you`;
    console.log(greet);
}
greeting('Asenakew');

function sum(a, b) {
    //Return
    return a + b;
    
}
num1 = sum(1,2);
console.log(sum(1, 2));


//changeig javascript opera to fuction
/*food = Number(prompt('hot much was the food'));
tipPercentage = Number(prompt('how much % tip do you want live')) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;
console.log('tip ampount',tipAmount);
console.log('total', total);
// THE above oeration to fuction
function calculateFoodBillTotal(food, tip) {
    tipPercentage = tip / 100;
    tipAmount = food * tipPercentage;
    total = food + tipAmount;
    return total
}
    console.log(calculateFoodBillTotal(500, 20))
    console.log(calculateFoodBillTotal(250, 20))





// Dynamic Fuction

//Arrow fuction

const sumArrow = (a, b) =>{
    return a + b;


}
//Arrow fuction with implicit return
// IMPORTANT: implivit return ,remove curly bracets
const sumArrow2 = (a, b) => a + b;
console.log(sumArrow2(10, 50));*/
                            //Arrays
    
//const grocerise = ['banana', 'appel', 'orange', 'peron'];
//console.log(grocerise);
//grap the second index
//console.log(grocerise[2]);
                                // Array Method
//grocerise.push('tomat');
//grocerise.push('mango');
//grocerise.push('pappaya');
//console.log(grocerise);
                                //Array Slice
//console.log(grocerise.slice(0, 2));

//console.log(grocerise.slice(2, 4));




                                 //Array Indexof


//console.log(grocerise.indexOf('peron'));
//console.log(grocerise.indexOf('orange'));
                            // Array Length
//console.log(grocerise.length);



                                    //OBJECT

//const person = {
//    name: 'Leonardo',
//    shirt: 'white'




//}
//console.log(person.name);
//console.log(person.shirt);
//// We can exice element of the object in diffrren ways. console.log above and down give the same result
//console.log(person['name']);
//console.log(person['shirt']);
//// assign new element to the object
//person.phone ='0046-7435-43563533';
//console.log(person.phone);
//console.log(person);
////person2
//const person2 = {
//    name: 'Asenakew',
//    shirt: 'pink',
//    phone: '0046-0735-345383554',
//    assets: 2000000,
//    liability: 1000000,
//    netWorth: function name() {
//        return this.assets -this.liability;
//        
//    }
//

//

//}
//console.log(person2.name);
//console.log(person2.shirt);
//console.log(person2.phone);
//console.log(person2);

//const introducer = (name, shirt) => {
//  const intro =  `Hi,my name is ${person.name} and the color of my shirt  sis ${person.shirt} and my personal new worth is ${person.netWorth()} `;

//return intro;



//}
//console.log(introducer('Asenakew', 'brown'));

//console.log(introducer('Asenakew', 'brown'));
//6:LOOPS
//const fruits = ['appel', 'banana',' peron','pappay', 'kiwi','appel', 'banana',' peron','pappay', 'kiwi'];
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[3]);
//console.log(fruits[4]);
//console.log(fruits[5]);
//console.log(fruits[6]);
//console.log(fruits[7]);
//console.log(fruits[8]);
//console.log(fruits[9]);
//console.log(fruits[10]);
// to do many loops with writing console.log,we can use for-loop method
//if try to write the loop function above with for-loop function
//for(let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//}
// we can write iit for loop function shorter like below
//for(const fruit of fruits){
//    console.log(fruit);
//}
//const numbers = [1,2,3,4,5,6,7,8,9,10];
//console.log(numbers[0]);
//console.log(numbers[1]);
//console.log(numbers[3]);
//console.log(numbers[4]);
//console.log(numbers[5]);
//console.log(numbers[6]);
//console.log(numbers[7]);
//console.log(numbers[8]);
//console.log(numbers[9]);
//console.log(numbers[10]);
//for(let i = 0; i < numbers.length; i++) {
//       console.log(numbers[i]);
//    } 
//for (const number of numbers) {
    //console.log(number * 2); // we mulitplie the value of item array by 2

// }


 // how can doubel the value  in a array
 // foe exampel from [1,2,3,4,5,6,7,8,,10] to
 //[2,4,6,8,10,12,14,16,18,20]
 // we will creat a new array who can store the result
 //const double = (numbers) => {
    //let result = [];
   // for (const number of numbers){ 
    //console.log(number * 2); 
       // result.push (number **4);
// }
    //return result;
//}
//console.log(double([1,2,3,4,5,6,8,10]));
//let result = [];
//    for (const number of numbers){ 
//    //console.log(number * 2); 
//        result.push (number * 2);
//        console.log(result);
// }
    
//const howManyLetters = () => { 

//    const phrase = 'hey, can you go togroviery store with me?';
//    for (letter in phrase){ 

//     console.log(letter);
//}
//}
//console.log(howManyLetters())
//////////////////exercies about loop
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
    console.log(numbers[3]);
    console.log(numbers[4]);
    console.log(numbers[5]);
    console.log(numbers[6]);
    console.log(numbers[7]);
    console.log(numbers[8]);
    console.log(numbers[9]);

for (let i = 0; i < numbers.length; i++) { 
    console.log(numbers[i]);
}

for (const number of numbers){ 
    console.log(number **5);
}
const trippel = (numbers) => { 
    console.log(number[i]** 4);
}
function printArray(arr) {
    for (var i = 0; i < arr.length;i++);
    for (var j = 0; j < arr.length;j++);
    console.log(arr[i][j]);
    
}
 var arr = [[1,2],[3,4],[5,6]];
 printArray(arr);



 function printArray(arr,arr) {
    for (var i=0;i<arr.length;i++){
      for(var j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
      }   
    }
  }
  var arr = [[1, 2],
             [3, 4],
             [5, 6]];
  arr = 
  printArray(arr) */


  //function deleteElement(arr, ele) {
  //  f//or (var i=0;i<arr.length;i++){
  //    if(arr[i]==ele){
 //       arr.splice(i,1); //Delete element from array
   //   }
   // }
   // return arr;
  //}
  /*let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
    console.log(numbers[3]);
    console.log(numbers[4]);
    console.log(numbers[5]);
    console.log(numbers[6]);
    console.log(numbers[7]);
    console.log(numbers[8]);
    console.log(numbers[9]);
    console.log(numbers[10]);
    console.log(numbers[11]);
    console.log(numbers[12]);
    console.log(numbers[13]);
    console.log(numbers[14]);
    console.log(numbers[15]);
    console.log(numbers[16]);
    console.log(numbers[17]);
    console.log(numbers[18]);
   */
//for (let i = 0; i < 20; i++) {
//    console.log(i);
//}
for (let i = 3; i < 29; i++) {
    return i + 2;
    console.log(sum);
    
}