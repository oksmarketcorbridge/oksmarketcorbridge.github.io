function loadRandomImage() {

    let images = ["img/62238328_2909809995712128_6787548684310544384_n.jpg",
    "img/64449561_341817503152074_7651055488418709504_n.jpg", 
    "img/65222950_385485768612478_721990638182072320_n.jpg",  
    "img/65278275_2185155301723700_1356246162637586432_n.jpg",
    "img/65376555_1991162660987856_3540920735612534784_n.jpg",
    "img/65386727_844987362555143_8115794782619435008_n.jpg", 
    "img/65387302_460439454521064_4207568847579906048_n.jpg", 
    "img/65844085_840905816309250_4941808427547492352_n.jpg",
    "img/65875330_445996262854077_908333283287236608_n.jpg",
    "img/first-photo.jpg",
    "img/photo1.jpg",
    "img/photo10.jpg",
    "img/photo11.jpg",
    "img/photo12.jpg",
    "img/photo13.jpg",
    "img/photo14.jpg",
    "img/photo15.jpg",
    "img/photo16.png",
    "img/photo17.jpg",
    "img/photo18.jpg",
    "img/photo19.jpg",
    "img/photo2.jpg",
    "img/photo3.jpg",
    "img/photo4.jpg",
    "img/photo5.jpg",
    "img/photo6.jpg",
    "img/photo7.jpg",
    "img/photo8.jpg",
    "img/photo9.jpg"]

    document.getElementById("myBtn").addEventListener("click", () => {
    document.getElementById("myImg").src = images[Math.floor(Math.random() * images.length)];
    })
};

document.addEventListener("DOMContentLoaded", function () {
    const mostrarBtn = document.getElementById("mostrarBtn");
    const textoMostrado = document.getElementById("textoMostrado");
  
    mostrarBtn.addEventListener("click", function () {
      // Cambia el contenido del div al hacer clic en el botón
      textoMostrado.innerHTML = "Mira amorcito, este es una primera prueba de como se veria una carta aqui, el objetivo es que tu pueda picarle al boton y poder ver una carta aqui cuando tu quieras o cuando yo te avise jaja TE AMOOO MUCHOOOO MI AMORCITOOOOO";
      
      // Muestra el div
      textoMostrado.style.display = "block";
    });
  });
  