const saveBtn = document.querySelector(".save-btn")
const tabBtn = document.querySelector(".tab-btn")
const deleteBtn = document.querySelector(".delete-btn")
const storeEl = document.querySelector(".store-el")
const inputLink = document.querySelector(".input-link")
let myLeads = []

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
  // if leadsfromlocalstorge is truthy
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

saveBtn.addEventListener("click", function () {
  // let inputValue=inputLink.value
  myLeads.push(inputLink.value)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  // storeEl.textContent+=myLeads[i]
  let listItems = ""
  // Initializing listItems as an empty string before the loop is a common practice to avoid issues related to variable scoping and concatenation.
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>
        `
  }
  storeEl.innerHTML = listItems
  inputLink.value = ""
  //    console.log(storeEl.innerHTML)
}
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})
