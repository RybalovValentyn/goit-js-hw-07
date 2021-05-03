const decrementBtn = document.querySelector('[data-action="decrement"]') ;
console.log(decrementBtn);  

const incrementBtn = document.querySelector('[data-action="increment"]') ;
console.log(incrementBtn); 

const valueRef = document.querySelector('#value');

let counterValue = Number.parseFloat(valueRef.textContent);
console.log(counterValue);

decrementBtn.addEventListener('click', decrement );

incrementBtn.addEventListener('click', increment );



function increment () {
    counterValue += 1;
     valueRef.textContent = `${counterValue}`;
};

function decrement () {
    counterValue -= 1;
    valueRef.textContent = `${counterValue}`;
};


// valueRef.textContent =' 50'

// let totalValue = 0;

// console.log(valueRef.textContent);

// decrementBtn.addEventListener('click', () => {
// totalValue = Number(valueRef.value);

// return totalValue -= 1;

// });
// console.log(totalValue);
// valueRef.textContent = totalValue;

