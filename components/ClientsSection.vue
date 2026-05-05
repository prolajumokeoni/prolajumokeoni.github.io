<template>
  <section class="bg-navy-900 py-14 px-10 lg:px-16 border-t border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-0">
        <p class="text-xs font-bold tracking-widest text-gray-500 uppercase whitespace-nowrap md:w-48 shrink-0">
          Previously Worked On
        </p>
        <div class="flex flex-wrap items-center justify-center md:justify-between flex-1 gap-8 md:gap-4">
          <div v-for="company in companies" :key="company.name" class="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-default">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" />
            </svg>
            <span class="text-sm font-medium">{{ company.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  { name: 'company' },
  { name: 'venture' },
  { name: 'studio' },
  { name: 'business' }
]
</script>
