<template>
  <div class="layout">
    <NavBar />
    <main class="content">
      <div id="app">
        <router-view />
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  components: {
    NavBar,
    FooterBar,
  },
}
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.content {
  flex-grow: 1; /* Take remaining space so footer is pushed down */
  width: 100%;
  overflow-x: hidden;
}

#app {
  max-width: 1280px;
  margin: 0 auto; /* center horizontally */
  padding: 2rem 2.5rem;
  box-sizing: border-box;
}
</style>
