const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, {repeatTimes=1, separator='+', addition="", additionRepeatTimes=1, additionSeparator='|'}) {
  let res='';
 if (typeof str!=='string') str=String(str);
 if (typeof addition!=='string') addition=String(addition);
 for (let i=1; i<=repeatTimes; i++){
  res=res+str;
  for (let j=1;j<=additionRepeatTimes; j++){
      res=res+addition;
      if (j<additionRepeatTimes) res+=additionSeparator; 
  }
  if (i<repeatTimes) res+=separator; 
 }
 return res;
}


module.exports = {
  repeater
};
