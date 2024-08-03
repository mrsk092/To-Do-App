console.log("i am connected");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
     let item =document.createElement("li");
     item.innerText=inp.value;
     
     ul.appendChild(item);
     let dltBtn = document.createElement("button");
     dltBtn.innerText="X";
     dltBtn.addEventListener("click",function(){
        let parent = this.parentElement;
        parent.remove();
     });
     
     item.append(" ",dltBtn);
     inp.value=""

});
