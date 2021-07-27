


const inputThemeSwitchToggle = document.querySelector("#theme-switch-toggle");

inputThemeSwitchToggle.addEventListener('change', onChangeThemeToBlack);

function onChangeThemeToBlack(e) {
 if (e.target.nodeName === 'INPUT') {
document.body.classList.toggle("dark-theme");
 }
}

// populateInput()
// export function onChangeThemeInput() {
//     const onInputThemeBlack = e.target.change
//     localStorage.setItem('theme-black',JSON.stringify(onInputThemeBlack));
// }

// function populateInput() {
//     const savedChangeInput = localStorage.getItem('theme-black');

//     if(savedChangeInput) {
//         console.log(savedChangeInput);
//         refs.inputThemeSwitchToggleId.change = savedChangeInput;
//     }
// }