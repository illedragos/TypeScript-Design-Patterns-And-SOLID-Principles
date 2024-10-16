//Date Class
//Get current Year
//Get Current Month
//Get Current Date


const todayDate = new Date();
console.log("Year:", todayDate.getFullYear());
console.log("Month:", todayDate.toLocaleString('default', { month: 'long' }));
console.log("Day:", todayDate.getDate());
