const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(membersArr) {
  let resStr = '';
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXWZ'; 
  let alphaArr=alphabet.split(''); 
  if (Array.isArray(membersArr)){
    membersArr.forEach(str=>{
      if (typeof str === "string") {
        str=str.trim();
        console.log(str);
        if (str.length>0) {
          if (alphaArr.includes(str[0].toUpperCase())) resStr+=str[0].toUpperCase();
        }
      }      
    })//end forEach;
  return  resStr.split('').sort().join('');//'string'
  }//end if array
  else {
    return false;}
}

module.exports = {
  createDreamTeam
};
