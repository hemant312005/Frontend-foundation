
let pd=document.getElementById("p");
let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    let a=document.querySelector(".a").value;
let b=document.querySelector(".b").value;
let result=Number(a)+Number(b)
console.log(result)
let p=document.createElement("p")
p.innerText=result
pd.append(p)
if(result===1)
{
    let color1=document.querySelector(".color")
    color1.style.backgroundColor="red";
}
else
{
     let color1=document.querySelector(".color")
    color1.style.backgroundColor="blue";
}
})


