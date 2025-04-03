<template>
  <div class="d-flex flex-column min-vh-100">
    <NuxtLink to="/" class="navbar-brand d-flex"/>
      <NuxtImg src="/sabes.png" alt="Logo" width="150" height="50" class="me-2" />
    <header class="bg-primary text-white py-3 shadow">
      <nav class="container d-flex justify-content-center gap-3">
        <NuxtLink to="/" class="text-white text-decoration-none fw-bold">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white text-decoration-none fw-bold">Gestión de servicios e inmobiliario</NuxtLink>
        <NuxtLink to="/sabes" class="text-white text-decoration-none fw-bold">Sabes</NuxtLink>
      </nav>
    </header>
    <main class="flex-grow-1 container my-4">
      <NuxtPage />
    </main>
    <footer class="bg-dark text-white text-center py-3 mt-4">
      <p class="mb-0">Página de prueba para Nuxt y Vue.js</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
