class NavLink {
    constructor(domElement) {
      this.domElement = domElement;
      this.caretIcon = document.querySelector('#shown-icon');
      this.caretIcon.addEventListener('click', this.expandLinks.bind(this));
    };
  
    expandLinks() {
      this.domElement.classList.toggle('nav-link--open');
    };
};
 
  let navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach((link) => {
    return new NavLink(link);
  });

  