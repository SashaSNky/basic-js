const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const season=[
     'winter',
     'spring',
     'summer',
     'autumn'
  ];
 
  if (typeof date==='undefined') {
      return 'Unable to determine the time of year!';
     } 
     else {
         console.log(new Date(2150, 7, 21, 18, 36, 41, 841));
         if (!parseInt(+date)) return 'Invalid date!'; 
         //if (typeof date ==='number'|| Math.abs(Date.now()-(+date))<1000)  return 'Invalid date!'; 
     let m=1+date.getMonth();
     if (Math.floor(m/3)>=4) return  season[0] 
       else 
         return season[Math.floor(m/3)];               
  }
 }

module.exports = {
  getSeason
};
