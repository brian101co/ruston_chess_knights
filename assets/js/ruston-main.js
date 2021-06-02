document.addEventListener("DOMContentLoaded", function() {
    const FAQAccordianEl = document.querySelector(".collapsible");
    const SliderElem = document.querySelector(".slider");
    const copyrightYear = document.querySelector(".copyright-year");
    const MobileMenu = {
        trigger: document.querySelector(".menu-trigger"),
        el: document.querySelector("#mobile-nav"),
        state: {
            isOpen: false,
        },
        init() {
            const self = this;
            this.trigger.addEventListener("click", function(event){
                if (self.state.isOpen) return self.close();
                return self.open();
            });
            for(let child of this.el.children) {
                child.addEventListener("click", function() {
                    if (self.state.isOpen) return self.close();
                    return self.open();
                });
            }
        },
        transitionIn() {
            const self = this;
            setTimeout(function() {
                self.el.style.opacity = 1;
            }, 10);
        },
        transitionOut() {
            this.el.style.opacity = 0;
        },
        open() {
            this.state.isOpen = true;
            this.trigger.innerHTML =
              '<img src="assets/imgs/close.svg" alt="Close Menu" aria-label="Close Menu">';
            this.el.classList.add("open");
            this.transitionIn();
        },
        close() {
            this.state.isOpen = false;
            this.trigger.innerHTML =
              '<img src="assets/imgs/hamburger.svg" alt="Open Menu" aria-label="Open Menu">';
            this.transitionOut();
            const self = this;
            setTimeout(function() {
                self.el.classList.remove("open");
            }, 300);
        }
    }

    M.Slider.init(SliderElem);
    M.Collapsible.init(FAQAccordianEl, {
        onOpenStart: function (listElem) {
        listElem.querySelector(".caret").innerHTML =
            '<img src="assets/imgs/caret-down.svg" alt="Tab Open Icon">';
        },
        onCloseStart: function (listElem) {
        listElem.querySelector(".caret").innerHTML =
            '<img src="assets/imgs/caret-right.svg" alt="Tab Closed Icon">';
        },
    });
    
    MobileMenu.init();
    copyrightYear.innerHTML = new Date().getFullYear();
});