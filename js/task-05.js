const inputRefs = document.querySelector('#name-input');
console.log(inputRefs);
const outputRefs =document.querySelector('#name-output')
const outputText = outputRefs.textContent;

console.log(outputText);

inputRefs.addEventListener('input', oninputText);

inputRefs.addEventListener('blur', onInputBlur);

function oninputText(event) {
    outputRefs.textContent = event.currentTarget.value;
    console.log('Инпут получил фокус - событие focus')
}

function onInputBlur() {
    if (outputRefs.textContent === ''){
    outputRefs.textContent = outputText;}

}

// function removeText(event) {
//     outputRefs.textContent = event.currentTarget.value;
//     console.log('Инпут получил фокус - событие focus')
// }

    //   refs.input.addEventListener('focus', onInputFocus);
    //   refs.input.addEventListener('blur', onInputBlur);
    //   refs.input.addEventListener('change', onInputChange);
    //   refs.input.addEventListener('input', onInputChange);
      
    //   refs.input.addEventListener('input', onInputChange);
    //   refs.licenseCheckbox.addEventListener('change', onLicenseChange);
      
    //   function onInputFocus() {
    //     console.log('Инпут получил фокус - событие focus');
    //   }
      
    //   function onInputBlur() {
    //     console.log('Инпут потерял фокус - событие blur');
    //   }
      
    //   function onInputChange(event) {
    //     refs.nameLabel.textContent = event.currentTarget.value;
    //     console.log('dvbdsdvs');
    //   }
      
    //   function onLicenseChange(event) {
    //     refs.btn.disabled = !event.currentTarget.checked;
    //   }