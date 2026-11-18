let m=document.querySelector(".keypress");
m.addEventListener("keyup",keyhandler);
function keyhandler(event)
{
document.querySelector(".Keypress").textContent=`key press:${event.key}`;
document.querySelector(".keycode").textContent=`key code:${event.code}`;
document.querySelector(".keytype").textContent=` key type:${event.type}`;
document.querySelector(".charcode").textContent=`char code${event.keyCode}`;
}
let i=document.getElementById("name");
i.addEventListener("input",inputhandler);
function inputhandler(event)
{
document.querySelector(".inputvalue").textContent=`input type:${event.target.value}`;
document.querySelector(".inputname").textContent=`input name:${event.target.name}`;
document.querySelector(".inputeventtype").textContent=`input type:${event.inputType}`;
document.querySelector(".inputtype").textContent=`input type:${event.type}`;
}
