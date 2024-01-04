
const inputbox=document.getElementById("inputbox");
const list_container=document.getElementById("list-container");
const img=document.querySelector(".list>img");
let count=1;
let listcount=document.querySelector("#listcount");
let periority=document.getElementById("priority");
let comlited=document.getElementById("comlited");
let date=document.getElementById("dueDate")
let highpriotity=document.getElementById("highpriotity");
let count_high=1;
let highpriotitycomplited=document.getElementById("highpriotitycomplited");
let count_highpriotity=1;


let countcomplet=1;
function addTask(){
    if(inputbox.value===""){
        alert("You must write somthing!");
    }else{

        img.style.display="none";
        listcount.innerText=`${count++}`;
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list_container.appendChild(li);
        let dueDate=document.createElement("span");
        dueDate.className="Date";
        dueDate.innerText=`Due Date ${date.value}`;
        li.appendChild(dueDate);
        let span=document.createElement("span");
        span.innerHTML=`<i class="fa-solid fa-x"></i>`
        li.appendChild(span);
        if(periority.value==="high"){
            highpriotity.innerText=`${count_high} of ${count-1}`;
        }
      
        
    }
    inputbox.value="";
    saveData();
}

list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        comlited.innerText=`${countcomplet++}`
        e.target.classList.toggle("checked");
        if(periority.value==="high" ){
            highpriotitycomplited.innerText=`${count_highpriotity++}`;
        }
        saveData();
        
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.tagName==="I"){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}