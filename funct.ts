//using function modifie the array
function insertv(index:number, value:number):number[]{
    var arr:number[]=[1,2,3,4];
         arr.splice(index,0,value);
         return arr;
         }
let arr2:number[]=insertv(3,9);
console.log(arr2);





