const inputText=document.querySelector(".inputText")
const button=document.querySelector(".btn")
let p=document.querySelector(".addHere")
button.addEventListener('click',()=>{
    getdata()
})
let getdata=()=>
 {
    let text=inputText.value;
    let ptag=document.createElement('p')
    ptag.innerText=text;
    p.append(ptag);
 }
//  p.addEventListener("click",()=>{console.log(event.target)
//     let m=event.target
//     m.remove()
//  })
 p.addEventListener("dblclick",(event)=>{
   console.log(event.target)
    let z=event.target
   z.contentEditable=true;
    z.focus();
 })