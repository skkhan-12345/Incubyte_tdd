//Add Method
function add(numbers: string): number {
    if (numbers === "") {
      return 0; 
    }
    
    if (numbers.includes("\n") || numbers.includes(",")) {
      const splitNumbers = numbers.split(/[\n,]/);
      return splitNumbers.map(Number).reduce((sum, num) => sum + num, 0);
    }
    
    return parseInt(numbers, 10);; 
  }

  test('Empty string returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('Single number returns the number itself', () => {
    expect(add("1")).toBe(1);
  });

  test('Two numbers returns the sum of the numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('Handles new line as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  
  