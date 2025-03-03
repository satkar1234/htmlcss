function menuOpen(){
   const mobileViewNav=document.getElementsByClassName("navigation-mobile-view")
   const mobileViewNavObj=mobileViewNav[0];
   if(mobileViewNavObj.style.display==='none'||!mobileViewNavObj.style.display)
   {
    mobileViewNavObj.style.display="flex"

   }
   else{
    mobileViewNavObj.style.display="none"

   }
   if(html.style.width>="768px")
   {
    mobileViewNavObj.style.display="none"
   }

}