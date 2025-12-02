function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

const reserve = document.getElementById("reserveForm")
reserve.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    nameError.innerText = ""
    emailError.innerText = ""
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    namePattern = /^[A-Za-z ]+$/;
    emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //name
    if (name === "") {
        nameError.innerText = "Please enter your name"
    } else if (!namePattern.test(name)) {
        nameError.innerText = "Please enter a valid name"
    }
})