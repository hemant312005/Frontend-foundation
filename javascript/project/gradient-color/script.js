let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");

let gradientfunction=()=>{
    let hexacode="0123456789ABCDEF";
    let colors="#";
    for(let i=0;i<6;i++)
    {
    colors=colors+hexacode[Math.floor(Math.random()*16)];
    }
    return colors;
}
let button1call=()=>{
    let m=document.querySelector(".copycode")
m.textContent=`background-image:linear gradient(to right,${gradientfunction()},${gradientfunction()})`;
     document.body.style.backgroundImage=`linear-gradient(to right,${gradientfunction()},${gradientfunction()})`;
}
let button2call=()=>{
    let m=document.querySelector(".copycode")
m.textContent=`background-image:linear gradient(to right,${gradientfunction()},${gradientfunction()})`;
    document.body.style.backgroundImage=`linear-gradient(to right,${gradientfunction()},${gradientfunction()})`;
}
button1.addEventListener("click",button1call);
button2.addEventListener("click",button2call);
