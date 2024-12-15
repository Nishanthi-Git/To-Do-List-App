const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.appendChild(span);
        li.innerHTML += inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}


function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();



inputBox.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        addTask();
    }
})