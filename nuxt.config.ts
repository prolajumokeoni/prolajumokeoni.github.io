export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/tailwindcss', { cssPath: '~/assets/css/main.css' }]
  ],
  app: {
    head: {
      title: 'Oni Olajumoke Priscilla — Frontend Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Oni Olajumoke Priscilla — Frontend Engineer specialising in Vue.js, Nuxt 3, and TypeScript.' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap'
        }
      ],
      script: [
        {
          innerHTML: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)||t===null){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}})()`,
          type: 'text/javascript'
        },
        {
          innerHTML: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");Cal("init", "secret", {origin:"https://app.cal.com"});Cal.ns.secret("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`,
          type: 'text/javascript'
        }
      ]
    }
  }
})
