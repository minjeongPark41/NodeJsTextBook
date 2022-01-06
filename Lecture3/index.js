// const {odd, even} = require('./var');
// const checkNumber = require('./func')
import { odd, even } from './var.js';
import checkNumber from './func.js';

function checkStringOddOrEven(str){
    if (str.length %2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(10))
console.log(checkStringOddOrEven('hello'))