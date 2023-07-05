// Beat 98.83% in speed and 56.4% in memory

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * @param {number} x
 * @returns {boolean}
 */
const isPalindrome = (x: number): boolean => {
  const y = `${x}`;
  
  const len = y.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (y[i] !== y[len - i - 1]) {
      return false;
    }
  }

  return true;
}