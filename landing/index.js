/* codigo para la cabecera aparesca al scrolear*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

/* Custom JavaScript to show the menu when the logo is clicked */
function showMenu() {
  document.querySelector("header ul").style.display = "block";
}

function showMenu() {
  document.querySelector("header ul").style.display = "block";
}


/* codigo la parte final de la pagina*/
var footer = document.querySelector('footer');
var footerTop = footer.offsetTop;
var windowHeight = window.innerHeight;

function appear() {
  if (window.pageYOffset + windowHeight > footerTop) {
    footer.classList.add('footer-appear');
    window.removeEventListener('scroll', appear);
  }
}

window.addEventListener('scroll', appear);

window.addEventListener("scroll", function() {
    var footer = document.querySelector("footer");
    var footerPosition = footer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (footerPosition < screenPosition) {
      footer.classList.add("show");
    }
  });