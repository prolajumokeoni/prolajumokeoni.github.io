<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
    <div class="w-full max-w-7xl mx-auto px-8 lg:px-16 py-5 grid grid-cols-3 items-center">
      <!-- Left: empty -->
      <div></div>

      <!-- Center: Nav links -->
      <div class="hidden md:flex items-center justify-center gap-8">
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#portfolio" class="nav-link">Projects</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>

      <!-- Right: Theme toggle + Hamburger -->
      <div class="flex items-center justify-end gap-3">
        <!-- Theme toggle -->
      <button
        class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        <!-- Sun (shown in dark mode) -->
        <svg v-if="isDark" class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
        <!-- Moon (shown in light mode) -->
        <svg v-else class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      </button>

      <!-- Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span class="hamburger-bar block w-6 h-0.5 transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
        <span class="hamburger-bar block w-6 h-0.5 transition-all" :class="menuOpen ? 'opacity-0' : ''" />
        <span class="hamburger-bar block w-6 h-0.5 transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
      </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <Transition name="slide-down">
    <div v-if="menuOpen" class="fixed top-[72px] left-0 right-0 z-40 bg-navy-800 border-b border-white/10 py-4 flex flex-col md:hidden">
      <a href="#about" class="nav-link text-base px-8 py-3 w-full border-b border-white/5" @click="menuOpen = false">About</a>
      <a href="#skills" class="nav-link text-base px-8 py-3 w-full border-b border-white/5" @click="menuOpen = false">Skills</a>
      <a href="#portfolio" class="nav-link text-base px-8 py-3 w-full border-b border-white/5" @click="menuOpen = false">Projects</a>
      <a href="#experience" class="nav-link text-base px-8 py-3 w-full border-b border-white/5" @click="menuOpen = false">Experience</a>
      <a href="#contact" class="nav-link text-base px-8 py-3 w-full" @click="menuOpen = false">Contact</a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const isDark = ref(true)

onMounted(() => {
  // Read the class already set by app.vue's inline script, don't re-evaluate
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hamburger-bar {
  background-color: var(--color-text);
}
</style>
