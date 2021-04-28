import mail from "../../assets/images/icons/mail.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import youtube from "../../assets/images/icons/youtube.svg";
class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    //listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal());
    //pushes any key
    document.addEventListener("keyup", (e) => this.keyPressHandler(e));
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible");
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeTheModal();
    }
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
