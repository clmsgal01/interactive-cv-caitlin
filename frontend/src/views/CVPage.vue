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
          title: 'Supervisor – Cardfactory',
          date: 'September 2023 - Present',
          description: 'Led a team to deliver excellent customer service and efficient store operations, handling money and boosting sales.',
        },
        {
          title: 'First Class BSc Hons Application and Cloud Development with Data Science (Open University)',
          date: '2025',
          description: 'Graduated top of my class mastering application development, cloud computing, and data science fundamentals.',
        },
        {
          title: 'Civil Service Admin Officer',
          date: 'July 2023 - September 2024',
          description: 'Provided efficient administrative support and streamlined office workflows within a fast-paced government environment.',
        },
        {
          title: 'Boojum Supervisor',
          date: 'November 2023 - July 2024',
          description: 'Managed daily operations and a team to deliver top-notch customer experiences in a busy food service setting.',
        },
        {
          title: 'Associate Bachelor’s Degree with BSc Software Engineering (Ulster, Merit)',
          date: 'September 2020 - September 2023',
          description: 'Achieved a Merit in software engineering through a rigorous degree focused on practical coding skills. Left due to COVID.',
        },
        {
          title: 'Stiona LTD Junior Developer Placement',
          date: 'July 2022 - July 2023',
          description: 'Developed dynamic web applications using Vue.js and collaborated in an agile team environment during an immersive placement.',
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
