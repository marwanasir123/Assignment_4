//question#3
//print 25 integer number;
var num:number=0;
while(num<26){
    console.log("integer_number",num);
    num=num+1;
}
//question#4
//print 5 table using while loop
var table:number=1;
while(table<=10){
    let result = 5*table;
    console.log("5*"+table+ "="+ result);
    table = table+1;

}
//Question#5
//first 10 even number
var even:number=1;
while(even<=20){
   if(even%2==0)
     {
        console.log(even);
     }
     even=even+1;
}
//question#6
//positive factorial using function and while loop

function getFactorialWhileLoop(n:number) {
  let result = 1;
  while (n > 1) {
      result = result * n;
      n -= 1;
  }
  return result;
}
var result2=getFactorialWhileLoop(5);
console.log(result2);
//question#7
//check negative number in array

var negative:number[]=[12,13,-14,15,-23]
var i=0;
while(i<negative.length){
    if(negative[i]<0){
        negative.splice(i,1);
    }
    i++;
}
console.log(negative);
