export default class {
    constructor() {
        this.settings = {
            selector: document.querySelector('header'),
        };
        this.init();
    }

    init() {
        const {selector} = this.settings;
        console.log(selector.classList)

        let position = document.documentElement.scrollTop;

        window.addEventListener('scroll', () => {
            const lastScroll = document.documentElement.scrollTop || window.pageYOffset;
            console.log(lastScroll);
            if (lastScroll > position && lastScroll > 100) {
                selector.classList.add('slideIn');
            } else {
                selector.classList.remove('slideIn');
            }

            // position = lastScroll;
        });
    }

}
