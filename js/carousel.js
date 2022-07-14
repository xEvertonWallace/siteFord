
class Carousel {
    constructor(src, title, href, alt) {
        this.src = src;
        this.title = title;
        this.href = href;
        this.alt = alt;
    }

    static createCarousel() {

        let arr = [];
        arr.push(new Carousel('img/imagem_1.jpg', 'A Nova Ranger oferece uma linha de motorizações e transmissões para os diferentes tipos de uso. Verifique as novidades.', 'lancamento.html', 'Imagem Nova Ford Ranger 2022')); 
        arr.push(new Carousel('img/imagem_2.jpg', 'Ford a nossa história.',"#", 'Imagem História Ford'));
        arr.push(new Carousel('img/imagem_3.jpg', 'Nova Ford Bronco Sport 2023.', "#", 'Imagem Nova Ford Bronco Sport 2022'));

        let carousel = document.querySelector('#carousel');
        
        Carousel._items = [];
        Carousel._currentItemIndex = 0; 

        for(let i = 0; i < arr.length; i++) {
            
            let item = document.createElement('div');
            let img = document.createElement('img');
            let title = document.createElement('p');
            let link = document.createElement('a');

            if(i == 0) {
                item.setAttribute('class', 'flex-main selected');
            } else {
                item.setAttribute('class', 'flex-main unselected');
            }   
            link.setAttribute('href', arr[i].href);
            img.setAttribute('src', arr[i].src);
            img.setAttribute('alt', arr[i].alt);
            title.innerHTML = arr[i].title;
            carousel.appendChild(item);
            item.appendChild(link);
            item.appendChild(img);
            link.appendChild(img);
            item.appendChild(title);
            Carousel._items.push(item);
        }
    }

    static nextItem() {
                
        Carousel._items[Carousel._currentItemIndex].classList.add('unselected');
        Carousel._items[Carousel._currentItemIndex].classList.remove('selected');
        
        Carousel._currentItemIndex++;

        if(Carousel._currentItemIndex >= Carousel._items.length) {
            Carousel._currentItemIndex = 0;
        }        
        Carousel._items[Carousel._currentItemIndex].classList.remove('unselected');
        Carousel._items[Carousel._currentItemIndex].classList.add('selected');        
        
    }
    static startCarousel () {
        Carousel.createCarousel();
        if(Carousel._items.length > 0) {
            this._time = 4500;
            setInterval(() => {
                Carousel.nextItem();}, _time);
        } else {
            throw "O método startCarousel precisa de uma variável Array."
        }
    }
}
window.addEventListener('load', Carousel.startCarousel);