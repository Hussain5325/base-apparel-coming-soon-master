let email = document.querySelector("#email")

let error = document.querySelector("#error")

let errorText = document.querySelector("#error-txt")

const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    if (email.value == "" || email.value === undefined) {
        error.style.display = "inline-block"
        errorText.style.display = "block"
    } else if (!email.value.match(RegEmail)) {
        error.style.display = "inline-block"
        errorText.style.display = "block"
    }
})

