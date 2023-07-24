
class MyHeader extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
      <header>
      <div class="logo">
      <a href="./index.html"><img src="./Image/SII logo.png" alt="Logo"></a>
      </div>

      <nav class="nav">
        <ul>
          <li><a href="./quienesSomos.html">Quiénes somos</a></li>
          <li><a href="./servicios.html">Qué ofrecemos</a></li>
          <li><a href="./formulario.html">Contacto</a></li>
        </ul>
      </nav>
      </header>
    `
  }
}

customElements.define('my-header' , MyHeader)


class MyFooter extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `
      <footer class="fila">
        <div class=" col-6">
          <div class="direccion">
            <p>Dirección de la empresa: <br>
            Calle Falsa 123, Ciudad Ficticia
            <br>
            © Codo a Codo 1C2023 Team SII</p>

          </div>
        </div>

        <div class="iconos col-6">
            <ul class="social-icons">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            </ul>
        </div>
      </footer>
    `
  }
}

customElements.define('my-footer' , MyFooter)

//esto es para darle efecto fade in al titulo servicios de ingenieria
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero-text");
    heroText.classList.add("animate__animated", "animate__fadeIn");
  });
  
 
 
  