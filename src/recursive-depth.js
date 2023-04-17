const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
      var maxCounter=0;
      function calc(arr, counter){
          for (const el of arr) {
          let c=counter;
          if (Array.isArray(el)) {
             c++;
             calc(el, c);
          }
          if (c>maxCounter) maxCounter=c;   
          }
      return ;  
      }// end function

  if (Array.isArray(arr)) {
      maxCounter+=1;
      calc(arr,1);
  }
  return maxCounter;    
  }
}
module.exports = {
  DepthCalculator
};
