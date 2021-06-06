<template>
  <Header :title="title"/>
  <Cat @open="toggleModal" @end="toggleEnd"/>
  <div v-if="showModal">
    <Modal theme="dog" @close="toggleModal"/>
  </div>
  <div v-if="showEnd">
    <Modal @close="toggleEnd"/>
  </div>
</template>

<script>
import Cat from './components/Cat.vue'
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Cat, Header, Modal },
  data() {
    return {
      title: 'Feeling bad?',
      showModal: false,
      showEnd: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },

    toggleEnd() {
      this.showEnd = !this.showEnd
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbf0ff;
  margin-top: 60px;
}
</style>
