var selectfield=document.querySelector(".selectfield");
var selecttext=document.getElementById("selecttext");
var options=document.getElementsByClassName("options");
var list=document.getElementById("list");
var icon=document.getElementById("icon");
for(op of options){
    op.onclick=function(){
        selecttext.innerHTML=this.textContent;
        list.classList.toggle("hide");
        icon.classList.toggle("rotate");
    
   }

}

selectfield.onclick=function(){
    list.classList.toggle("hide");
    icon.classList.toggle("rotate");
}