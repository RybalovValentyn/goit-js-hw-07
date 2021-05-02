
const navListEl = document.querySelectorAll('.item');
console.log(`В списке ${navListEl.length} категории.`);

for (const array of navListEl) {
    const childElement = array.querySelectorAll('ul li');
    const navTextEl = array.firstElementChild;
    
    // console.log('Категория:', navTextEl.textContent)

    // console.log('Количество элементов:', childElement.length);

    console.log(`Категория: ${navTextEl.textContent}
Количество элементов: ${ childElement.length}
    `);}


    
 