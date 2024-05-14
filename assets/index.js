

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







function checkInputsValidity() {
    isValid = true; 

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (select.value === "opção0") {
            isValid = false; 
        }
    });

    const submitBtn = document.getElementById("submit-btn");

    
    if (isValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

setInterval(checkInputsValidity, 500);






