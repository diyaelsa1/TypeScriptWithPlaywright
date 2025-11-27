//Overrriding happens when a subclass provides its own implementation on a method defined in base class or parent class
class CartFunctions{
    updateCart():void{
        console.log("Cart updated")
    }
   
    addToCart():void{
        console.log("An item is added to cart")
        this.updateCart();

    }


}

class DeleteItem extends  CartFunctions{
    override updateCart():void{
        console.log("An item is deleted from cart")
    }
}

//creating subclass object to access subclass overriden function
console.log("EXECUTING SUB CLASS FUNCTION ---")
const subCartObj= new DeleteItem()
subCartObj.updateCart()

//creating base class object to access base class function
console.log("EXECUTING BASE CLASS FUNCTION ---")
const baseObj=new CartFunctions()
baseObj.addToCart();