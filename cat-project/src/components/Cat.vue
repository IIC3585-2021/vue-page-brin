<template>
    <div v-if="!showCat" class="getCat">
        <div class="item1"><img class="cat-gif" src="../assets/gift.gif"></div>
        <div class="item2"></div>
        <div class="item3"><img class="cat-gif" src="../assets/bread.gif"></div>
        <div class="item4"></div>
        <div class="item5"><button class="cute-btn" @click="giveMeCat">Have a cat!</button></div>
        <div class="item6"></div>
        <div class="item7"><img class="cat-gif" src="../assets/chip.gif"></div>
        <div class="item8"></div>
        <div class="item9"><img class="cat-gif" src="../assets/hi.gif"></div>
    </div>

    <div v-if="showCat">
        
        <div class="cat-container">
            <img :src="image.url">
        </div>
        <div class="btns">
            <button class="cute-btn" @click="loadNextImage">Yeah, still bad...</button>
            <button class="cute-btn" @click="clickEnd">Nop, I'm all good now</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1,
            showCat: false,
            image: { url: "" }
        }
    },
    created() {
        this.loadNextImage();
    } ,
    methods: {
        giveMeCat() {
            this.showCat = !this.showCat
        },

        async loadNextImage() {
            if (this.count % 5 == 0) {
                // Toggle Modal and gift dog
                this.$emit('open')
            }

            try{
                axios.defaults.headers.common['x-api-key'] = "a437f9ed-4366-492c-8de1-160b2f3b47c4"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
                this.image = response.data[0]
                this.count += 1
            }catch(err){
                console.log(err)
            }
        },

        clickEnd() {
            this.$emit('end')
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');

    .cute-btn {
        --color: #4b2c4b;
        --background: #fbf0ff;
        --border: #332250;
        --wall: #ad8fc4;
        --shadow: #2e1d33;
        --hover-background: #f5e9ff;

        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: 600;
        color: var(--color);
        text-transform: uppercase;
        padding: 1.25em 2em;
        margin: 10px;
        background: var(--background);
        border: 2px solid var(--border);
        border-radius: 0.75em;
        transform-style: preserve-3d;
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    
    .cute-btn::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--wall);
        border-radius: inherit;
        box-shadow: 0 0 0 2px var(--border), 0 0.625em 0 0 var(--shadow);
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    .cute-btn:hover {
        background: var(--hover-background);
        transform: translate(0, 0.25em);
    }

    .cute-btn:hover::before {
        box-shadow: 0 0 0 2px var(--border), 0 0.5em 0 0 var(--shadow);
        transform: translate3d(0, 0.5em, -1em);
    }

    .cute-btn:active {
        background: var(--hover-background);
        transform: translate(0em, 0.75em);
    }

    .cute-btn:active::before {
        box-shadow: 0 0 0 2px var(--border), 0 0 var(--shadow);
        transform: translate3d(0, 0, -1em);
    }

    .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .btns {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .cat-container img {
        background: #fbf0ff;
        border: 2px solid #332250;
        border-radius: 5px;
        padding: 7px;
        max-width: 80%;
    }

    .item1 { grid-area: I1; }
    .item2 { grid-area: I2; }
    .item3 { grid-area: I3; }
    .item4 { grid-area: I4; }
    .item5 { grid-area: I5; }
    .item6 { grid-area: I6; }
    .item7 { grid-area: I7; }
    .item8 { grid-area: I8; }
    .item9 { grid-area: I9; }

    .getCat {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-areas:
            'I1 I4 I7'
            'I2 I5 I8'
            'I3 I6 I9';
    }

    .cat-gif {
        width: 15vw;
        height: 15vw;
    }
</style>