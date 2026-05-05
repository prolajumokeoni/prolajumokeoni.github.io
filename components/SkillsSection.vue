<template>
  <section id="skills" class="bg-navy-800 py-24 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <p class="section-tag mb-4">
        <span class="text-accent-blue">/</span> Skills
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-12 max-w-sm">
        Technologies I Work With
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="category in skills" :key="category.title" class="space-y-4">
          <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">{{ category.title }}</h3>
          <div class="space-y-3">
            <div v-for="skill in category.items" :key="skill.name">
              <div class="flex justify-between text-sm mb-1.5">
                <span class="text-gray-300">{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  class="h-full bg-accent-blue rounded-full transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'Vue.js / Nuxt.js', level: 95 },
      { name: 'React.js / Next.js', level: 82 },
      { name: 'JavaScript (ES6+)', level: 93 },
      { name: 'TypeScript', level: 88 }
    ]
  },
  {
    title: 'Styling & Architecture',
    items: [
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Component Architecture', level: 90 },
      { name: 'Responsive Design', level: 93 }
    ]
  },
  {
    title: 'Tools & State',
    items: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 78 },
      { name: 'Pinia / Vuex / Redux', level: 88 },
      { name: 'REST APIs / Playwright', level: 85 }
    ]
  }
]
</script>
