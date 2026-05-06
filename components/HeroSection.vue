<template>
  <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-[72px]">

    <!-- Background decorative elements -->
    <div class="absolute top-1/4 left-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-2xl pointer-events-none" />

    <div class="w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">

      <!-- Left: Text -->
      <div class="flex-1 flex flex-col items-start">
        <span class="inline-flex items-center gap-2 text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-6 mt-8 lg:mt-0">
          {{ displayTitle }}<span class="cursor" />
        </span>

        <h1 class="text-5xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900 dark:text-white mb-6">
          <span class="block">Oni</span>
          <span class="block text-accent-blue">Olajumoke</span>
          <span class="block">Priscilla</span>
        </h1>

        <p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-sm mb-10">
          Results-driven Frontend Engineer specialising in Vue.js and React.js ecosystems. I transform complex product requirements into elegant, responsive UIs that delight users, proven across fintech and telecoms platforms serving millions globally.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col gap-3 mb-12">
          <!-- Row 1 -->
          <div class="flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              class="px-6 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="/PriscillaResume.pdf"
              download="PriscillaResume.pdf"
              class="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 hover:border-gray-600 dark:hover:border-white/50 text-gray-900 dark:text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
          <!-- Row 2 -->
          <div class="flex flex-wrap items-center gap-3">
            <button
              data-cal-link="priscilla-olajumoke-oni-myhwqz/secret"
              data-cal-namespace="secret"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              class="px-6 py-3 border border-accent-blue/40 hover:border-accent-blue text-accent-blue text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Book a Free Consultation
            </button>
            <a
              href="#contact"
              class="px-6 py-3 border border-gray-300 dark:border-white/20 hover:border-gray-600 dark:hover:border-white/50 text-gray-900 dark:text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- Social links -->
        <div class="flex items-center gap-5">
          <a href="https://github.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/prolajumokeoni/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://x.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="X (Twitter)">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="relative flex-shrink-0">
        <div class="absolute -inset-3 rounded-full border border-accent-blue/20" />
        <div class="absolute -inset-6 rounded-full border border-gray-200 dark:border-white/5" />

        <div class="w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 relative z-10">
          <img
            src="/hero-placeholder.png"
            alt="Oni Olajumoke Priscilla"
            class="w-full h-full object-cover object-top"
          />
        </div>

        <!-- Floating badge -->
        <div class="absolute -bottom-4 -right-4 lg:-right-8 z-20 bg-navy-800 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span class="text-gray-900 dark:text-white text-xs font-semibold">Available for work</span>
        </div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <button
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
      @click="scrollToAbout"
      aria-label="Scroll down"
    >
      <span class="text-xs tracking-widest uppercase">Scroll</span>
      <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

  </section>
</template>

<script setup lang="ts">
const titles = ['Frontend Engineer', 'Vue.js Developer', 'React.js Developer', 'Frontend Expert', 'UI/UX Enthusiast']
let titleIndex = 0
const charIndex = ref(0)

const displayTitle = computed(() => titles[titleIndex].slice(0, charIndex.value))

function runLoop() {
  const current = titles[titleIndex]
  // Type forward
  const typeInterval = setInterval(() => {
    if (charIndex.value < current.length) {
      charIndex.value++
    } else {
      clearInterval(typeInterval)
      // Pause at end, then erase
      setTimeout(() => {
        const eraseInterval = setInterval(() => {
          if (charIndex.value > 0) {
            charIndex.value--
          } else {
            clearInterval(eraseInterval)
            titleIndex = (titleIndex + 1) % titles.length
            // Pause before typing next title
            setTimeout(runLoop, 400)
          }
        }, 60)
      }, 1800)
    }
  }, 120)
}

onMounted(() => {
  setTimeout(runLoop, 500)
})

function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 3px;
  height: 0.85em;
  background: currentColor;
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 0.75s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
