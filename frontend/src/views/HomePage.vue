<template>
  <section class="home-hero">
    <div class="intro-text">
      <h1>Hello, I’m Caitlin</h1>
      <p>Front-End Developer & Software Engineer crafting clean, modern web experiences.</p>
      <router-link to="/projects" class="cta-button">See My Work</router-link>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 80px);
  padding: 2rem;

  background-color: #2b2f38;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.015) 0px,
    rgba(255, 255, 255, 0.015) 1px,
    transparent 1px,
    transparent 4px
  );

  box-sizing: border-box;
  color: #e0e0e0;
  text-align: center;
  overflow-x: hidden;
}


.intro-text h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #f0f0f0;
  text-shadow: 0 3px 6px rgba(0,0,0,0.7);
}

.intro-text p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #cfd8dc;
}

.cta-button {
  background-color: #c43e1a;
  color: #f0f0f0;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(196, 62, 26, 0.6);
  transition: background-color 0.3s ease;
  display: inline-block;
}

.cta-button:hover {
  background-color: #a93213;
  box-shadow: 0 6px 18px rgba(169, 50, 19, 0.8);
}
</style>
