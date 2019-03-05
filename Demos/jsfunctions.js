// function isEven(num){
//     //return true if even
//     //return false if otherwise
//     if(num % 2 ===0){
//         return true;
//     } else {
//         return false
//     }
// }

function isEven(num){
    return num % 2 === 0;
}

function factorial(num){
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    //return the result variable
    return result;
  }

// or

// function factorial(num)
//     if(num === 0){
//       return 1;    
//     }
//     //define a result variable
//     var result = num;
//     //calculate factorial and store value in result
//     for(var i = num-1; i >= 1; i--){
//         result *= i;
//     }
//     //return the result variable
//     return result;
//   }

function kebabToSnake(str){
    //replace all '-' with '_'
    var res = str.replace(/-/g , "_");
    //return str
    return res;
}