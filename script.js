
let form = document.contact;
let fname = document.contact.fname; //document.contact.fname
let email = form.email;

form.addEventListener("submit", function (e) {
    if (fname.value == '') {
        alert("Full name is required!");
        e.preventDefault();
    }
    if (email.value == '') {
        alert("E-mail is required!");
        e.preventDefault();
    }
});

email.addEventListener("keyup", function () {
    if (this.value.length <= 4) {
        this.nextElementsibling.innerText = "E-mail is invalid"
    } else {
        this.nextElementsibling.innerText = "";
    }

});