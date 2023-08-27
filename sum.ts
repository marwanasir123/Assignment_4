//question#8
//using while loop sum number
function sum_values(num:number[]){
    var index=0;
    var values=0;
    while(index<num.length){
         values = values+num[index];
         console.log(values);
         index++; 
    }
  }
  sum_values([5,2,4,5]);
   //question#9;
  // temperature converted into fahrenheit
  var temperature:number[]=[3,4,5]
  var index = 0;
  while(index<temperature.length){
    var fahrenheit = (temperature[index]*9/5)+32
    console.log(fahrenheit);
    index++;
  }
  