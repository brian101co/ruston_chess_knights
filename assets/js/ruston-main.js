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
            this.trigger.querySelector('[alt="Open Menu"]').classList.toggle("hide");
            this.trigger.querySelector('[alt="Close Menu"]').classList.toggle("hide");
            this.el.classList.add("open");
            this.transitionIn();
        },
        close() {
            this.state.isOpen = false;
            this.trigger.querySelector('[alt="Open Menu"]').classList.toggle("hide");
            this.trigger.querySelector('[alt="Close Menu"]').classList.toggle("hide");
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
            listElem.querySelector(".caret").classList.toggle("open");
        },
        onCloseStart: function (listElem) {
            listElem.querySelector(".caret").classList.toggle("open");
        },
    });
    
    MobileMenu.init();
    copyrightYear.innerHTML = new Date().getFullYear();
});