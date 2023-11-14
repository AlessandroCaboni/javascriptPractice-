const menu ={
  _meal: "",
  _price: 0,
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string' ){
      this._meal= mealToCheck;
    }else{
      console.log("wrong assinment to meal value")
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === 'number' ){
      this._price = priceToCheck;
  }else{
    console.log("wrong assinment to price value")
  }
  },
  get todaysSpecial(){
    if(this._meal && this._price){
      return `Today’s Special is ${this._meal} for $${this._price}!`
    } else{
      return 'Meal or price was not set correctly!'
    }
  }

}

menu.meal = "cheesburger"
menu.price = 2

//console.log(menu._meal)
//console.log(menu._price)

console.log(menu.todaysSpecial)
