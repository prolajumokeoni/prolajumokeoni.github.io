<template>
  <footer class="bg-navy-900 border-t border-white/10 py-10 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <NuxtLink to="/" class="flex items-center gap-2 text-white font-semibold">
        <span class="text-accent-blue font-bold">&lt;/&gt;</span>
        <span>Oni Priscilla</span>
      </NuxtLink>

      <p class="text-xs text-gray-500">
        &copy; {{ new Date().getFullYear() }} Oni Olajumoke Priscilla
      </p>

      <div class="flex items-center gap-5">
        <a href="https://github.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-white transition-colors text-xs">GitHub</a>
        <a href="https://www.linkedin.com/in/prolajumokeoni/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-white transition-colors text-xs">LinkedIn</a>
        <a href="#" class="text-gray-500 hover:text-white transition-colors text-xs">Twitter</a>
      </div>
    </div>
  </footer>
</template>
