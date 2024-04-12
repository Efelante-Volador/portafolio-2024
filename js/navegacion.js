// Este código es un menú de navegación en un sitio web que se despliega cuando el usuario se desplaza hacia abajo y desaparece cuando el usuario se encuentra en la primera seccion del sitio. También incluye funciones que permiten al usuario desplazarse hacia diferentes secciones del sitio web haciendo clic en los elementos del menú.
var titulo = document.getElementById('nav-tittle-inicio');
var $nav = document.getElementById('navegador');
var sobremi = document.getElementById('nav-tittle-perfil');
var porta = document.getElementById('nav-tittle-portafolio');
var portada = document.getElementById('inicio');
var Vheader = document.getElementById('header');
var perfil = document.getElementById('div-perfil');
var proyecto = document.getElementById('div-proyectos');
var footer = document.getElementById('footer');
var certificado = document.getElementById('div-certificados');



//Esta funcion desplaza el navegador a la seccion de inicio
function inicio() {
    document.querySelector(".inicio-link").style.color = "var(--main-color)";
    restaurarColor(".trabajo-link");
    restaurarColor(".proyectos-link");
    restaurarColor(".contacto-link");
    $nav.style.visibility = "hidden";
    Vheader.style.display = "block";
    perfil.style.display = "none";
    proyecto.style.display = "none";
    footer.style.display = "none";
    certificado.style.display = "none";
}
//Esta funcion desplaza el navegador a la seccion de Perfil
function miTrabajo() {
  document.querySelector(".trabajo-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".contacto-link");
  $nav.style.visibility = "visible";
  Vheader.style.display = "none";
  perfil.style.display = "block";
  proyecto.style.display = "none";
  footer.style.display = "block";
  certificado.style.display = "none";
}
//Esta funcion desplaza el navegador a la seccion de Proyectos
function proyectos() {
  document.querySelector(".proyectos-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".trabajo-link");
  restaurarColor(".contacto-link");
  $nav.style.visibility = "visible";
  Vheader.style.display = "none";
  perfil.style.display = "none";
  proyecto.style.display = "block";
  footer.style.display = "block";
  certificado.style.display = "none";
}
function certificados(){
  document.querySelector(".contacto-link").style.color = "var(--main-color)";
  restaurarColor(".inicio-link");
  restaurarColor(".proyectos-link");
  restaurarColor(".trabajo-link");
  $nav.style.visibility = "visible";
  Vheader.style.display = "none";
  perfil.style.display = "none";
  proyecto.style.display = "none";
  certificado.style.display = "block";
}
function restaurarColor(selector) {
  document.querySelector(selector).style.color = "";
}
