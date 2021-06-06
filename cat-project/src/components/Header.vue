<template>
    <div class="title-back"><img class="title-img" src="../assets/title.png"></div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    .title-back {
        position: relative;
        top: -60px;
        background: #4b2c4b;
        padding-bottom: 20px;
    }

    .title-img {
        position: relative;
        top: 15px;
        width: 75%;
        max-height: 100%;
    }
</style>