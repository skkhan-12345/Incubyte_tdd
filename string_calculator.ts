//Add Method
function add(numbers: string): number {
    if (numbers === "") {
      return 0; 
    }
    if (numbers.includes(",")) {
        const numArray = numbers.split(",").map(Number);
        return numArray.reduce((sum, num) => sum + num, 0);
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
  
  
  