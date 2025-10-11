//index.js file acquire info from all rest file which are present in the folder fruits

const apple = require("./apple");  //require file of apple,banana,orange
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange]; //store it into an array

module.exports=fruits;  //export the fruit directory



