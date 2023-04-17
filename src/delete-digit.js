const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let digits=['0','1','2','3','4','5','6','7','8','9']; 
  let arr=String(n).split('');
  //et resArr=[];
  let max=0;
  console.log(arr);
  let i=0;
  while (i<digits.length){
   var index=arr.indexOf(digits[i]);
   if (index>=0) {
     let tmpArr=arr.slice();
     tmpArr.splice(index,1);
     let tmp=Number(tmpArr.join(''));
     if (tmp>max) max=tmp;
     i++;
    } else i++;
  }
  return max;
 }

module.exports = {
  deleteDigit
};
