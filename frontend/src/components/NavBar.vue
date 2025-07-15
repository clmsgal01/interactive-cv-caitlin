<template>
  <nav class="navbar">
    <div class="nav-left">
      <span class="logo">Caitlin<span class="logo-highlight">.dev</span></span>
    </div>
    <ul class="nav-links">
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/chatbot">Chatbot</router-link></li>
      <li><router-link to="/cv">CV</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: #1e2633;
  border-bottom: 3px solid #c43e1a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}


.logo {
  font-weight: 700;
  font-size: 1.75rem;
  color: #f0f0f0;
  letter-spacing: 1.5px;
  user-select: none;
}

.logo-highlight {
  color: #f5a623; /* golden accent */
  font-style: italic;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;
  color: #cfd8dc; /* light gray-blue */
  font-weight: 600;
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.25s ease, border-color 0.25s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #f5a623;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-links a:hover {
  color: #f5a623;
}

.nav-links a:hover::after {
  width: 100%;
}

.router-link-exact-active {
  color: #f5a623;
  border-bottom: 2px solid #f5a623;
}
</style>
