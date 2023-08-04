const input = document.querySelector("#input-text");
const list = document.querySelector("#list-container");
function addTask(){
    if(input.value===''){
        alert('You must write something')
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value;
        list.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.append(span);

       
    }
    input.value='';
    saveData();

}
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();   
        saveData() 
    } false;
})
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask()