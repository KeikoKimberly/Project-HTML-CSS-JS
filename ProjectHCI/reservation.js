let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", validate);

function validate(){
    var name = document.getElementById("name");
    var phone = document.getElementById("number");
    var person = document.getElementById("person");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var code = document.getElementById("code");

    if(!checkLetter(name.value) || name.value === ""){
        name.setCustomValidity("Name can't be empty & not contains number");
        name.reportValidity();
        return;
    }else{
        name.setCustomValidity("");
    }

    var validPhone = 0;
    for (let index = 0; index < phone.value.length; index++) {
        if(phone.value[index] >= '0' && phone.value[index] <= '9'){
            validPhone++;
        }
    }

    if(validPhone !== 12){
        phone.setCustomValidity("Length must be 12 & contains number only");
        phone.reportValidity();
        return;
    }else{
        phone.setCustomValidity("");
    }

    if(person.value === 0 || person.value === ''){
        person.setCustomValidity("Need at least 1 person to make a reservation");
        person.reportValidity();
        return;
    }else{
        person.setCustomValidity("");
    }

    if(date.value === ""){
        date.setCustomValidity("Date can't be empty");
        date.reportValidity();
        return;
    }else{
        date.setCustomValidity("");
    }

    if(time.value === ""){
        time.setCustomValidity("Time can't be empty");
        time.reportValidity();
        return;
    }else{
        time.setCustomValidity("");
    }

    if(!checkAlphanumeric(code.value) || code.value === ""){
        code.setCustomValidity("Code can't be empty & alphanumeric");
        code.reportValidity();
        return;
    }else{
        code.setCustomValidity("");
    }

}

function checkLetter(text){
    return /^[a-zA-Z()]+$/.test(text);
}

function checkAlphanumeric(text){
    return /^[a-z0-9]+$/i.test(text);
}
