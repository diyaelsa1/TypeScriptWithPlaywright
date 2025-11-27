class LimitedEditionCarDetails{
    protected price:number;
    public model:string

    constructor(model:string,price:number){
        this.price=price;
        this.model=model;
    }

    showPrice():void{
        console.log("Price of selected model is "+this.price)
    }

   
}
 //protected access modifier - accessed within the class and in subclass, cannot be accessed from outside the class hierarchy
const limitEditObj = new LimitedEditionCarDetails("Captiva",10032320);
limitEditObj.showPrice();

//subclass accessing protected members
class SubClass extends LimitedEditionCarDetails{

    //same argument of main class should be there 
    constructor(model:string,price:number){
        super(model,price);
    }

    showPrice(): void {
        console.log(`Limited edition price is ${this.price}`)
    }
}

const subObj= new LimitedEditionCarDetails("BMW i8",399000);
subObj.showPrice();
