<template>
  <div class="cv-container">
    <h1 class="cv-title">My Journey</h1>
    <div class="timeline">
      <div v-for="(item, index) in timelineData" :key="index" class="timeline-item">
        <div class="timeline-dot" />
        <div class="timeline-content">
          <h3>{{ item.title }}</h3>
          <span class="timeline-date">{{ item.date }}</span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVPage',
  data() {
    return {
      timelineData: [
        {
          title: 'Student Intake – Belfast Met',
          date: 'July 2025',
          description: 'Helped coordinate and support new student enrolments, providing admin and technical assistance.',
        },
        {
          title: 'Freelance Web Designer',
          date: '2023 – Present',
          description: 'Designed and developed modern, accessible websites for small businesses and creatives.',
        },
        {
          title: 'BA (Hons) Digital Media',
          date: '2021 – 2025',
          description: 'Studied full-stack development, digital storytelling, UX, and interactive design.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.cv-container {
  padding: 3rem 1.5rem;
  max-width: 800px;
  margin: auto;
  color: #fefefe;
  font-family: 'system-ui', sans-serif;
}

.cv-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f4b400; /* Your warm orange-yellow */
}

.timeline {
  position: relative;
  margin-left: 20px;
  border-left: 2px solid #f4b400;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  background-color: #f4b400;
  border-radius: 50%;
  position: absolute;
  left: -8px;
  top: 5px;
  box-shadow: 0 0 6px #f4b400;
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin: 0;
  color: #fff;
}

.timeline-date {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 0.5rem;
  display: block;
}

.timeline-content p {
  margin: 0.3rem 0 0;
  color: #ddd;
}
</style>
