const inputRefs = document.querySelector('#name-input');
console.log(inputRefs);
const outputRefs =document.querySelector('#name-output')
const outputText = outputRefs.textContent;

console.log(outputText);

inputRefs.addEventListener('input', oninputText);

inputRefs.addEventListener('input', onInputBlur);

function oninputText(event) {
    outputRefs.textContent = event.currentTarget.value;
    console.log('Инпут получил фокус - событие focus')
}

function onInputBlur() {
    if (outputRefs.textContent === ''){
    outputRefs.textContent = outputText;}

}

