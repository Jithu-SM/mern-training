const para1 = document.getElementById("main-para");

// change content
para1.textContent = "YOU HAVE BEEN HACKED";
para1.innerText = "YOU HAVE BEEN HACKED";
para1.innerHTML = "<b>YOU HAVE BEEN HACKED!</b>";

// change style
para1.style.color = "red";
para1.style.fontSize = "30px";

// add style from external stylesheet to html element
const head = document.getElementsByTagName("h1")[0];
head.classList.add("highlight");

//remove style from external stylesheet to html element
para1.classList.remove("underline");
// para1.classList.toggle("underline");

const leadButton = document.querySelector(".lead")
// handling events
leadButton.addEventListener("click",(e)=>{
    alert("Button is clicked");
    console.log(e.target)
})

form = document.querySelector("#signupform")
form.addEventListener("submit",(e)=>{                   //on submit
    e.preventDefault()                                  //stop from refreshing
    const fullName = document.getElementById("fname").value
    console.log(fullName)
})

const fname = document.getElementById("fname")
fname.addEventListener("keydown",(e)=>{                 //on key pressed
    console.log(e.key)
})

fname.addEventListener("input",(e)=>{                 
    console.log(e.target.value)                     //current input value
})
