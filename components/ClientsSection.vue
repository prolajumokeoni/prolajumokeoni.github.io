<template>
  <section class="bg-navy-900 py-14 px-10 lg:px-16 border-t border-gray-200 dark:border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col items-center gap-8">
        <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
          Companies I've Worked With
        </p>
        <div class="flex flex-wrap items-center justify-center gap-10">
          <div v-for="company in companies" :key="company.name" class="transition-all duration-200">
            <img
              :src="company.logo"
              :alt="company.name"
              :class="company.large ? 'h-14' : 'h-8'"
              class="object-contain grayscale opacity-50 hover:opacity-90 hover:grayscale-0 transition-all duration-300 dark:brightness-0 dark:invert dark:opacity-40 dark:hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  { name: 'Termii', logo: '/termii.svg' },
  { name: 'WonderWoman Nigeria', logo: '/wonderwoman.webp', large: true },
  { name: 'Microverse', logo: '/microverse.png' },
  { name: 'Nash', logo: '/nash.svg' }
]
</script>
