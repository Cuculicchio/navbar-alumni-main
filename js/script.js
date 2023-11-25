let btnLogo = document.getElementById('logo');
let menuD = document.getElementById('nav-m');

btnLogo.addEventListener('click', function(){
    menuD.classList.toggle('mostrarM');
});
let masDeportes = document.getElementById('masDeportes');
let subMenu = document.getElementById('nav-m');

masDeportes.addEventListener('click', function(){
    subMenu.classList.toggle('subMenu');
});

//console.log(menuD)