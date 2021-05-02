const navEl = document.querySelectorAll('#categories');
console.log(navEl);
const navListEl = document.querySelectorAll('.item ul');
console.log(navListEl);

// const ArrayLength = navListEl.querySelectorAll('ul');
// console.log(ArrayLength);

navListEl.forEach( array => 
//    const navLength  array.map( arg => arg.length ) 

    console.log('Заголовки',array));




    const navTextEl = document.querySelectorAll('.item h2 ');
    console.log(navTextEl);

    navTextEl.forEach(text => 

        console.log('Категория:', text.textContent));
