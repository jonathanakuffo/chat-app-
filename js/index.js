const $input = document.querySelector("#form-wrapper form input")
const $form = document.querySelector("#form-wrapper form")



$form.addEventListener("submit", function (event) {
    
    event.preventDefault()
    const sms = $input.value;

    console.log(sms)

    console.log(sms)

    $input.value = ""
});