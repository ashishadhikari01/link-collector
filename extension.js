let saveBtn=document.querySelector(".save-btn")
let deleteBtn=document.querySelector(".delete-btn")
let storeEl=document.querySelector(".store-el")
let inputLink=document.querySelector(".input-link")
let myLeads=[]

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){ // if leadsfromlocalstorge is truthy 
    myLeads=leadsFromLocalStorage
    render()
}

saveBtn.addEventListener("click", function(){
    // let inputValue=inputLink.value
    myLeads.push(inputLink.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads)) 

    render()
    // console.log(localStorage.getItem("myLeads"))
    // storeEl.innerHTML+= "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
    // console.log(myLeads)
    // listItems=innerHTML.myLeads

})

function render(){
    // storeEl.textContent+=myLeads[i]
    let listItems=""
    // Initializing listItems as an empty string before the loop is a common practice to avoid issues related to variable scoping and concatenation.
    for(let i=0;i<myLeads.length;i++){
         listItems+=`
        <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
    }
   storeEl.innerHTML=listItems
   inputLink.value=""
//    console.log(storeEl.innerHTML)
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render()
})