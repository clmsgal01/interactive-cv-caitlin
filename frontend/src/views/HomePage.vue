<template>
  <section class="home-hero">
    <div class="home-content">
      <h1 class="fade-in">CAITLIN SHEPPARD</h1>
      <p class="fade-in delay-1">Curious mind, steady hands, and a soft spot for superheroes and stories. </p>
      <router-link to="/projects" class="cta-button fade-in delay-2">View Projects</router-link>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  text-align: center;
  background-color: #2b2f38;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.015) 0px,
    rgba(255, 255, 255, 0.015) 1px,
    transparent 1px,
    transparent 4px
  );
}

.home-content {
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #f0f0f0;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
}

p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: #cfd8dc;
}

.cta-button {
  background-color: transparent;
  color: #f5a623;
  border: 3px solid #f5a623;
  border-radius: 12px;
  font-weight: 900;
  padding: 0.75rem 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: inset 0 0 0 0 #f5a623;
  transition: box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  user-select: none;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
}

.cta-button:hover {
  color: #1e2633;
  background-color: #f5a623;
  box-shadow: inset 300px 0 0 0 #f5a623;
  transform: scale(1.05);
  transition: box-shadow 0.3s ease, transform 0.2s ease, background-color 0.3s ease;
}

/* Micro-interaction animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.fade-in.delay-1 {
  animation-delay: 0.2s;
}
.fade-in.delay-2 {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
