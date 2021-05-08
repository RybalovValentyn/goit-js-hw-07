const inputRefs = document.querySelector('#validation-input');
const referenceValue = document.querySelector('[data-length]');
const stringLength = Number.parseFloat(referenceValue.dataset.length);
console.log(stringLength);
let inputid = document.getElementById('validation-input');
console.log(inputid);

// inputRefs.classList.add('validation-input.valid')


inputRefs.addEventListener('change', checkInputLength);

function checkInputLength(event) {
    const wordLength = event.currentTarget.value.length;
    console.log( wordLength);
    if (wordLength === stringLength){
        console.log('kzjbdcozb');
       inputRefs.classList.remove('invalid')
        inputRefs.classList.add('valid')

        return
    }  
    else
    inputRefs.classList.remove('valid')
    inputRefs.classList.add('invalid')
    
}