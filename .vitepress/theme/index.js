// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import AudioPlayer from "./components/AudioPlayer.vue"
import { useRouter } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData } from 'vitepress'  // 保留这个导入，其他地方需要用到 useData
import backtotop from "./components/backtotop.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('AudioPlayer', AudioPlayer)
  },

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(backtotop), // 使用 doc-footer-before 插槽
    });
  },

  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    const router = useRouter()
    router.onAfterRouteChange = (to) => {
      const activeLink = document.querySelector('.vp-sidebar .active')
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    // giscus配置
    giscusTalk({
      repo: 'jinlijinlijinli/RaidenShogunTextCollection', //仓库
      repoId: 'R_kgDONm5-8g', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONm5-8s4Clzwo', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },

  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // }
}
