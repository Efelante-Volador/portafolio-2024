// Este código es un menú de navegación en un sitio web que se despliega cuando el usuario se desplaza hacia abajo y desaparece cuando el usuario se encuentra en la primera seccion del sitio. También incluye funciones que permiten al usuario desplazarse hacia diferentes secciones del sitio web haciendo clic en los elementos del menú.
var titulo = document.getElementById('nav-tittle-inicio');
var $nav = document.getElementById('navegador');
var sobremi = document.getElementById('nav-tittle-perfil');
var porta = document.getElementById('nav-tittle-portafolio');
var portada = document.getElementById('inicio');
var header = document.getElementById('header');
var perfil = document.getElementById('div-perfil');
var proyecto = document.getElementById('div-proyectos');

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
      $nav.style.visibility = "visible";
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
  $nav.style.visibility = "hidden";
  header.style.display = "block";
  perfil.style.display = "none";
  proyecto.style.display = "none";
}
//Esta funcion desplaza el navegador a la seccion de Perfil
function miTrabajo() {
  document.querySelector(".trabajo-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".contacto-link");
  $nav.style.visibility = "visible";
  header.style.display = "none";
  perfil.style.display = "block";
  proyecto.style.display = "none";
}
//Esta funcion desplaza el navegador a la seccion de Proyectos
function proyectos() {
  document.querySelector(".proyectos-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".trabajo-link");
  restaurarColor(".contacto-link");
  $nav.style.visibility = "visible";
  header.style.display = "none";
  perfil.style.display = "none";
  proyecto.style.display = "block";
}
function contacto (){
  document.querySelector(".contacto-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".trabajo-link");
  $nav.style.visibility = "visible";
  header.style.display = "none";
  perfil.style.display = "none";
  proyecto.style.display = "none";
}
function restaurarColor(selector) {
  document.querySelector(selector).style.color = "";
}

                //4494 Movil //2600 Escritorio  //Certificados