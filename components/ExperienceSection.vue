<template>
  <section id="experience" ref="sectionRef" class="bg-navy-800 py-24 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <p class="section-tag mb-4">
        <span class="text-accent-blue">/</span> Experience
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-16 max-w-sm text-gray-900 dark:text-white">
        Work History & Education
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <!-- Work Experience -->
        <div>
          <h3 class="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-8">Work Experience</h3>
          <div class="relative space-y-10">
            <!-- Track -->
            <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10">
              <div class="absolute inset-0 bg-accent-blue origin-top" :style="{ transform: `scaleY(${lineProgress})` }" />
            </div>
            <div v-for="job in experience" :key="job.company" class="relative pl-8">
              <span class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-blue bg-white dark:bg-navy-800" />
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                <h4 class="text-gray-900 dark:text-white font-semibold text-sm">{{ job.role }}</h4>
                <span class="text-xs text-gray-500 shrink-0">{{ job.period }}</span>
              </div>
              <p class="text-accent-blue text-xs font-medium mb-2">{{ job.company }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
          <h3 class="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-8">Education</h3>
          <div class="relative space-y-10">
            <!-- Track -->
            <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10">
              <div class="absolute inset-0 bg-accent-blue origin-top" :style="{ transform: `scaleY(${lineProgress})` }" />
            </div>
            <div v-for="edu in education" :key="edu.institution" class="relative pl-8">
              <span class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-blue bg-white dark:bg-navy-800" />
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                <h4 class="text-gray-900 dark:text-white font-semibold text-sm">{{ edu.degree }}</h4>
                <span class="text-xs text-gray-500 shrink-0">{{ edu.period }}</span>
              </div>
              <p class="text-accent-blue text-xs font-medium mb-2">{{ edu.institution }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const lineProgress = ref(0)

function onScroll() {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const vh = window.innerHeight
  const progress = (vh - rect.top) / (rect.height + vh)
  lineProgress.value = Math.min(1, Math.max(0, progress))
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Termii Inc. · Lagos, Nigeria (Hybrid)',
    period: 'Sep 2023 – Present',
    description: 'Architected and launched the Sotel Partners Dashboard, enabling bulk eSIM purchases, real-time tracking, and commission management. Built mission-critical features serving 6M+ monthly active users across 140+ countries. Engineered pixel-perfect Vue.js/Nuxt.js UIs and complex wallet/billing flows with Paystack and Stripe integrations.'
  },
  {
    role: 'Frontend Developer',
    company: 'Nash Renewables · Hamburg, Germany (Remote, Contract)',
    period: 'Jun 2022 – Aug 2022',
    description: 'Developed a secure and user-friendly authentication interface, improving login efficiency and user access management. Optimized mobile responsiveness across various devices. Built scalable and maintainable applications using React.js, Next.js, Mantine, and Nest.js. Designed and built intuitive user interfaces, enhancing user experience and engagement.'
  },
  {
    role: 'Frontend Engineer',
    company: 'Microverse · Remote',
    period: '2021 – 2023',
    description: 'Completed 1,500+ hours of intensive software engineering curriculum focused on React.js, collaborative coding, and pair programming with developers globally. Delivered multiple client web applications end-to-end and maintained a 98%+ code review pass rate through disciplined testing and clean code practices.'
  }
]

const education = [
  {
    degree: 'BSc Estate Management',
    institution: 'Kaduna State University',
    period: '2013 – 2019',
    description: ''
  },
  {
    degree: 'Software Development Certificate',
    institution: 'Microverse School',
    period: '2021',
    description: 'Intensive full-stack curriculum covering React.js, modern JavaScript, algorithms, and collaborative engineering practices.'
  },
  {
    degree: 'English Language C1 Advanced',
    institution: '',
    period: '',
    description: ''
  }
]
</script>
