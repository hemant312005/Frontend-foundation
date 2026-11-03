let button=document.getElementById("addbtn")
let showelement=document.getElementById("form")
let savebutton=document.getElementById("savebtn")
let search=document.getElementById("search")
button.addEventListener('click',()=>{
     showelement.style.display="block";
})
savebutton.addEventListener('click',()=>{
    let websiteName=document.getElementById("websiteName").value
    let websiteURl=document.getElementById("websiteUrl").value
    let userName=document.getElementById("userName").value
    let password=document.getElementById("password").value
    let table=document.getElementById("table")
    let create=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=websiteName
    let td2=document.createElement("td")
    td2.innerText=userName
    let td3=document.createElement("td")
    td3.innerText=password
    let td4=document.createElement("td")
    table.append(create)
    let EditButton=document.createElement("button")
    EditButton.innerText="Edit";
    let DeleteButton=document.createElement("button")
    DeleteButton.innerHTML="Delete";
    create.append(td1,td2,td3,td4)
    td4.append(EditButton,DeleteButton)
    DeleteButton.addEventListener("click",()=>{
    create.remove();
      })
    EditButton.addEventListener("click",()=>{
        create.contentEditable="true";
        create.focus();
    })
})
