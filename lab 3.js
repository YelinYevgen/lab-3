// XOR function to perform XOR operation between two hexadecimal strings
const xor = (a, b) => {
  let res = '';
  
  // Loop through each character in the hex strings
  for (let i = 0; i < a.length; i++) {
      // XOR each character after converting them from hex to decimal
      const xorResult = parseInt(a[i], 16) ^ parseInt(b[i], 16);
      // Convert the result back to a hex string and append to the result
      res += xorResult.toString(16);
  }
  
  return res;
};

// Read three hex string inputs from user
const hexInput1 = readline(); // First input
const hexInput2 = readline(); // Second input
const hexInput3 = readline(); // Third input

// Perform XOR operations on the inputs
const xorResult = xor(xor(hexInput1, hexInput2), hexInput3);

// Convert the hex result into ASCII characters
// Each two hex digits represent one ASCII character
const asciiResult = xorResult.replace(/../g, hexPair => 
  String.fromCharCode(parseInt(hexPair, 16))
);

// Output the final readable ASCII result
console.log(asciiResult);
