var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function(){
    if (cat.classList.contains("show")){
       cat.classList.remove("show");
       button.innerText = "wait, come back!";
       button.classList.add("disappear");
    } else {
        cat.classList.add("show");
        button.innerText= "shoo, cat!";
        button.classList.remove("disappear");
    }
});


