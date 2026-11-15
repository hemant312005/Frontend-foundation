let p=document.getElementById("btn");
p.addEventListener("mousedown",()=>{
    p.style.fontSize="20px";
})
p.addEventListener("mouseup",()=>{
    p.style.color="red";
    p.style.font="";
})
p.addEventListener("mouseover",()=>{
    p.style.fontSize="20px";
})
p.addEventListener("mouseout",()=>{
     p.style.color="white";
    p.style.font="";
})