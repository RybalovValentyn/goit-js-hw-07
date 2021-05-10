const numberElRef = document.querySelector('#controls input');
console.log(numberElRef);
const renderBtnRef = document.querySelector('[data-action="render"]')
console.log(renderBtnRef);
const destroyBtnRef = document.querySelector('[data-action="destroy"]')
console.log(destroyBtnRef);
const boxesRef =document.querySelector('#boxes')
console.log( boxesRef);
let amount = numberElRef.value;
numberElRef.addEventListener('input', getAmountBoxes);

let arrayDiv = [];

function getAmountBoxes() {
    let amount = numberElRef.value;
    const createElement = {
        nameStart: '',
        width: '',
        heigth: '',
        backgroundcolor: '',
        nameEnd: '',
    };
  let divColor = ""
    let divWidth = 30;
    let divHeigth = 30;
    function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
       let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return divColor = bgColor     
     ;}

    for (let i = 0; i < amount; i++) {
createElement.nameStart = ('<div');
createElement.width = `${divWidth}px`;
createElement.heigth = `${divHeigth}px`;
random_bg_color();
createElement.backgroundcolor = divColor;
createElement.nameEnd = ('</div>');
        divWidth += 10;
        divHeigth += 10;

                   }

    return arrayDiv.push(createElement);

  };

const makeDivsInnerEl = array => {
    const {nameStart, width, heigth, backgroundcolor, nameEnd} = array;
    return `${nameStart} class = "boxes", style="width: ${width}; height: ${heigth}; background-color: ${backgroundcolor}; margin: 10px "> ${nameEnd} `
}


renderBtnRef.addEventListener('click', createBoxes );
boxesRef.style.display = 'flex';
boxesRef.style.flexwrap = 'wrap';
function createBoxes() {
    const divRowsMarkup = arrayDiv.map(makeDivsInnerEl).join('');
    boxesRef.insertAdjacentHTML('beforeend', divRowsMarkup);

console.log(divRowsMarkup);
    console.log('arrayDiv', arrayDiv);
   
};

destroyBtnRef.addEventListener('click', removeDivCollection);
function removeDivCollection() {  
    const divRemoveRef = boxesRef.querySelector('.boxes')
    console.log(divRemoveRef);
    boxesRef.removeChild(divRemoveRef);
    };










