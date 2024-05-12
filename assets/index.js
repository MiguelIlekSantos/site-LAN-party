

// ------------------ANIMAÇÃO------------------------






const HBA = document.getElementById("header-back-animation")
const header = document.getElementsByName("header")

const screenWidth = header.innerWidth
const screenHeight = window.innerHeight

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let x = 5; x < 50; x++) {
    HBA.innerHTML += `<div class="bar" id="bar-${x}"></div>`
    const bar = document.getElementById(`bar-${x}`)

    bar.style.top = `${x*10}px`
    bar.style.animationDelay = `${randomNum(0, 10)}s`
    bar.style.animationDuration = `${randomNum(5, 10)}s`
}






// -----------------------FORMS-----------------------










var emailInputs = document.querySelectorAll('input[type="email"]');
var emails = [];

for (var i = 0; i < emailInputs.length; i++) {
    (function(i) {
        emailInputs[i].addEventListener('change', function() {
            var email = this.value.trim();

            // ----------------VERIFY SCHOOL EMAIL--------------

            // var regex = /^[a-zA-Z0-9._%+-]+[0-9]{7}@a\.esjcff\.pt$/;
            // if ((!regex.test(email)) && (email != "")) {
            //     alert("Por favor, insira um email válido da escola.");
            // } else
            if (emails.includes(email)) {
                alert("Você não pode usar o mesmo email para dois participantes. Por favor, corrija os emails.");
            } else {
                emails[i] = email;
            }
        });
    })(i);
}

function checkCheckboxSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var isChecked = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    return isChecked;
}

function checkInputsValidity() {
    var isValid = true;
    
    for (var i = 0; i < emailInputs.length; i++) {
        var email = emailInputs[i].value.trim();

        // ----------------VERIFY SCHOOL EMAIL--------------
        
        // var regex = /^[a-zA-Z0-9._%+-]+[0-9]{7}@a\.esjcff\.pt$/;
        // if (!regex.test(email)) {
        //     emailInputs[i].classList.add('invalid'); 
        //     isValid = false;
        // } else {
        //     emailInputs[i].classList.remove('invalid'); 
        // }
        if (email == "") {
            emailInputs[i].classList.add('invalid'); 
            isValid = false;
        } else {
            emailInputs[i].classList.remove('invalid'); 
        }

    }
    if (!checkCheckboxSelection()) {
        isValid = false      
    } 

    const submitBtn = document.getElementById("submit-btn")

    if (!isValid) {
        submitBtn.style.display = "None"
    } else {
        submitBtn.style.display = "block"
    }
}

 
setInterval(checkInputsValidity, 500);







