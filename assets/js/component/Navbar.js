class Navbar {
    constructor() {
        // Elements
        this.navbarToggle = document.querySelector('.navbar__toggle');
        this.navbarMl = document.querySelector('.navbar_ml');
        this.logoMl = document.querySelector('.logo___ml');
        this.secondlogo = document.querySelector('.logo_hide_pc');
        this.secondtext = document.querySelector('.hide_txt_pc');
        this.buttonHidePc = document.querySelector('.button_hide_pc');

        // Functions
        this.init();
    };

    init() {
        this.navbarToggle.onclick = this.openToggle.bind(this);
        this.buttonHidePc.onclick = this.hidePC.bind(this);
    };

    openToggle() {
        this.navbarMl.classList.add('active');
        [this.secondlogo, this.secondtext, this.buttonHidePc].map(el => el.classList.add('activef'));
    };

    hidePC() {
        this.navbarMl.classList.remove('active');
    };
};

export {Navbar};