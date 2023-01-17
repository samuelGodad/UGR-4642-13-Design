let menu = document.querySelectorAll('menu');
let navbar = document.querySelectorAll('.navbar');
menu.onclick = () => {
    menu.classList.toggle('.fa-times');
    navbar.classList.toggle('active');
}

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0px";

}
function hideMenu(){
    navLinks.style.right="-200px"
}
// window.onload=function(){
//   document.getElementById("auto").focus();
// }
let list=document.querySelectorAll(".list li");
let boxes=document.querySelectorAll(".boxs");
list.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        list.forEach((li)=>{
            li.classList.remove("active");

        })
        e.target.classList.add("active");
        boxes.forEach((el2)=>{
        el2.style.display="none";
     })   
      document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
        li.style.display="flex";

      })
    })
})

 function validate(){
     let FirstName = document.getElementById("FirstName").value;
     let LastName= document.getElementById("LastName").value;
     let phone = document.getElementById("phone").value;
     let email = document.getElementById("email").value;
     let message = document.getElementById("message").value;
     let error_message = document.getElementById("error__message");
     
     error_message.style.padding = "10px";
     
     var text;
     if(FirstName.length < 5){
       text = "Please Enter valid Name";
       error_message.innerHTML = text;
       return false;
     }
     if(LastName.length <5){
       text = "Please Enter the Correct second name ";
       error_message.innerHTML = text;
       return false;
     }
     if(isNaN(phone) || phone.length != 10){
       text = "Please Enter valid Phone Number";
       error_message.innerHTML = text;
       return false;
     }
     if(email.indexOf("@") == -1 || email.length < 6){
       text = "Please Enter valid Email";
       error_message.innerHTML = text;
       return false;
     }
     if(message.length <= 140){
       text = "Please Enter More Than 140 Characters";
       error_message.innerHTML = text;
       return false;
     }
     alert("Form Submitted Successfully!");
     return true;
   }

