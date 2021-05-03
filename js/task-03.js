const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
const gallery = document.querySelector('#gallery');



console.log(images);

  const makeImageGalleryMarkup = imageGallery => {
     const {url, alt} = imageGallery;

     return `<img src = ${url}
     alt = ${alt}  width = '540' heigth = '450'  > `
  };
console.log(gallery);
const imageGallery = images.map(makeImageGalleryMarkup).join('');
gallery.insertAdjacentHTML('beforeend', imageGallery);


//   console.log(gallery);


//   const makePicksInnerEl =(images) => {
//     const titleEl = document.createElement('li');

//     console.log(titleEl);
//     titleEl.classList.add('img-title');
    
//     // titleEl.style.display = block;
//     const imgEl = document.createElement('img');
//     imgEl.src = images.url;
//     imgEl.width = '540';
//     imgEl.height =' 400';
//     console.log(imgEl.src);
// imgEl.alt = images.alt;
// imgEl.classList.add('first-image');
// titleEl.append(imgEl);
// return titleEl;
//   };
// //   makePicksInnerEl(images)
//   const element = images.map(makePicksInnerEl);
//   console.log(element);
//   gallery.append(...element);