const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 function countCats(matrix) {
  var count=0;   
  function proverka(val){
      if (typeof val !== "string") return false;
      if (val.length===2) {
        if (val[0]==='^' && val[1]==='^') count++;
      }
  } 
  matrix.map(arr=>{if (Array.isArray(arr)) {
     arr.map(item=>proverka(item))
    } else proverka(arr);
  }   
  )
  return count;  
}

module.exports = {
  countCats
};
