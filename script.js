const formulario = document.getElementById("formulario");
const inputs = document.getElementById("#formulario input")

inputs.forEach((input) => {
   input.addEventListener('keyup', validar);
   input.addEventListener('blur', validar);
});    
function validar(e) {
    e.preventDefault()
   
let email_address = document.getElementById("email_address").value
let exp_email_address = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const dom_email_address = document.getElementById("email_address")
if(exp_email_address.test(email_address)){
  dom_email_address.setAttribute("class", "form-control is-valid")
}else{
    dom_email_address.setAttribute("class", "form-control is-invalid")
}

let phone = document.getElementById("phone").value
let exp_phone =/^9\d{7}$/;
const dom_phone = document.getElementById("phone")
if(exp_phone.test(phone)){
  dom_phone.setAttribute("class", "form-control is-valid")
}else{
    dom_phone.setAttribute("class", "form-control is-invalid")
}

}

