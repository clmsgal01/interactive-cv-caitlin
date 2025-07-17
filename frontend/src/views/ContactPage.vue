<template>
  <div class="contact-page">
    <section class="contact-intro">
      <h1>Let’s Chat!</h1>
      <p>
        Whether you want to talk code, comics, or just say hi — I’m all ears.
      </p>
    </section>

    <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
      <div class="input-group">
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Your name"
          required
          autocomplete="name"
        />
        <label for="name">Name</label>
      </div>

      <div class="input-group">
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="you@example.com"
          required
          autocomplete="email"
        />
        <label for="email">Email</label>
      </div>

      <div class="input-group">
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Your message"
          rows="6"
          required
        ></textarea>
        <label for="message">Message</label>
      </div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>

      <p
        v-if="statusMessage"
        :class="{ success: success, error: !success }"
        class="status-message"
      >
        {{ statusMessage }}
      </p>
    </form>

    <section class="social-links">
      <h2>Find me online</h2>
      <ul>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener"
            >GitHub</a
          >
        </li>
        <li>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener"
            >Twitter</a
          >
        </li>
        <!-- Add more as you like -->
      </ul>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from 'emailjs-com'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const success = ref(false)

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

async function handleSubmit() {
  statusMessage.value = ''

  if (!form.name.trim() || !validateEmail(form.email) || !form.message.trim()) {
    statusMessage.value = 'Please fill in all fields correctly.'
    success.value = false
    return
  }

  isSubmitting.value = true

  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    }

    await emailjs.send(
      'service_jdgpxbm', // Your EmailJS Service ID
      'template_v0q2h0k', // Your EmailJS Template ID
      templateParams,
      'Z65QUT-ZjJvcb1DU0' // Your EmailJS User/Public Key
    )

    statusMessage.value = 'Message sent! I’ll get back to you soon.'
    success.value = true

    form.name = ''
    form.email = ''
    form.message = ''
  } catch (e) {
    statusMessage.value = 'Oops! Something went wrong. Please try again later.'
    success.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 6rem auto 3rem;
  padding: 0 1rem;
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Contact Intro */
.contact-intro {
  text-align: center;
  margin-bottom: 2rem;
  user-select: none;
}

.contact-intro h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 2.8rem;
  color: #f5a623;
  margin-bottom: 0.5rem;
}

.contact-intro p {
  font-size: 1.2rem;
  color: #cfd8dc;
}

/* Floating label input groups */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.input-group {
  position: relative;
  width: 100%;
}

/* Inputs & Textarea */
input,
textarea {
  padding: 1.2rem 0.8rem 0.4rem 0.8rem;
  border: 2px solid #1e2633;
  border-radius: 8px;
  background-color: #2b2f38;
  color: #e0e0e0;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  outline-offset: 2px;
}

/* Placeholder transparent for floating label */
input::placeholder,
textarea::placeholder {
  color: transparent;
  transition: color 0.3s ease;
}

input:focus::placeholder,
textarea:focus::placeholder {
  color: #ccc;
}

/* Labels */
label {
  position: absolute;
  left: 12px;
  top: 1.3rem;
  color: #f5a623;
  font-weight: 600;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Floating label effect */
input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  color: #f5a623;
  font-size: 0.85rem;
  top: -0.6rem;
  background-color: #2b2f38;
  padding: 0 6px;
  border-radius: 4px;
}

/* Focus glow */
input:focus,
textarea:focus {
  outline: none;
  border-color: #f5a623;
  box-shadow: 0 0 10px rgba(245, 166, 35, 0.7);
}

/* Submit Button */
button {
  background-color: #f5a623;
  color: #1e2633;
  font-weight: 700;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, background-color 0.3s ease, transform 0.2s ease;
  font-family: 'Raleway', sans-serif;
  font-size: 1.1rem;
  will-change: transform;
  box-shadow: 0 2px 6px rgba(245, 166, 35, 0.4);
}

button:hover:not(:disabled) {
  background-color: #fffacd;
  box-shadow: 0 0 12px rgba(245, 166, 35, 0.9);
  transform: scale(1.05);
  animation: pulse 2s infinite ease-in-out;
}

button:disabled {
  background-color: #b9a757;
  cursor: not-allowed;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 12px rgba(245, 166, 35, 0.9);
  }
  50% {
    box-shadow: 0 0 20px rgba(245, 166, 35, 0.5);
  }
}

/* Status Message */
.status-message {
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  user-select: none;
}

.status-message.success {
  color: #a8d5a8;
}

.status-message.error {
  color: #d57a7a;
}

/* Social Links */
.social-links {
  margin-top: 3rem;
  text-align: center;
  user-select: none;
}

.social-links h2 {
  font-family: 'Raleway', sans-serif;
  color: #f5a623;
  margin-bottom: 1rem;
}

.social-links ul {
  list-style: none;
  padding: 0;
  display: inline-flex;
  gap: 2rem;
}

.social-links a {
  color: #cfd8dc;
  font-weight: 600;
  position: relative;
  padding-left: 24px;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Social icons before links (replace URLs with your icons or base64) */
.social-links a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}

.social-links a[href*='github']::before {
  background-image: url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg');
}

.social-links a[href*='linkedin']::before {
  background-image: url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg');
}

.social-links a[href*='twitter']::before {
  background-image: url('https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg');
}

.social-links a:hover {
  color: #f5a623;
  text-decoration: underline;
  transform: scale(1.1);
}
</style>
