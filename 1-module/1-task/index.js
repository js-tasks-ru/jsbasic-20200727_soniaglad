/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  if (n === 0 || n === 1) {
    return 1;
  }

  let multiplier = 1;
  
  for (let i = n; i > 0; i--) {
    multiplier *= i;
  }

  return multiplier;
}