<template>
  <section id="about" class="bg-navy-800 py-24 px-10 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Text -->
        <div>
          <p class="section-tag mb-4">
            <span class="text-accent-blue">/</span> About Me
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Crafting digital experiences with Vue.js & React
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-3">
            I'm Oni Olajumoke Priscilla, a Frontend Engineer with 4 years of experience crafting scalable, high-performance web applications. I specialise in Vue.js and React.js ecosystems, building products that serve millions of users globally.
          </p>
          <p class="text-gray-400 text-sm leading-relaxed mb-8">
            Currently at Termii Inc., I've shipped mission-critical features across fintech and telecoms platforms — from pixel-perfect component UIs to complex billing and wallet flows. I care deeply about clean code, performance optimisation, and delivering polished products on time.
          </p>
          <NuxtLink
            to="#portfolio"
            class="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
          >
            More about me
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Right: Stats -->
        <div>
          <div class="grid grid-cols-2 gap-10 mb-10">
            <div>
              <div class="flex items-baseline gap-3 mb-2">
                <span class="stat-number">4</span>
                <span class="text-sm text-gray-400 leading-tight">Years of<br />experience</span>
              </div>
            </div>
            <div>
              <div class="flex items-baseline gap-3 mb-2">
                <span class="stat-number">40+</span>
                <span class="text-sm text-gray-400 leading-tight">Successful<br />projects</span>
              </div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            From pixel-perfect UIs to robust component architectures, I bring both design sensibility and engineering rigour to every project. Always learning, always shipping.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
