const fontSizeRef = document.querySelector('#font-size-control');
console.log(fontSizeRef);
const textFontRef = document.querySelector('#text')
console.log(textFontRef);

fontSizeRef.addEventListener('input', onValueFontSizeCalc)


function  onValueFontSizeCalc() {
    let valueFontSizeRef = fontSizeRef.value 
    console.log(valueFontSizeRef);
   textFontRef.style.fontSize =`${valueFontSizeRef}px`

}