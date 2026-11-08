let p=document.getElementById("btn");
p.addEventListener("mousedown",()=>{
    p.style.fontSize="20px";
})
p.addEventListener("mouseup",()=>{
    p.style.color="red";
    p.style.font="";
})