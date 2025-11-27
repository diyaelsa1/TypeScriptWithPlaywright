class LoadURL{
    url: string;

    constructor(url:string){
        this.url=url;
    }

    openPage(msg:string):void{
     console.log(msg+this.url)
    }
}

//calling a class using object

const login=new LoadURL("https://www.amazon.ae/");
login.openPage("Hello loading following website -\n");
