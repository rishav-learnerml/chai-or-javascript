const accountID = 12;
let name = "rishav";
var surname = "chatterjee";
city = "basirhat";
// accountID=13 --> not allwed -> can't re-assign values to constant
console.log(accountID);
city = "sangrampur";
/*
var is depricated nowadays for conflicts in local/functional/block level scope vs global scope
*/
console.table([accountID, name, surname, city]);
