import mail from "../../assets/images/icons/mail.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import youtube from "../../assets/images/icons/youtube.svg";
class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.openModalButtons = document.querySelectorAll(".open-modal");
    this.events();
  }

  events() {
    //listen for open click
    this.openModalButtons.forEach((e) =>
      e.addEventListener("click", (e) => this.openTheModal(e))
    );
    //listen for close click
    //pushes any key
  }

  openTheModal(e) {
    e.preventDefault();
    this.modal.classList.add("modal--is-visible");
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      ` <div class="modal">
      <div class="modal__inner">
        <h2 class="section-title section-title--blue section-title--less-margin"><img src=${mail} class="section-title__icon"> Get in <strong>Touch</strong></h2>
        <div class="wrapper wrapper--narrow">
          <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
        </div>
  
        <div class="social-icons">
          <a href="#" class="social-icons__icon"><img src=${facebook} alt="Facebook"></a>
          <a href="#" class="social-icons__icon"><img src=${twitter} alt="Twitter"></a>
          <a href="#" class="social-icons__icon"><img src=${instagram} alt="Instagram"></a>
          <a href="#" class="social-icons__icon"><img src=${youtube} alt="YouTube"></a>
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>`
    );
  }
}
export default Modal;
