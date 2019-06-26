class NavLink {
    constructor(domElement) {
      this.domElement = domElement;
      this.caretIcon = document.querySelector('#shown-icon');
      console.log(this.caretIcon);
      this.caretIcon.addEventListener('click', this.expandLinks.bind(this));
    };
  
    expandLinks() {
      this.domElement.classList.toggle('nav-link--open');
    };

    // caretFlip() {
    //     if(this.upIcon.style.display ==  "none") {
    //         this.upIcon.style.display = "flex";
    //         this.downIcon.style.display = "none";
    //         console.log('Down');
    //     } else {
    //         this.upIcon.style.display = "none";
    //         this.downIcon.style.display = "flex";
    //         console.log('up');
    //     }
    // };
};
 
  
  let navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    return new NavLink(link);
  });

  