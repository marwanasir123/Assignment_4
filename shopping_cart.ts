//shopping cart programm
var cart:string[]=["shoes","jacket","dress","cap"]
function add_values(index:number , values:string){
      //add values in array
      cart.splice(index, 0 , values)
      return cart;
}
let cart2= add_values(1,"T_shirt");
console.log(cart2);
//remove values in array
function remove_values(index:number, remove:number) {
   cart.splice(index , remove)
   console.log(cart);
}
remove_values(1,2);
//update cart content
function update_values(index:number, update:string) {
   cart.splice(index , 0,update);
   console.log(cart);
}
update_values(1,"T_shirt");







    