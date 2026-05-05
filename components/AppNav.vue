<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-navy-900/95 backdrop-blur-sm border-b border-white/5">
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-2 text-white font-semibold text-lg">
      <span class="text-accent-blue font-bold">&lt;/&gt;</span>
      <span>Oni Priscilla</span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#portfolio" class="nav-link">Projects</a>
      <a href="#experience" class="nav-link">Experience</a>
      <a href="#contact" class="nav-link">Contact</a>
    </div>

    <!-- Hamburger -->
    <button
      class="md:hidden flex flex-col gap-1.5 p-1"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle menu"
    >
      <span class="block w-6 h-0.5 bg-white transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
      <span class="block w-6 h-0.5 bg-white transition-all" :class="menuOpen ? 'opacity-0' : ''" />
      <span class="block w-6 h-0.5 bg-white transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
    </button>
  </nav>

  <!-- Mobile Menu -->
  <Transition name="slide-down">
    <div v-if="menuOpen" class="fixed top-[72px] left-0 right-0 z-40 bg-navy-800 border-b border-white/10 px-8 py-6 flex flex-col gap-4 md:hidden">
      <a href="#" class="nav-link text-base" @click="menuOpen = false">Home</a>
      <a href="#about" class="nav-link text-base" @click="menuOpen = false">About</a>
      <a href="#skills" class="nav-link text-base" @click="menuOpen = false">Skills</a>
      <a href="#portfolio" class="nav-link text-base" @click="menuOpen = false">Projects</a>
      <a href="#experience" class="nav-link text-base" @click="menuOpen = false">Experience</a>
      <a href="#contact" class="nav-link text-base" @click="menuOpen = false">Contact</a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
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
</style>
