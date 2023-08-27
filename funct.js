"use strict";
//using function modifie the array
function insertv(index, value) {
    var arr = [1, 2, 3, 4];
    arr.splice(index, 0, value);
    return arr;
}
let arr2 = insertv(3, 9);
console.log(arr2);
