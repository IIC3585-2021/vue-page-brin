<template>
    <div class="backdrop" @click.self="closeModal">
        <div v-if="theme === 'dog'" class="modal">
            <h3>{{ choise }}</h3>
            <h1>Here! have a dog for extra good boy feels</h1>

            <div class="dog-container">
                <img :src="image.url">
            </div>
        </div>

        <div v-else class="modal">
            <h1>Congrats!!! It's great to see you happy again</h1>
            <span @click="clickConfetti" style='font-size:100px;'>&#127881;</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    data() {
        return {
            image: { url: "" },
            texts: [
                "Wow, you're really not having a good time huh?",
                "Mmmm... Looks like it's been rough lately",
                "Hey, are you doing ok?"
            ],
            choise: ""
        }
    },
    created() {
        var index = Math.floor(Math.random() * this.texts.length)
        this.choise = this.texts[index]
        this.loadNextImage();
    } ,
    methods: {
        closeModal() {
            this.$emit('close')
        },

        async loadNextImage() {
            try{
                axios.defaults.headers.common['x-api-key'] = "a437f9ed-4366-492c-8de1-160b2f3b47c4"
                let response = await axios.get('https://api.thedogapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
                this.image = response.data[0]
            }catch(err){
                console.log(err)
            }
        },

        clickConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
        }
    }
}
</script>


<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: #fbf0ff;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    h1, h3 {
        color: #332250;
        border: none;
        padding: 0;
    }

    .dog-container {
        margin-top: 50px;
    }
    .dog-container img {
        background: #fbf0ff;
        border: 2px solid #332250;
        border-radius: 5px;
        padding: 7px;
        max-width: 80%;
    }
</style>