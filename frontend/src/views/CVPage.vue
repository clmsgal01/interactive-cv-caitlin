<template>
  <section class="timeline">
    <h2 class="timeline-title">Timeline</h2>
    <div class="timeline-wrapper">
      <div
        v-for="(item, index) in timeline"
        :key="index"
        class="timeline-item"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
      >
        <div class="timeline-content">
          <h3>{{ item.title }}</h3>
          <small class="timeline-date">{{ item.date }}</small>
          <p>{{ item.description }}</p>
        </div>
        <span class="timeline-dot"></span>
      </div>
      <div class="timeline-line"></div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
{
    title: 'Card Factory Supervisor',
    description: 'Managed shift operations, team training, and customer service.',
    date: '2024 – Present',
  },
  {
    title: 'BSc Hons Application & Cloud Development',
    description: 'Graduated First Class with Data Science focus, validated by Open University.',
    date: '2024 – 2025',
  },
  {
    title: 'Civil Service Admin Officer',
    description: 'Handled sensitive data and correspondence in a government department.',
    date: '2023 – 2024',
  },
  {
    title: 'Boojum Supervisor',
    description: 'Led a team in a fast-paced food environment, ensuring smooth service.',
    date: '2022 – 2023',
  },
  {
    title: 'Associate Degree in Software Engineering',
    description: 'Achieved Merit from Ulster University.',
    date: '2020 – 2023',
  },
  {
    title: 'Junior Developer Placement',
    description: 'Built internal tools with Vue, Git, REST APIs and Agile.',
    date: '2022 – 2023',
  },
]
</script>

<style scoped>
.timeline {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 1rem;
  color: #e0e0e0;
  position: relative;
}

.timeline-title {
text-align: center;
  font-size: 3rem;
  color: #f5a623; /* your warm gold */
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.timeline-wrapper {
  position: relative;
  padding-left: 2rem;
}

.timeline-line {
  position: absolute;
  left: 40px;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #ffcc00, #ff6600);
  box-shadow: 0 0 8px #ffcc00;
  animation: growLine 1s ease-out forwards;
  opacity: 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 2.5rem;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.6s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0s; }
.timeline-item:nth-child(2) { animation-delay: 0.1s; }
.timeline-item:nth-child(3) { animation-delay: 0.2s; }
.timeline-item:nth-child(4) { animation-delay: 0.3s; }
.timeline-item:nth-child(5) { animation-delay: 0.4s; }
.timeline-item:nth-child(6) { animation-delay: 0.5s; }

.timeline-item.right {
  margin-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 15px;
  top: 8px;
  width: 14px;
  height: 14px;
  background: #f5a623;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 6px rgba(245, 166, 35, 0.6);
  transition: transform 0.2s ease;
}

.timeline-dot:hover {
  position: absolute;
  left: 15px;
  top: 10px;
  width: 14px;
  height: 14px;
  background: #f5a623;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 10px rgba(245, 166, 35, 05);
  animation: pulse 2s infinite ease-in-out
}

.timeline-content {
  background: linear-gradient(135deg, #1e1f23, #2b2f38);
  border-left: 4px solid #f5a623;
  padding: 1rem 1.3rem;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 0 12px rgba(245, 166, 35, 0.4);
  transform: translateY(-3px);
}

.timeline-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  color: #f5a623;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
}

.timeline-content .timeline-date {
  display: block;
  font-size: 0.85rem;
  color: #bbb;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.timeline-content p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #cccccc;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growLine {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 8px rgba(245, 166, 35, 0.5);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 14px rgba(245, 166, 35, 0.7);
  }
}
</style>
