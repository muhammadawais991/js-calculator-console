// Calculator object
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
  };
  
  // Array of operations
  const operations = ['add', 'subtract', 'multiply', 'divide'];
  
  // Callback function for performing operations
  const performOperation = (operation, a, b) => {
    return new Promise((resolve, reject) => {
      if (operations.includes(operation)) {
        const result = calculator[operation](a, b);
        resolve(result);
      } else {
        reject('Invalid operation');
      }
    });
  };
  
  // Main function to use the calculator
  const calculate = (operation, a, b) => {
    performOperation(operation, a, b)
      .then((result) => {
        console.log(Result of ${operation}(${a}, ${b}): ${result});
      })
      .catch((error) => {
        console.error(Error: ${error});
      });
  };
  
  // Example usage
  calculate('add', 5, 3);
  calculate('subtract', 8, 2);
  calculate('multiply', 4, 6);
  calculate('divide', 9, 3);
  calculate('invalidOperation', 2, 2); // Triggering an invalid operation