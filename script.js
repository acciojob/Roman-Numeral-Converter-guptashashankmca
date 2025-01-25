// function convertToRoman(num) {
//   	const obj = {
//       0:['M',1000], 
//       1:['D', 500], 
//       2:['C', 100], 
//       3:['L', 50], 
//       4:['X', 10], 
//       5:['V', 5], 
//       6:['I', 1]
//     };

//   //your code here

// }
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));

function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
  };

  // Array to handle subtraction cases
  const subtractionCases = {
    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV',
  };

  let roman = '';

  // Handle subtraction cases first
  for (const [value, symbol] of Object.entries(subtractionCases)) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  // Handle standard cases
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;
}

// Testing the function
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(3999)); // Output: MMMCMXCIX



// do not edit below this line
module.exports = convertToRoman
