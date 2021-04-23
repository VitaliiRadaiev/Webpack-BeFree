export function showHidePassword() {
    let viewPass = document.querySelectorAll('.form__viewpass');
    for (let index = 0; index < viewPass.length; index++) {
        const element = viewPass[index];
        element.addEventListener("click", function (e) {
            if (element.classList.contains('_active')) {
                element.parentElement.querySelector('input').setAttribute("type", "password");
            } else {
                element.parentElement.querySelector('input').setAttribute("type", "text");
            }
            element.classList.toggle('_active');
        });
    }
}