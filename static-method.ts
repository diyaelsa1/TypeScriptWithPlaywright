class LaunchPage{
    static openPage(url:string):void{
         console.log("Loading page -"+url)
    }
}
//Note: no need to create object to invoke static methods 
LaunchPage.openPage("https://www.amazon.ae/");
