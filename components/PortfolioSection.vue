<template>
  <section id="portfolio" class="bg-navy-900 py-24 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <p class="section-tag mb-4">
        <span class="text-accent-blue">/</span> Portfolio
      </p>
      <div class="flex items-end justify-between mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold leading-tight max-w-sm text-gray-900 dark:text-white">
          Selected Work & Projects
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-lg bg-navy-700 border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-white/20 transition-all duration-300"
        >
          <!-- Project image -->
          <div class="aspect-video overflow-hidden bg-navy-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-5">
            <div class="flex flex-wrap gap-1.5 mb-3">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded text-gray-600 dark:text-gray-400"
              >{{ tag }}</span>
            </div>
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="text-gray-900 dark:text-white font-semibold group-hover:text-accent-blue transition-colors">{{ project.title }}</h3>
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
            <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{{ project.description }}</p>
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
    url: 'https://partners.sotel.com/register',
    image: '/partnersdashboard.png'
  },
  {
    title: 'WonderWoman Nigeria',
    tags: ['Vue.js', 'Nuxt.js', 'Tailwind', 'TypeScript'],
    description: 'Community platform celebrating Nigerian women in leadership and entrepreneurship, fully responsive, content-rich web experience.',
    url: 'https://wonderwomannigeria.org',
    image: '/wonderwoman.png'
  },
  {
    title: 'Termii Conferences Platform',
    tags: ['Vue.js', 'Nuxt.js', 'REST APIs', 'Paystack'],
    description: 'Designed and developed Termii\'s flagship conferences pages, delivering a clean, responsive event experience that showcases the brand to a global audience.',
    url: 'https://conferences.termii.com/',
    image: '/termii.png'
  }
]
</script>
