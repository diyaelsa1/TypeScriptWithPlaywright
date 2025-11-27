class LoginPage{
    openURL(url:string):void{
        console.log("Hello launching...\n"+url)
    }
}

const loginObj=new LoginPage();
loginObj.openURL("https://www.amazon.ae/")