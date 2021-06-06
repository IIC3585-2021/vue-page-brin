<template>
    <div class='title-text'>{{ title }}</div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    .title-text {
        position: relative;
        font-family: 'Pacifico', cursive;
        text-transform: uppercase;
        font-size: 7vw;
        top: -4vw;
        color: #fbf0ff;
    }

</style>