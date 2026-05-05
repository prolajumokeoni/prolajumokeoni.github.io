<template>
  <section id="portfolio" class="bg-navy-900 py-24 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <p class="section-tag mb-4">
        <span class="text-accent-blue">/</span> Portfolio
      </p>
      <div class="flex items-end justify-between mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold leading-tight max-w-sm">
          Selected Work & Projects
        </h2>
        <NuxtLink
          to="#"
          class="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
        >
          View all
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-lg bg-navy-700 border border-white/5 hover:border-white/20 transition-all duration-300"
        >
          <!-- Image placeholder -->
          <div class="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
          <div class="p-5">
            <div class="flex flex-wrap gap-1.5 mb-3">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 bg-white/5 rounded text-gray-400"
              >{{ tag }}</span>
            </div>
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="text-white font-semibold group-hover:text-accent-blue transition-colors">{{ project.title }}</h3>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink-0 text-gray-500 hover:text-accent-blue transition-colors"
                aria-label="Visit project"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p class="text-gray-400 text-xs leading-relaxed">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Sotel Partners Dashboard',
    tags: ['Vue.js', 'Nuxt.js', 'Pinia', 'Tailwind'],
    description: 'Partner management portal with eSIM bulk purchasing, commission tracking, real-time analytics, and secure wallet/billing flows. Built at Termii Inc.',
    url: 'https://partners.sotel.com/register'
  },
  {
    title: 'WonderWoman Nigeria',
    tags: ['Vue.js', 'Nuxt.js', 'Tailwind', 'TypeScript'],
    description: 'Community platform celebrating Nigerian women in leadership and entrepreneurship, fully responsive, content-rich web experience.',
    url: 'https://wonderwomannigeria.org'
  },
  {
    title: 'Termii Communications Platform',
    tags: ['Vue.js', 'Nuxt.js', 'REST APIs', 'Paystack'],
    description: 'Mission-critical features across Termii\'s global messaging platform: wallet flows, billing, and real-time dashboards serving 6M+ monthly active users in 140+ countries.',
    url: ''
  }
]
</script>
