


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msg = document.getElementById("msg") 
const form = document.getElementById("form")
const message = document.getElementById("message")


function validation(event){
    event.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const emailPattern = /^[a-z0-9._%+-]+@(gmail\.com|yahoo\.com)$/

    if(name === "" || email === ""){
        msg.innerText = "Name and email should not be empty";
        return
    }
    else if(name.trim().length < 3){
        msg.innerText = "Name should be minimum 3 letters"
        return
    }
    else if(!emailPattern.test(email)){
       msg.innerText = "Invalid email";
       return
    }
    else if(message === ""){
        msg.innerText = "Textarea should not be empty";
        return 
    }
    else{
      
       form.submit()
    }
}