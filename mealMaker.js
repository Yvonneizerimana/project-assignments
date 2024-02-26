
const menu={
_meal:'',
_price:0,

set meal(mealToCheck){
if(typeof mealToCheck==='string'){
    this._meal=mealToCheck;
}
else{
    return "you've entered invalid input, please to enter valid";
}
},
set price(priceToCheck){
    if(typeof priceToCheck==='number'){
        this._price=priceToCheck;
    }
    else{
        return "you've entered invalid price, try to enterd valid one";
    }
},
get getToDaysSpecial(){
    if(this._meal && this._price){
        return `to days special meal is ${this._meal} and price is ${this._price}. `;
    }
    else{
        return "no special meal available today";
    }
}
};
menu.meal="fish";
menu.price=12000;
console.log(menu.getToDaysSpecial);


