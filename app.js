console.log("i am connected");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
     let item =document.createElement("li");
     let taskText = document.createElement("span");

     taskText.innerText=inp.value;

  

     item.appendChild(taskText);
     
     ul.appendChild(item);

     let btnContener = document.createElement("div");

     btnContener.classList.add("btn-contener");


     let checkBtn = document.createElement("button");
     checkBtn.innerText="✓";

     checkBtn.classList.add("check-btn");
     
  

     let dltBtn = document.createElement("button");
     dltBtn.innerText="X";

   

     dltBtn.classList.add("delete-btn");

      btnContener.appendChild(checkBtn);
      btnContener.appendChild(dltBtn);

      item.appendChild(btnContener);
     inp.value=""

});

//add the event to the parent will aslo triggerd from the chiled

ul.addEventListener("click",function(event){
   let targetItem = event.target.parentElement.parentElement; //it targets the li which is parant of btn div
  
    if(event.target.innerText=="X"){
  
      targetItem.remove();
    }
    else if(event.target.innerText=="✓"){
        let taskText = targetItem.firstElementChild; //the parant is li and its firs child is span

        taskText.classList.add("cross");

    }

});