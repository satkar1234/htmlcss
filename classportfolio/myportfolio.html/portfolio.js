function menuOpen(){
    const navBrowserMobile= document.getElementsByClassName("navigation-wrapper")
    const navBrowserObj=navBrowserMobile[0];
    console.log(navBrowserObj.style.height,"height")
    if(navBrowserObj.style.height==="70px"|| !navBrowserObj.style.height){
        navBrowserObj.style.height="400px"
    }
    else{
        navBrowserObj.style.height="70px"

    }


   


    }


