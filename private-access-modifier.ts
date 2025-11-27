class PremiumCarDetails{
    public availability:boolean;
    private price:number;
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

//private access modifier -access within the class
const premCarobj = new PremiumCarDetails("Captiva",10032320);
//premCarobj.model;                //public accessible outside class
//premCarobj.price;               //private not accessible outside class
premCarobj.showPrice(); //private can be access using public function like this

