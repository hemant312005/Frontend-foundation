let input=document.getElementById("input");
let button1=document.getElementById("btn");
let addhere=document.getElementById("addhere");
let addfunction=()=>{
let value=input.value.trim();
let div=document.createElement("div");
div.classList="divclass";
div.style="display: flex;justify-content: space-between;"
div.innerHTML=`
<li>${value}</li>
<button id=removebtn>remove</button>
`

addhere.append(div);
let removebtn=div.querySelector("button")
removebtn.addEventListener("click",()=>{
    div.remove()
})           
array.push(value);
array=[...new Set(array)];
localStorage.setItem("todolist",JSON.stringify(array));
}
button1.addEventListener("click",addfunction)
let array=[];


