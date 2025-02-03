//Add Method
function add(numbers: string): number {
    if (numbers === "") {
      return 0; 
    }
    
    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
      const delimiterLineEnd = numbers.indexOf("\n");
      delimiters = [numbers.slice(2, delimiterLineEnd)];
      numbers = numbers.slice(delimiterLineEnd + 1);
    }
  
    const splitNumbers = numbers.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);
    return splitNumbers.reduce((sum, num) => sum + num, 0);
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

  test('Supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  
  
  