<template>
  <nav class="navbar">
    <div class="nav-left">
      <span class="logo">
        Caitlin<span class="logo-highlight">.dev</span>
      </span>
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
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: 1.6px;
  color: #f0f0f0;
  user-select: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.logo-highlight {
  font-style: italic;
  background: linear-gradient(
    135deg,
    #f5a623 25%,
    #fffacd 40%,
    #f5a623 55%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer-badge 3s linear infinite;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

@keyframes shimmer-badge {
  0% {
    background-position: 200% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
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
  color: #cfd8dc;
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
  box-shadow: 0 0 6px 2px rgba(245, 166, 35, 0.4);
}

.router-link-exact-active {
  color: #f5a623;
  border-bottom: 2px solid #f5a623;
}
</style>
