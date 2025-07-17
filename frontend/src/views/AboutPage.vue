<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <h1 class="hero-heading">Hi, I’m Caitlin!</h1>
      <p class="tagline">Resilient dev. Friendly nerd. Big heart. Clean code.</p>
    </section>

    <!-- Origin Story -->
    <section class="bio-section">
      <h2>Origin Story</h2>
      <p>
        I’m a Belfast-based developer with a passion for programming. From learning new languages to debugging, I enjoy it the whole process.
      </p>
      <p>
        Outside of code, I’m into comics, the gym, and games. I get a bit too excited about small details; whether it's a clean UI or a clever easter egg in a story.
      </p>
      <p>
        I would describe myself as resilient, curious, and a bit of a nerd. I try to bring thoughtfulness and heart to everything I work on.
      </p>
    </section>

    <!-- Fun Facts -->
    <section class="fun-facts">
      <h2>Fun Facts</h2>
      <div class="fact-grid">
        <div
          v-for="(fact, i) in funFacts"
          :key="i"
          class="flip-card"
          :class="{ flipped: flippedIndexes.has(i) }"
          @click="toggleFlip(i)"
          tabindex="0"
          @keydown.enter.prevent="toggleFlip(i)"
          @keydown.space.prevent="toggleFlip(i)"
          role="button"
          :aria-pressed="flippedIndexes.has(i) ? 'true' : 'false'"
        >
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img :src="fact.img" :alt="fact.text + ' icon'" />
            </div>
            <div class="flip-card-back">
              <p>{{ fact.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <p>Looking for a dev who’s both brainy and brave?</p>
      <router-link to="/contact" class="cta-button">Let’s Connect</router-link>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const funFacts = [
  { text: 'Extensive comic collection', img: '/images/superman-logo.png' },
  { text: 'Enjoy debugging almost as much as writing new code', img: '/images/debug-icon.png' },
  { text: 'Prefers The Last of Us 2 over The Last of Us', img: '/images/last-of-us-2-logo.png' },
  { text: 'Believes every project needs an easter egg hidden somewhere', img: '/images/easter-egg-icon.png' },
]


const flippedIndexes = ref(new Set())

function toggleFlip(index) {
  if (flippedIndexes.value.has(index)) {
    flippedIndexes.value.delete(index)
  } else {
    flippedIndexes.value.add(index)
  }
  flippedIndexes.value = new Set(flippedIndexes.value)
}
</script>

<style scoped>
.about-page {
  padding-top: 6rem;
  color: #e0e0e0;
}

/* Hero Section */
.about-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: radial-gradient(circle at top, #2b2f38 0%, #1e2633 100%);
}

.hero-heading {
  font-family: 'Raleway', sans-serif;
  font-size: 3rem;
  color: #f5a623;
  text-shadow: 2px 2px #000;
  animation: popIn 0.6s ease;
}

@keyframes popIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.tagline {
  font-size: 1.2rem;
  color: #cfd8dc;
  margin-top: 1rem;
}

/* Bio Section */
.bio-section {
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #1e2633;
  border: 3px solid #f5a623;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(245, 166, 35, 0.2);
  animation: fadeInUp 0.6s ease;
}

.bio-section h2 {
  font-family: 'Raleway', sans-serif;
  color: #f5a623;
  margin-bottom: 1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bio-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Fun Facts */
.fun-facts {
  padding: 3rem 2rem;
  text-align: center;
}

.fun-facts h2 {
  font-family: 'Raleway', sans-serif;
  color: #f5a623;
  margin-bottom: 2rem;
}

.fact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  justify-items: center;
}

/* Flip card container */
.flip-card {
  background-color: transparent;
  width: 160px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
  outline: none;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  user-select: none;
}

.flip-card:hover {
  box-shadow: 0 0 15px 3px rgba(245, 166, 35, 0.6);
  transform: scale(1.05);
}


/* When flipped, rotate */
.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

/* Front and back sides */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Front: Image */
.flip-card-front {
  background-color: #1e2633;
}

.flip-card-front img {
  max-width: 100px;
  max-height: 100px;
}

/* Back: Fun fact text */
.flip-card-back {
  background-color: #f5a623;
  color: #1e2633;
  transform: rotateY(180deg);
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
}

/* Call to Action */
.cta-section {
  text-align: center;
  padding: 4rem 2rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cta-button {
  background-color: #f5a623;
  color: #1e2633;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: 0.3s ease;
  box-shadow: 0 2px 6px rgba(245, 166, 35, 0.4);
}

.cta-button:hover {
  background-color: #fffacd;
  color: #1e2633;
  box-shadow: 0 4px 12px rgba(245, 166, 35, 0.6);
  animation: pulseGlow 1.5s infinite alternate;
}

@keyframes pulseGlow {
  0% { box-shadow: 0 2px 6px rgba(245, 166, 35, 0.4); }
  100% { box-shadow: 0 4px 15px rgba(245, 166, 35, 0.7); }
}
</style>