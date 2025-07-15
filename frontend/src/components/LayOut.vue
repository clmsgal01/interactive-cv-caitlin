<template>
  <div class="layout">
    <NavBar />
    <main class="content">
      <router-view />
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

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden; /* prevent horizontal scroll bar from rogue 100vw */
}

.content {
  flex: 1;
  width: 100%;
  padding: 2rem 2.5rem;
  margin-top: 60px; /* adjust to match your fixed navbar height */
  box-sizing: border-box;
}
</style>
