const nav = document.querySelector('#nav');
const content__container__left = document.querySelector('.content__container__left')
const first__link = document.querySelector('.first__link');
const nav__cursor = document.querySelector('.nav__cursor');
const navLinks = document.querySelectorAll('.container__about__link > a');
const hoverlay = document.querySelector('.hoverlay');
const about__nav = document.querySelector('.about__nav');
const about__nav1 = document.querySelector('.about__nav1');
const product = document.querySelector('.nav__link__product');
const support = document.querySelector('.nav__link__support');
const about = document.querySelector('.nav__link__about');
const link1 = document.querySelector('.about__link1');
const link2 = document.querySelector('.about__link2');
const link3 = document.querySelector('.about__link3');
const navRight = document.querySelector('.about__nav__right');

// Définit les couleurs de fond
const color1 = '#2964DE';
const color2 = 'var(--clr_blue2)';

link1.style.backgroundColor = color2;
first__link.style.backgroundColor = color2;
about__nav1.classList.add('invisible')


hoverlay.addEventListener('mouseover', () => {
    nav__cursor.classList.remove('visible');
    nav__cursor.classList.remove('invisible');
    about__nav1.classList.remove('visible')
    about__nav1.classList.add('invisible')
    about__nav.classList.remove('visible')
    about__nav.classList.add('invisible')
    hoverlay.classList.remove('visible')
    hoverlay.classList.add('invisible')
  });



  support.addEventListener('mouseover', () => {
    nav__cursor.style.transform = "translateX(310%)";
    nav__cursor.style.width = "25%";
    nav__cursor.classList.add('visible');
    about__nav.classList.remove('visible');
    about__nav.classList.add('invisible')
    about__nav1.classList.remove('visible')
    about__nav1.classList.add('invisible')
    hoverlay.classList.add('invisible')
    hoverlay.classList.remove('visible')
  });


about.addEventListener('mouseover', () => {
  nav__cursor.style.transform = "translateX(150%)";
  nav__cursor.style.width = "25%";
  nav__cursor.classList.add('visible');
  about__nav1.classList.remove('visible')
  about__nav1.classList.add('invisible')
  about__nav.classList.remove('invisible')
  about__nav.classList.add('visible')
  hoverlay.classList.remove('invisible')
  hoverlay.classList.add('visible')
});
product.addEventListener('mouseover', () => {
  nav__cursor.style.transform = "translateX(0%)";
  nav__cursor.style.width = "25%";
  nav__cursor.classList.add('visible');
  about__nav.classList.remove('visible')
  about__nav.classList.add('invisible')
  about__nav1.classList.remove('invisible')
  about__nav1.classList.add('visible')
  hoverlay.classList.remove('invisible')
  hoverlay.classList.add('visible')
  

});


link1.addEventListener('mouseover', () => {
  link1.style.backgroundColor = color2;
  link3.style.backgroundColor = color1;
  link2.style.backgroundColor = color1;
  document.getElementById("about__nav__right").style.backgroundImage = 'url(../assets/images/boris.jpg)';
  document.getElementById("title__changing").innerHTML = "Choisir Infomaniak, c'est être engagé dans l'économie de demain. Vie Privée, local et durable sont les valeurs d'Infomaniak depuis 29 ans.";
  document.getElementById("text__changing").innerHTML = "Boris siegenthaler, Co-fondateur et CSO ";
});

link2.addEventListener('mouseover', () => {
  link1.style.backgroundColor = color1;
  link3.style.backgroundColor = color1;
  link2.style.backgroundColor = color2;
  document.getElementById("about__nav__right").style.backgroundImage = 'url(../assets/images/test.jpg)';
  document.getElementById("title__changing").innerHTML = "Nous ne pouvons pas sauver le monde en respectant les règles actuelles, car les règles ont besoin d'être changées. Tout doit changer et cela doit être démarrer aujourd'hui.";
  document.getElementById("text__changing").innerHTML = "Alexandre Patti, Conpliance Officer (CO)";
});

link3.addEventListener('mouseover', () => {
  link1.style.backgroundColor = color1;
  link3.style.backgroundColor = color2;
  link2.style.backgroundColor = color1;
  document.getElementById("about__nav__right").style.backgroundImage ='url(../assets/images/hire.jpg)';
  document.getElementById("title__changing").innerHTML = "Ne venez pas travailler ici... Vous n'allez plus pouvoir repartir";
  document.getElementById("text__changing").innerHTML = "Thibault, Front-end developer";
});

first__link.addEventListener('mouseover', () => {
  first__link .style.backgroundColor = color2;
  second__link .style.backgroundColor = color1;
  last__link .style.backgroundColor = color1;
  

});

