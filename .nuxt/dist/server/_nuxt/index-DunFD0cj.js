import { _ as __nuxt_component_0$1 } from "./nuxt-link-De2Madnv.js";
import { defineComponent, ref, withCtx, createVNode, unref, useSSRContext, mergeProps, createTextVNode, openBlock, createBlock, reactive } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "@emailjs/browser";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/ufo/dist/index.mjs";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/defu/dist/defu.mjs";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/ofetch/dist/node.mjs";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/hookable/dist/index.mjs";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/unctx/dist/index.mjs";
import "/Users/oniolajumoke/portfolio2.0/prolajumokeoni.github.io/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    const isDark = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-navy-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none" data-v-0662e6f7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-semibold text-lg mr-8",
        style: { "color": "var(--color-text)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-accent-blue font-bold" data-v-0662e6f7${_scopeId}>&lt;/&gt;</span><span data-v-0662e6f7${_scopeId}>Oni Priscilla</span>`);
          } else {
            return [
              createVNode("span", { class: "text-accent-blue font-bold" }, "</>"),
              createVNode("span", null, "Oni Priscilla")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center justify-between flex-1 mr-6" data-v-0662e6f7><a href="#" class="nav-link" data-v-0662e6f7>Home</a><a href="#about" class="nav-link" data-v-0662e6f7>About</a><a href="#skills" class="nav-link" data-v-0662e6f7>Skills</a><a href="#portfolio" class="nav-link" data-v-0662e6f7>Projects</a><a href="#experience" class="nav-link" data-v-0662e6f7>Experience</a><a href="#contact" class="nav-link" data-v-0662e6f7>Contact</a></div><div class="flex items-center gap-3" data-v-0662e6f7><button class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"${ssrRenderAttr("aria-label", unref(isDark) ? "Switch to light mode" : "Switch to dark mode")} data-v-0662e6f7>`);
      if (unref(isDark)) {
        _push(`<svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0662e6f7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" data-v-0662e6f7></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0662e6f7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-v-0662e6f7></path></svg>`);
      }
      _push(`</button><button class="md:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu" data-v-0662e6f7><span class="${ssrRenderClass([unref(menuOpen) ? "rotate-45 translate-y-2" : "", "hamburger-bar block w-6 h-0.5 transition-all"])}" data-v-0662e6f7></span><span class="${ssrRenderClass([unref(menuOpen) ? "opacity-0" : "", "hamburger-bar block w-6 h-0.5 transition-all"])}" data-v-0662e6f7></span><span class="${ssrRenderClass([unref(menuOpen) ? "-rotate-45 -translate-y-2" : "", "hamburger-bar block w-6 h-0.5 transition-all"])}" data-v-0662e6f7></span></button></div></nav>`);
      if (unref(menuOpen)) {
        _push(`<div class="fixed top-[72px] left-0 right-0 z-40 bg-navy-800 border-b border-white/10 px-8 py-6 flex flex-col gap-4 md:hidden" data-v-0662e6f7><a href="#" class="nav-link text-base" data-v-0662e6f7>Home</a><a href="#about" class="nav-link text-base" data-v-0662e6f7>About</a><a href="#skills" class="nav-link text-base" data-v-0662e6f7>Skills</a><a href="#portfolio" class="nav-link text-base" data-v-0662e6f7>Projects</a><a href="#experience" class="nav-link text-base" data-v-0662e6f7>Experience</a><a href="#contact" class="nav-link text-base" data-v-0662e6f7>Contact</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0662e6f7"]]);
const _imports_0 = publicAssetsURL("/hero-placeholder.png");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-[72px]" }, _attrs))}><div class="absolute top-1/4 left-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"></div><div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-2xl pointer-events-none"></div><div class="w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16"><div class="flex-1 flex flex-col items-start"><span class="inline-flex items-center gap-2 text-accent-blue text-xs font-bold tracking-[0.2em] uppercase mb-6"><span class="w-8 h-px bg-accent-blue"></span> Frontend Engineer </span><h1 class="text-5xl lg:text-7xl font-extrabold leading-[1.05] text-gray-900 dark:text-white mb-6"> Oni<br><span class="text-accent-blue">Olajumoke</span><br> Priscilla </h1><p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-sm mb-10"> Results-driven Frontend Engineer specialising in Vue.js and React.js ecosystems. I transform complex product requirements into elegant, responsive UIs that delight users — proven across fintech and telecoms platforms serving millions globally. </p><div class="flex flex-wrap items-center gap-4 mb-12"><a href="#portfolio" class="px-6 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-semibold rounded-full transition-colors duration-200"> View My Work </a><a href="#contact" class="px-6 py-3 border border-gray-300 dark:border-white/20 hover:border-gray-600 dark:hover:border-white/50 text-gray-900 dark:text-white text-sm font-semibold rounded-full transition-colors duration-200"> Contact Me </a><button data-cal-link="priscilla-olajumoke-oni-myhwqz/secret" data-cal-namespace="secret" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;,&quot;useSlotsViewOnSmallScreen&quot;:&quot;true&quot;}" class="px-6 py-3 border border-accent-blue/40 hover:border-accent-blue text-accent-blue text-sm font-semibold rounded-full transition-colors duration-200"> Book a Free Consultation </button></div><div class="flex items-center gap-5"><a href="https://github.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a><a href="https://www.linkedin.com/in/prolajumokeoni/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a><a href="https://x.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="X (Twitter)"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a></div></div><div class="relative flex-shrink-0"><div class="absolute -inset-3 rounded-full border border-accent-blue/20"></div><div class="absolute -inset-6 rounded-full border border-gray-200 dark:border-white/5"></div><div class="w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 relative z-10"><img${ssrRenderAttr("src", _imports_0)} alt="Oni Olajumoke Priscilla" class="w-full h-full object-cover object-top"></div><div class="absolute -bottom-4 -right-4 lg:-right-8 z-20 bg-navy-800 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span><span class="text-gray-900 dark:text-white text-xs font-semibold">Available for work</span></div></div></div><button class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Scroll down"><span class="text-xs tracking-widest uppercase">Scroll</span><svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "bg-navy-800 py-24 px-10 lg:px-16"
  }, _attrs))}><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><p class="section-tag mb-4"><span class="text-accent-blue">/</span> About Me </p><h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"> Crafting digital experiences with Vue.js &amp; React </h2><p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3"> I&#39;m Oni Olajumoke Priscilla, a Frontend Engineer with 4 years of experience crafting scalable, high-performance web applications. I specialise in Vue.js and React.js ecosystems, building products that serve millions of users globally. </p><p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8"> Currently at Termii Inc., I&#39;ve shipped mission-critical features across fintech and telecoms platforms — from pixel-perfect component UIs to complex billing and wallet flows. I care deeply about clean code, performance optimisation, and delivering polished products on time. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#portfolio",
    class: "inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-white/30 pb-0.5 hover:border-gray-700 dark:hover:border-white transition-colors duration-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` More about me <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
      } else {
        return [
          createTextVNode(" More about me "),
          (openBlock(), createBlock("svg", {
            class: "w-3 h-3",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><div class="grid grid-cols-2 gap-10 mb-10"><div><div class="flex gap-3 mb-2 items-center"><span class="stat-number">4</span><span class="text-sm text-gray-600 dark:text-gray-400 leading-tight">Years of<br>experience</span></div></div><div><div class="flex items-center gap-3 mb-2"><span class="stat-number">40+</span><span class="text-sm text-gray-600 dark:text-gray-400 leading-tight">Successful<br>projects</span></div></div></div><p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"> From pixel-perfect UIs to robust component architectures, I bring both design sensibility and engineering rigour to every project. Always learning, always shipping. </p></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const sectionRef = ref(null);
    const animated = ref(false);
    const skills = [
      {
        title: "Frontend",
        items: [
          { name: "Vue.js / Nuxt.js", level: 95 },
          { name: "React.js / Next.js", level: 82 },
          { name: "JavaScript (ES6+)", level: 93 },
          { name: "TypeScript", level: 88 }
        ]
      },
      {
        title: "Styling & Architecture",
        items: [
          { name: "Tailwind CSS", level: 92 },
          { name: "HTML5 / CSS3", level: 95 },
          { name: "Component Architecture", level: 90 },
          { name: "Responsive Design", level: 93 }
        ]
      },
      {
        title: "Tools & State",
        items: [
          { name: "Git / GitHub", level: 90 },
          { name: "Figma", level: 78 },
          { name: "Pinia / Vuex / Redux", level: 88 },
          { name: "REST APIs / Playwright", level: 85 }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "bg-navy-800 py-24 px-10 lg:px-16"
      }, _attrs))}><div class="max-w-6xl mx-auto"><p class="section-tag mb-4"><span class="text-accent-blue">/</span> Skills </p><h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-12 max-w-sm text-gray-900 dark:text-white"> Technologies I Work With </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(skills, (category) => {
        _push(`<div class="space-y-4"><h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5">${ssrInterpolate(category.title)}</h3><div class="space-y-3"><!--[-->`);
        ssrRenderList(category.items, (skill) => {
          _push(`<div><div class="flex justify-between text-sm mb-1.5"><span class="text-gray-700 dark:text-gray-300">${ssrInterpolate(skill.name)}</span><span class="text-gray-500">${ssrInterpolate(skill.level)}%</span></div><div class="h-0.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-accent-blue rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: unref(animated) ? skill.level + "%" : "0%" })}"></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioSection",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "Sotel Partners Dashboard",
        tags: ["Vue.js", "Nuxt.js", "Pinia", "Tailwind"],
        description: "Partner management portal with eSIM bulk purchasing, commission tracking, real-time analytics, and secure wallet/billing flows. Built at Termii Inc.",
        url: "https://partners.sotel.com/register"
      },
      {
        title: "WonderWoman Nigeria",
        tags: ["Vue.js", "Nuxt.js", "Tailwind", "TypeScript"],
        description: "Community platform celebrating Nigerian women in leadership and entrepreneurship, fully responsive, content-rich web experience.",
        url: "https://wonderwomannigeria.org"
      },
      {
        title: "Termii Communications Platform",
        tags: ["Vue.js", "Nuxt.js", "REST APIs", "Paystack"],
        description: "Mission-critical features across Termii's global messaging platform: wallet flows, billing, and real-time dashboards serving 6M+ monthly active users in 140+ countries.",
        url: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "portfolio",
        class: "bg-navy-900 py-24 px-10 lg:px-16"
      }, _attrs))}><div class="max-w-6xl mx-auto"><p class="section-tag mb-4"><span class="text-accent-blue">/</span> Portfolio </p><div class="flex items-end justify-between mb-12"><h2 class="text-3xl lg:text-4xl font-bold leading-tight max-w-sm text-gray-900 dark:text-white"> Selected Work &amp; Projects </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-white/30 pb-0.5 hover:border-gray-700 dark:hover:border-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View all "),
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="group relative overflow-hidden rounded-lg bg-navy-700 border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-white/20 transition-all duration-300"><div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-600 dark:to-navy-800 flex items-center justify-center"><div class="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center"><svg class="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div></div><div class="p-5"><div class="flex flex-wrap gap-1.5 mb-3"><!--[-->`);
        ssrRenderList(project.tags, (tag) => {
          _push(`<span class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded text-gray-600 dark:text-gray-400">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="flex items-start justify-between gap-2 mb-1"><h3 class="text-gray-900 dark:text-white font-semibold group-hover:text-accent-blue transition-colors">${ssrInterpolate(project.title)}</h3>`);
        if (project.url) {
          _push(`<a${ssrRenderAttr("href", project.url)} target="_blank" rel="noopener noreferrer" class="shrink-0 text-gray-500 hover:text-accent-blue transition-colors" aria-label="Visit project"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">${ssrInterpolate(project.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const experience = [
      {
        role: "Frontend Engineer",
        company: "Termii Inc. · Lagos, Nigeria (Hybrid)",
        period: "Sep 2023 – Present",
        description: "Architected and launched the Sotel Partners Dashboard — enabling bulk eSIM purchases, real-time tracking, and commission management. Built mission-critical features serving 6M+ monthly active users across 140+ countries. Engineered pixel-perfect Vue.js/Nuxt.js UIs and complex wallet/billing flows with Paystack and Stripe integrations."
      },
      {
        role: "Frontend Developer",
        company: "Nash Renewables · Hamburg, Germany (Remote, Contract)",
        period: "Jun 2022 – Aug 2022",
        description: "Developed a secure and user-friendly authentication interface, improving login efficiency and user access management. Optimized mobile responsiveness across various devices. Built scalable and maintainable applications using React.js, Next.js, Mantine, and Nest.js. Designed and built intuitive user interfaces, enhancing user experience and engagement."
      },
      {
        role: "Frontend Engineer",
        company: "Microverse · Remote",
        period: "2021 – 2023",
        description: "Completed 1,500+ hours of intensive software engineering curriculum focused on React.js, collaborative coding, and pair programming with developers globally. Delivered multiple client web applications end-to-end and maintained a 98%+ code review pass rate through disciplined testing and clean code practices."
      }
    ];
    const education = [
      {
        degree: "BSc Estate Management",
        institution: "Kaduna State University",
        period: "2013 – 2019",
        description: ""
      },
      {
        degree: "Software Development Certificate",
        institution: "Microverse School",
        period: "2021",
        description: "Intensive full-stack curriculum covering React.js, modern JavaScript, algorithms, and collaborative engineering practices."
      },
      {
        degree: "English Language — C1 Advanced",
        institution: "Cambridge Assessment",
        period: "",
        description: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "bg-navy-800 py-24 px-10 lg:px-16"
      }, _attrs))}><div class="max-w-6xl mx-auto"><p class="section-tag mb-4"><span class="text-accent-blue">/</span> Experience </p><h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-16 max-w-sm text-gray-900 dark:text-white"> Work History &amp; Education </h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"><div><h3 class="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-8">Work Experience</h3><div class="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-white/10"><!--[-->`);
      ssrRenderList(experience, (job) => {
        _push(`<div class="relative pl-8"><span class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-blue bg-white dark:bg-navy-800"></span><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5"><h4 class="text-gray-900 dark:text-white font-semibold text-sm">${ssrInterpolate(job.role)}</h4><span class="text-xs text-gray-500 shrink-0">${ssrInterpolate(job.period)}</span></div><p class="text-accent-blue text-xs font-medium mb-2">${ssrInterpolate(job.company)}</p><p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">${ssrInterpolate(job.description)}</p></div>`);
      });
      _push(`<!--]--></div></div><div><h3 class="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-8">Education</h3><div class="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-white/10"><!--[-->`);
      ssrRenderList(education, (edu) => {
        _push(`<div class="relative pl-8"><span class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-blue bg-white dark:bg-navy-800"></span><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5"><h4 class="text-gray-900 dark:text-white font-semibold text-sm">${ssrInterpolate(edu.degree)}</h4><span class="text-xs text-gray-500 shrink-0">${ssrInterpolate(edu.period)}</span></div><p class="text-accent-blue text-xs font-medium mb-2">${ssrInterpolate(edu.institution)}</p><p class="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">${ssrInterpolate(edu.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ClientsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      { name: "company" },
      { name: "venture" },
      { name: "studio" },
      { name: "business" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-navy-900 py-14 px-10 lg:px-16 border-t border-gray-200 dark:border-white/10" }, _attrs))}><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row items-center gap-10 md:gap-0"><p class="text-xs font-bold tracking-widest text-gray-500 uppercase whitespace-nowrap md:w-48 shrink-0"> Previously Worked On </p><div class="flex flex-wrap items-center justify-center md:justify-between flex-1 gap-8 md:gap-4"><!--[-->`);
      ssrRenderList(companies, (company) => {
        _push(`<div class="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 cursor-default"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4"></rect></svg><span class="text-sm font-medium">${ssrInterpolate(company.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClientsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({ name: "", email: "", subject: "", message: "" });
    const sending = ref(false);
    const sent = ref(false);
    const error = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "bg-navy-900 py-24 px-10 lg:px-16"
      }, _attrs))}><div class="max-w-6xl mx-auto"><p class="section-tag mb-4"><span class="text-accent-blue">/</span> Contact </p><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"> Let&#39;s Work Together </h2><p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-10"> Have a project in mind or just want to say hello? I&#39;m always open to discussing new opportunities, freelance work, or collaborations. </p><div class="space-y-5 mb-10"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="text-xs text-gray-500 mb-0.5">Email</p><a href="mailto:prolajumokeoni@gmail.com" class="text-sm text-gray-900 dark:text-white hover:text-accent-blue transition-colors">prolajumokeoni@gmail.com</a></div></div><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-accent-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></div><div><p class="text-xs text-gray-500 mb-0.5">LinkedIn</p><a href="https://www.linkedin.com/in/prolajumokeoni/" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-900 dark:text-white hover:text-accent-blue transition-colors">linkedin.com/in/prolajumokeoni</a></div></div><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0"><svg class="w-4 h-4 text-accent-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></div><div><p class="text-xs text-gray-500 mb-0.5">GitHub</p><a href="https://github.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-900 dark:text-white hover:text-accent-blue transition-colors">github.com/prolajumokeoni</a></div></div></div><div class="border border-accent-blue/20 rounded-xl p-6 bg-accent-blue/5"><p class="text-xs text-accent-blue font-semibold uppercase tracking-widest mb-2">Free Consultation</p><h3 class="text-gray-900 dark:text-white font-bold text-lg mb-2">Book a 30-min call</h3><p class="text-gray-600 dark:text-gray-400 text-sm mb-5">Let&#39;s talk about your project, goals, or how I can help. Pick a time that works for you.</p><button data-cal-link="priscilla-olajumoke-oni-myhwqz/secret" data-cal-namespace="secret" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;,&quot;useSlotsViewOnSmallScreen&quot;:&quot;true&quot;}" class="w-full bg-accent-blue hover:bg-accent-blue-hover text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Book a Free Consultation </button></div></div><form class="space-y-5"><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label class="block text-xs text-gray-600 dark:text-gray-400 mb-2">Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Your name" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"></div><div><label class="block text-xs text-gray-600 dark:text-gray-400 mb-2">Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="your@email.com" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"></div></div><div><label class="block text-xs text-gray-600 dark:text-gray-400 mb-2">Subject</label><input${ssrRenderAttr("value", unref(form).subject)} type="text" placeholder="What&#39;s this about?" required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"></div><div><label class="block text-xs text-gray-600 dark:text-gray-400 mb-2">Message</label><textarea rows="5" placeholder="Tell me about your project..." required class="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors resize-none">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(unref(sending)) ? " disabled" : ""} class="w-full bg-accent-blue hover:bg-accent-blue-hover disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"><span>${ssrInterpolate(unref(sending) ? "Sending..." : "Send Message")}</span>`);
      if (!unref(sending)) {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (unref(sent)) {
        _push(`<p class="text-xs text-green-400 text-center">Message sent! I&#39;ll get back to you soon.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<p class="text-xs text-red-400 text-center">Something went wrong. Please try again or email me directly.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-navy-900 border-t border-gray-200 dark:border-white/10 py-10 px-10 lg:px-16" }, _attrs))}><div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2 text-gray-900 dark:text-white font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-accent-blue font-bold"${_scopeId}>&lt;/&gt;</span><span${_scopeId}>Oni Priscilla</span>`);
      } else {
        return [
          createVNode("span", { class: "text-accent-blue font-bold" }, "</>"),
          createVNode("span", null, "Oni Priscilla")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-xs text-gray-500"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Oni Olajumoke Priscilla </p><div class="flex items-center gap-5"><a href="https://github.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">GitHub</a><a href="https://www.linkedin.com/in/prolajumokeoni/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">LinkedIn</a><a href="https://x.com/prolajumokeoni" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">X</a></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNav = __nuxt_component_0;
  const _component_HeroSection = _sfc_main$8;
  const _component_AboutSection = __nuxt_component_2;
  const _component_SkillsSection = _sfc_main$6;
  const _component_PortfolioSection = _sfc_main$5;
  const _component_ExperienceSection = _sfc_main$4;
  const _component_ClientsSection = _sfc_main$3;
  const _component_ContactSection = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_8;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
  _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ClientsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DunFD0cj.js.map
