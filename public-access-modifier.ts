class CarDetails{
    public availability:boolean;
    public price:number;
    public model:string


    constructor(model:string,price:number){
        this.availability=false;
        this.price=price;
        this.model=model;
    }

    public showAvailability(model:string):void{
        if (model==='2025 Nissan GT-R'||model==='BMW i8'){
            this.availability=true;
                console.log("Model available!");
        }else{
            console.log("Not available at this moment.");
        }     
    }

    public showPrice():void{
        console.log("Price of selected model is "+this.price)
    }
}

//accessing public access modifiers - can be accessed anywhere
const obj=new CarDetails("Captiva",10032320);
obj.showPrice();
obj.showAvailability('Captiva');
