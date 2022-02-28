console.log('ciao')

const app = new Vue ({
    el: '#app',
    data: {
        activeIndex : 0,
        active : 'active',
        items: [
            {
                immagine: 'img/01.jpg',
                titolo: 'Svezia',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        
            {
                immagine: 'img/02.jpg',
                titolo: 'Svizzera',
                descrizione: 'Lorem ipsum.',
            },
        
            {
                immagine: 'img/03.jpg',
                titolo: 'Gran Bretagna',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
        
            {
                immagine: 'img/04.jpg',
                titolo: 'Germania',
                descrizione: 'Lorem ipsum, dolor sit amet',
            },
        
            {
                immagine: 'img/05.jpg',
                titolo: 'Paradise',
                descrizione: 'Lorem ipsum',
            },
        ],

    },

    methods: {
       nextSlide () {
        (this.activeIndex < this.items.length-1 ) ? this.activeIndex++ : this.activeIndex = 0,
        console.log(this.activeIndex)
        },
        
        prevSlide () {
        (this.activeIndex > 0 ) ? this.activeIndex-- : this.activeIndex = this.items.length -1
        },
        
        goToSlide (index){
            this.activeIndex = index;
        }

        
    

    }

    
});