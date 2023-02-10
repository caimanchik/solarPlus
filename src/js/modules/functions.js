export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    });
}


export function reply() {
    let footer = document.querySelector('.footer').getBoundingClientRect().top;
    let links = document.querySelectorAll('.scroll');
    
    links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        
        window.scrollBy({
            top: footer, 
            behavior: 'smooth'
        })
    }))
}

export class greenSLider {
    
    constructor(params) {
        this.slider = document.querySelector('.green-slider');
        this.slides = document.querySelectorAll('.green-slide');
        this.next = document.querySelector('.green-slider__arrow-next');
        this.prev = document.querySelector('.green-slider__arrow-before');
        
        this.selected = 0
        this.changeSlide()
        this.arrowLogic()
    }
    
    changeSlide() {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('visible')
            
            if (i === this.selected) {
                slide.classList.add('visible')
            }
        })
    }
    
    arrowLogic() {
        this.next.addEventListener('click', e => {
            this.selected++
            
            if (this.selected + 1 > this.slides.length) 
                this.selected = 0
            
            this.changeSlide()
        })
        
        this.prev.addEventListener('click', e => {
            this.selected--

            if (this.selected < 0)
                this.selected = this.slides.length - 1

            this.changeSlide()
        })
    }
}

export class clientsSLider {
    
    constructor(params) {
        this.slider = document.querySelector('.clients-slider');
        this.slides = document.querySelectorAll('.clients-slide');
        this.next = document.querySelector('.clients-slider__arrow-next');
        this.prev = document.querySelector('.clients-slider__arrow-before');
        
        this.selected = 0
        this.changeSlide()
        this.arrowLogic()
    }
    
    changeSlide() {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('visible')
            
            if (i === this.selected) {
                slide.classList.add('visible')
            }
        })
    }
    
    arrowLogic() {
        this.next.addEventListener('click', e => {
            this.selected++
            
            if (this.selected + 1 > this.slides.length) 
                this.selected = 0
            
            this.changeSlide()
        })
        
        this.prev.addEventListener('click', e => {
            this.selected--

            if (this.selected < 0)
                this.selected = this.slides.length - 1

            this.changeSlide()
        })
    }
}


