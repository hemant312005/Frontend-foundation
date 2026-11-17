
let object=[{name:"hemant"},{rollno:"051CS231082"},{class:"CSB"}]
let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");
let button3=document.getElementById("btn3");
const adddata=()=>{
 localStorage.setItem("object",JSON.stringify(object));
};
const getdata=()=>{
   let fetchdata=JSON.parse(localStorage.getItem("object"));
   console.log(fetchdata);
}
const removedata=()=>{
   localStorage.removeItem("object")
}; 
 button1.addEventListener("click",adddata);
 button2.addEventListener("click",getdata);
 button3.addEventListener("click",removedata);