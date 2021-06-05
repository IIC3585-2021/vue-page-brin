const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Brandon Sanderson', img: 'assets/1.jpg', isFav: true },
                { title: 'The way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle( title ) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')