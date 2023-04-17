const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) return '\'arr\' parameter must be an instance of the Array!';
  let resArr=[];
  let delInd=[];
  function setNewArr(val, index){
    if (typeof val === "string") {
     switch (val){
      case '--discard-next':   
            if ((arr.length-1)>index) delInd.push(index+1);
            break;   
      case '--discard-prev':   
            if (resArr.length && !delInd.includes(index-1)) resArr.pop();
            break;   
      case '--double-next':   
            if ((arr.length-1)>index) resArr.push(arr[index+1]);
            break;   
      case '--double-prev':   
            if (resArr.length && !delInd.includes(index-1)) {
            resArr.push(arr[index-1]);}
            break;   
      default: 
        if (!delInd.includes(index)) resArr.push(val);
     } 
    } //end switch
     else {
      if (!delInd.includes(index)) resArr.push(val);
     }//end if  
     return;
  }
  arr.forEach((value, index)=>setNewArr(value, index));
  return resArr;
}


module.exports = {
  transform
};
