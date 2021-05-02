const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
//   const products = [];
const productList = document.querySelector('#ingredients')
// console.log(productList);
// for (const ingredient of ingredients) {
//     const titleEl = document.createElement('li')
//     titleEl.textContent = ingredient;

//     console.log(titleEl);
//       products.push(titleEl)
//   };

const products = ingredients.map(product =>{
        const titleEl = document.createElement('li')
    titleEl.textContent = product;
    return titleEl;
})


  console.log(products);
  productList.append(...products)


