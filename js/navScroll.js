// Este código es un menú de navegación en un sitio web que se despliega cuando el usuario se desplaza hacia abajo y desaparece cuando el usuario se encuentra en la primera seccion del sitio. También incluye funciones que permiten al usuario desplazarse hacia diferentes secciones del sitio web haciendo clic en los elementos del menú.
var titulo = document.getElementById('nav-tittle-inicio');
var $nav = document.getElementById('navegador');
var sobremi = document.getElementById('nav-tittle-perfil');
var porta = document.getElementById('nav-tittle-portafolio');
var portada = document.getElementById('inicio');

window.addEventListener('scroll', function() {
  //Este codigo obtiene la ubicacion del Scroll
  let ubicacionactual = window.pageYOffset || document.documentElement.scrollTop
  //console.log(ubicacionactual);
  if (/Mobi/.test(navigator.userAgent)) {
    // El usuario está accediendo a tu sitio desde un dispositivo móvil
    if (ubicacionactual >= window.innerHeight) {
      $nav.style.visibility = "visible";
    }
    else {
      $nav.style.visibility = "hidden";
    }
  } else {
    // El usuario está accediendo a tu sitio desde una computadora de escritorio
    if (ubicacionactual >= window.innerHeight) {
      $nav.style.visibility = "visible";
    }
    else {
      $nav.style.visibility = "visible";
    }
  }
  //Este codigo hace aparecer o desaparecer el NavBar dependiendo de donde se encuentre el Scroll

})


//Esta funcion desplaza el navegador a la seccion de inicio
function inicio() {
  window.scrollTo("smooth", 0);
  document.querySelector(".inicio-link").style.color = "var(--main-color)";
  restaurarColor(".trabajo-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".contactos-link");
}
//Esta funcion desplaza el navegador a la seccion de Perfil
function miTrabajo() {
  document.querySelector(".trabajo-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".contacto-link");
  const screenHeight = window.innerHeight;
  if (/Mobi/.test(navigator.userAgent)) {
    window.scrollTo("smooth", screenHeight * 1.02);
  } else {
    window.scrollTo("smooth", screenHeight * 1.02);
  }
}
//Esta funcion desplaza el navegador a la seccion de Proyectos
function proyectos() {
  document.querySelector(".proyectos-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".trabajo-link");
  restaurarColor(".contacto-link");
  const screenHeight = window.innerHeight;
  if (/Mobi/.test(navigator.userAgent)) {
    window.scrollTo("smooth", screenHeight * 2);
  } else {
    window.scrollTo("smooth", screenHeight * 2);
  }
}
function contacto (){
  document.querySelector(".contacto-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".trabajo-link");
  const screenHeight = window.innerHeight;
  if (/Mobi/.test(navigator.userAgent)) {
    window.scrollTo("smooth", screenHeight * 50);
  } else {
    window.scrollTo("smooth", screenHeight * 50);
  }
}
function restaurarColor(selector) {
  document.querySelector(selector).style.color = "";
}

                //4494 Movil //2600 Escritorio  //Certificados