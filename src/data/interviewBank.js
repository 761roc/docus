import {megaExtraQuestionsBySlug} from './interviewBankExpansion.js';
import {repoExtraQuestionsBySlug, repoInterviewCategories} from './repoInterviewBank.js';

export const levelMeta = {
  junior: {label: '初级', description: '偏基础概念、常见 API 与标准用法'},
  mid: {label: '中级', description: '偏实际业务拆解、边界处理与协作经验'},
  senior: {label: '高级', description: '偏架构权衡、性能治理与系统性判断'},
};

const baseInterviewCategories = [
  {
    slug: 'html-browser',
    title: 'HTML 与浏览器',
    eyebrow: 'HTML / Browser',
    description:
      '这一类主要覆盖语义化、表单、浏览器渲染基础和 DOM 交互，是所有框架题的底座。',
    summary: '语义化、表单、DOM、渲染基础',
    stats: [
      {label: '侧重点', value: '语义化 / 表单 / DOM'},
      {label: '常见追问', value: '重排 / 渲染树 / SSR 语义'},
    ],
    focusAreas: ['语义化标签', '表单能力', '浏览器解析流程'],
    questions: [
      {
        level: 'junior',
        title: '什么时候应该优先使用语义化标签，而不是 div？',
        focus: '是否理解语义化对可访问性、SEO 和可维护性的影响。',
        answer:
          '当内容本身具备明确结构和角色时，应优先使用语义化标签，例如 header、main、article、section、button、nav。这样不仅更利于屏幕阅读器和搜索引擎理解页面，也能减少后续通过 ARIA 补语义的成本。',
        language: 'html',
        tags: ['语义化', 'SEO'],
        code: `<article>\n  <header>\n    <h1>前端周报</h1>\n    <p>发布于 2026-03-11</p>\n  </header>\n  <section>\n    <h2>本周重点</h2>\n    <p>总结项目里的性能问题与修复方案。</p>\n  </section>\n</article>`,
      },
      {
        level: 'mid',
        title: '原生表单能力有哪些常被低估的点？',
        focus: '是否知道浏览器原生校验、label 关联、提交语义与可访问性能力。',
        answer:
          '很多场景不需要先写一层 JavaScript 校验。required、type、pattern、label/for、fieldset/legend、button[type=submit] 和浏览器的约束校验已经能覆盖一大类业务表单。正确使用原生能力，通常比纯脚本拼装更稳、更无障碍。',
        language: 'html',
        tags: ['表单', '无障碍'],
        code: `<form>\n  <label for="email">邮箱</label>\n  <input id="email" name="email" type="email" required />\n\n  <label for="age">年龄</label>\n  <input id="age" name="age" type="number" min="18" max="60" />\n\n  <button type="submit">提交</button>\n</form>`,
      },
      {
        level: 'senior',
        title: '浏览器从 HTML 到首屏可见，大致经历了哪些步骤？',
        focus: '是否能用工程语言解释解析、样式计算、布局、绘制与合成。',
        answer:
          '浏览器会先解析 HTML 构建 DOM，解析 CSS 构建 CSSOM，然后合并为渲染树，接着做布局计算、绘制与图层合成。JavaScript 若阻塞解析或频繁触发布局读取，会直接影响首屏和交互体验。',
        language: 'js',
        tags: ['浏览器渲染', '首屏'],
        code: `requestAnimationFrame(() => {\n  // 在浏览器完成一次布局与绘制前后安排视觉更新。\n  document.documentElement.classList.add('ready');\n});`,
      },
    ],
  },
  {
    slug: 'css',
    title: 'CSS',
    eyebrow: 'CSS',
    description:
      '考察布局体系、响应式、层叠规则与渲染性能，尤其适合区分“会写样式”和“理解样式系统”的候选人。',
    summary: '布局、响应式、BFC、渲染性能',
    stats: [
      {label: '侧重点', value: '布局 / 性能 / 响应式'},
      {label: '建议掌握', value: 'Flex + Grid + BFC'},
    ],
    focusAreas: ['Flex 与 Grid', 'BFC', '重排与重绘'],
    questions: [
      {
        level: 'junior',
        title: 'BFC 是什么，通常解决哪些问题？',
        focus: '是否理解块级格式化上下文和独立布局环境的概念。',
        answer:
          'BFC 是独立布局区域，内部布局不会直接影响外部。它常用于清除浮动、阻止外边距合并、隔离复杂布局。常见触发方式包括 overflow 不为 visible、display: flow-root、绝对定位等。',
        language: 'css',
        tags: ['BFC', '布局'],
        code: `.card-list {\n  display: flow-root;\n}\n\n.media {\n  overflow: hidden;\n}`,
      },
      {
        level: 'mid',
        title: 'Flex 和 Grid 的适用边界怎么判断？',
        focus: '是否能从一维与二维布局模型做判断，而不是背属性。',
        answer:
          'Flex 更适合一维分布，例如工具栏、列表项、双栏自适应；Grid 更适合需要同时控制行列关系的二维布局，例如控制台卡片区、数据大盘、瀑布式骨架布局。',
        language: 'css',
        tags: ['Flex', 'Grid', '响应式'],
        code: `.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}`,
        runnableTitle: 'Flex 与 Grid 示例',
        runnableHeight: 260,
        runnableCode: `<style>\n.preview { display: grid; gap: 20px; }\n.toolbar { display: flex; gap: 12px; padding: 12px; background: #f3f4f6; border-radius: 12px; }\n.toolbar span { padding: 8px 12px; background: #fff; border-radius: 999px; box-shadow: 0 2px 8px rgba(0,0,0,.08); }\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n.grid div { min-height: 72px; background: linear-gradient(135deg, #ffedd5, #dbeafe); border-radius: 16px; display: grid; place-items: center; font-weight: 600; }\n</style>\n<div class="preview">\n  <div class="toolbar"><span>Search</span><span>Filter</span><span>Export</span></div>\n  <div class="grid"><div>A</div><div>B</div><div>C</div></div>\n</div>`,
      },
      {
        level: 'senior',
        title: '为什么动画通常更推荐 transform 和 opacity？',
        focus: '是否理解渲染流水线和图层合成成本。',
        answer:
          '因为 transform 和 opacity 更容易停留在合成阶段，通常不会触发布局计算与重绘；而 top、left、width 这类属性更容易引发布局变化。实际优化时仍需结合元素数量、图层数量和设备性能综合判断。',
        language: 'css',
        tags: ['性能', '动画'],
        code: `.box {\n  transition: transform 200ms ease, opacity 200ms ease;\n}\n\n.box:hover {\n  transform: translateY(-4px) scale(1.01);\n  opacity: 0.92;\n}`,
      },
    ],
  },
  {
    slug: 'javascript',
    title: 'JavaScript',
    eyebrow: 'JavaScript',
    description:
      '核心聚焦语言基础、作用域、异步、对象模型与手写能力，是前端面试里的绝对高频区。',
    summary: '闭包、事件循环、原型链、异步',
    stats: [
      {label: '侧重点', value: '原理 + 手写'},
      {label: '常见追问', value: 'Promise / async / this'},
    ],
    focusAreas: ['闭包', '事件循环', '函数控制'],
    questions: [
      {
        level: 'junior',
        title: '闭包是什么？它的价值和风险分别是什么？',
        focus: '是否真的理解函数与词法环境的绑定关系。',
        answer:
          '闭包是函数与其词法环境的组合。它可以封装私有变量、延长状态生命周期，也可能让状态流更隐蔽，或因为引用未释放带来内存保留问题。',
        language: 'js',
        tags: ['闭包', '作用域'],
        code: `function createCounter() {\n  let count = 0;\n  return {\n    inc() {\n      count += 1;\n      return count;\n    },\n    reset() {\n      count = 0;\n    },\n  };\n}`,
      },
      {
        level: 'mid',
        title: '事件循环里，Promise 和 setTimeout 谁先执行？为什么？',
        focus: '是否能解释宏任务与微任务的清空顺序。',
        answer:
          '当前宏任务里的同步代码执行完后，会先清空当前微任务队列，再进入渲染和下一轮宏任务。所以一般 Promise.then 会先于同轮的 setTimeout 回调执行。',
        language: 'js',
        tags: ['Event Loop', '异步'],
        code: `console.log('start');\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');`,
        runnableTitle: '事件循环输出顺序',
        runnableHeight: 220,
        runnableCode: `<div id="log" style="display:grid;gap:8px;"></div>\n<script>\n  const root = document.getElementById('log');\n  const push = (text) => {\n    const item = document.createElement('div');\n    item.textContent = text;\n    item.style.padding = '8px 10px';\n    item.style.borderRadius = '10px';\n    item.style.background = '#f3f4f6';\n    root.appendChild(item);\n  };\n  push('start');\n  setTimeout(() => push('timeout'), 0);\n  Promise.resolve().then(() => push('promise'));\n  push('end');\n</script>`,
      },
      {
        level: 'senior',
        title: '手写 debounce 时，线上实现还要考虑什么？',
        focus: '是否能从业务视角补足 leading、trailing、取消与返回值。',
        answer:
          '真实 debounce 往往需要可选首触发、尾触发、cancel、flush 和 this/参数透传。若用于搜索建议，还要考虑请求竞态与取消；若用于 resize，还要考虑最后一次调用是否必须执行。',
        language: 'js',
        tags: ['手写题', '性能优化'],
        code: `function debounce(fn, delay = 300) {\n  let timer = null;\n\n  function debounced(...args) {\n    const context = this;\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn.apply(context, args);\n    }, delay);\n  }\n\n  debounced.cancel = () => {\n    clearTimeout(timer);\n    timer = null;\n  };\n\n  return debounced;\n}`,
      },
    ],
  },
  {
    slug: 'typescript',
    title: 'TypeScript',
    eyebrow: 'TypeScript',
    description:
      '重点考察类型系统在真实项目里的价值，而不是只会写 interface 与 type。',
    summary: '类型系统、泛型、收窄、工程集成',
    stats: [
      {label: '侧重点', value: '类型建模 / 泛型 / 收窄'},
      {label: '常见追问', value: 'unknown / never / infer'},
    ],
    focusAreas: ['类型收窄', '泛型约束', '复杂类型设计'],
    questions: [
      {
        level: 'junior',
        title: 'interface 和 type 的常见差异是什么？',
        focus: '是否能说出扩展方式与适用场景，而不是绝对化结论。',
        answer:
          '两者都能描述对象结构，但 interface 更偏向对象契约与声明合并，type 更灵活，适合联合类型、交叉类型、映射类型等。项目里通常不是二选一，而是按表达能力选用。',
        language: 'ts',
        tags: ['基础类型', '建模'],
        code: `interface User {\n  id: string;\n  name: string;\n}\n\ntype Status = 'idle' | 'loading' | 'success' | 'error';`,
      },
      {
        level: 'mid',
        title: 'unknown 和 any 有什么本质区别？',
        focus: '是否理解 unknown 的“先校验后使用”约束价值。',
        answer:
          'any 会放弃类型检查，调用属性和方法都不受约束；unknown 表示你暂时不知道它的真实类型，使用前必须先做类型收窄。大型项目里 unknown 更安全，也更适合作为边界输入类型。',
        language: 'ts',
        tags: ['unknown', '类型安全'],
        code: `function parseName(input: unknown) {\n  if (typeof input === 'string') {\n    return input.trim();\n  }\n\n  return 'anonymous';\n}`,
      },
      {
        level: 'senior',
        title: '你会如何设计一个带泛型约束的请求函数？',
        focus: '是否能把类型系统用于 API 边界，而不只停留在组件 props。',
        answer:
          '关键是把请求参数、响应结果和错误模型建模清楚，并在边界上约束它们。这样可以把很多运行时错误前移到编译期，同时减少调用侧的重复判断。',
        language: 'ts',
        tags: ['泛型', 'API 设计'],
        code: `type ApiResponse<T> = {\n  code: number;\n  data: T;\n  message: string;\n};\n\nasync function request<TData, TParams extends Record<string, unknown>>(\n  url: string,\n  params: TParams,\n): Promise<ApiResponse<TData>> {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {'Content-Type': 'application/json'},\n    body: JSON.stringify(params),\n  });\n\n  return response.json();\n}`,
      },
    ],
  },
  {
    slug: 'react',
    title: 'React',
    eyebrow: 'React',
    description:
      'React 类题目多围绕组件设计、状态建模、渲染性能与数据流组织，适合区分“会写”和“会设计”。',
    summary: '组件化、状态、Hooks、渲染性能',
    stats: [
      {label: '侧重点', value: '状态建模 / Hooks / 渲染'},
      {label: '常见追问', value: '受控组件 / Context / 并发特性'},
    ],
    focusAreas: ['状态最小化', 'Hooks 设计', '渲染边界'],
    questions: [
      {
        level: 'junior',
        title: '受控组件和非受控组件的区别是什么？',
        focus: '是否理解状态源头以及表单管理差异。',
        answer:
          '受控组件由 React state 驱动，值和更新都来自组件逻辑；非受控组件更多依赖 DOM 自身维护值。表单校验、联动和业务约束复杂时，受控更可控；简单输入或兼容第三方时，非受控也有价值。',
        language: 'jsx',
        tags: ['表单', '状态管理'],
        code: `function SearchBox() {\n  const [keyword, setKeyword] = React.useState('');\n\n  return (\n    <input\n      value={keyword}\n      onChange={(event) => setKeyword(event.target.value)}\n      placeholder=\"搜索题目\"\n    />\n  );\n}`,
      },
      {
        level: 'mid',
        title: '为什么要保持 state 最小化？',
        focus: '是否能避免冗余状态和由此带来的同步问题。',
        answer:
          'React 状态应只保存真正会变化、且无法通过已有数据推导出的最小集合。冗余状态越多，同步成本越高，bug 越容易出现，比如列表和过滤后列表同时存储就是典型反例。',
        language: 'jsx',
        tags: ['状态建模', '最佳实践'],
        code: `function ProductList({items, keyword}) {\n  const visibleItems = items.filter((item) => item.name.includes(keyword));\n  return visibleItems.map((item) => <li key={item.id}>{item.name}</li>);\n}`,
      },
      {
        level: 'senior',
        title: 'Context 适合解决哪些问题，不适合解决哪些问题？',
        focus: '是否理解 Context 是依赖注入工具，不是万能状态库。',
        answer:
          'Context 适合传递主题、当前用户、国际化、表单上下文这类跨层共享但更新频率相对可控的数据；不适合把高频变化的大型业务状态全部塞进去，否则订阅范围和重渲染成本会失控。',
        language: 'jsx',
        tags: ['Context', '架构'],
        code: `const ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}`,
      },
    ],
  },
  {
    slug: 'vue',
    title: 'Vue',
    eyebrow: 'Vue',
    description:
      'Vue 面试通常会考察响应式、组合式 API、组件通信以及工程实践，重点在“为什么这样设计”。',
    summary: '响应式、组合式 API、组件通信',
    stats: [
      {label: '侧重点', value: '响应式 / 组件通信 / 工程实践'},
      {label: '常见追问', value: 'computed / watch / Pinia'},
    ],
    focusAreas: ['响应式原理', '组件通信', 'Composition API'],
    questions: [
      {
        level: 'junior',
        title: 'computed 和 method 的核心区别是什么？',
        focus: '是否理解 computed 的缓存特性。',
        answer:
          'computed 会基于依赖做缓存，依赖不变时不会重复求值；method 每次渲染都会重新执行。适合声明式派生状态的逻辑，优先用 computed。',
        language: 'vue',
        tags: ['computed', '响应式'],
        code: `<script setup>\nimport {computed, ref} from 'vue';\n\nconst price = ref(199);\nconst count = ref(2);\nconst total = computed(() => price.value * count.value);\n</script>`,
      },
      {
        level: 'mid',
        title: 'watch 和 watchEffect 该怎么选？',
        focus: '是否理解显式依赖与自动依赖追踪的区别。',
        answer:
          'watch 适合明确监听某个源，并可拿到新旧值；watchEffect 更像自动收集依赖并执行副作用，适合快速描述“依赖变化就重跑”的场景，但可控性稍弱。',
        language: 'vue',
        tags: ['watch', '副作用'],
        code: `watch(searchKeyword, async (keyword) => {\n  result.value = await fetchResult(keyword);\n});\n\nwatchEffect(() => {\n  console.log(route.params.id);\n});`,
      },
      {
        level: 'senior',
        title: 'Composition API 相比 Options API 的工程价值在哪里？',
        focus: '是否能从逻辑组织和复用角度说明，而不只停留在语法偏好。',
        answer:
          'Composition API 的核心价值是按“业务能力”组织逻辑，而不是按 data、methods、computed 拆散同一功能。复杂页面中，搜索、分页、权限、埋点这类逻辑可以以 composable 方式复用和组合，维护性更好。',
        language: 'js',
        tags: ['Composition API', '架构'],
        code: `export function usePagination(initialPage = 1) {\n  const page = ref(initialPage);\n  const next = () => {\n    page.value += 1;\n  };\n\n  return {page, next};\n}`,
      },
    ],
  },
  {
    slug: 'engineering',
    title: '工程化',
    eyebrow: 'Engineering',
    description:
      '工程化题更看重你是否做过真实治理，包括构建、发布、质量门禁、依赖与多包协作。',
    summary: '构建、CI/CD、Monorepo、依赖治理',
    stats: [
      {label: '侧重点', value: '构建 / 发布 / 治理'},
      {label: '典型工具', value: 'Vite / Webpack / CI'},
    ],
    focusAreas: ['构建模型', 'CI/CD', 'Monorepo'],
    questions: [
      {
        level: 'junior',
        title: 'Webpack 和 Vite 的开发体验差异来自哪里？',
        focus: '是否理解“开发时按需加载”和“开发期整包构建”的差异。',
        answer:
          'Webpack 更偏向在开发阶段也建立完整打包流程；Vite 借助浏览器原生 ESM，在开发期按需提供模块，因此冷启动和热更新通常更快。生产构建时 Vite 再交给 Rollup 做优化打包。',
        language: 'js',
        tags: ['Vite', 'Webpack'],
        code: `import {defineConfig} from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n});`,
      },
      {
        level: 'mid',
        title: 'CI/CD 里的前端质量门禁通常怎么设计？',
        focus: '是否能把 lint、test、size、e2e 与发布流程串起来。',
        answer:
          '常见门禁包括 ESLint、TypeScript 检查、单测、关键链路 e2e、bundle 体积预算、构建产物校验和灰度发布。重点不是工具堆砌，而是把失败条件设计成真正阻止风险进入主干。',
        language: 'json',
        tags: ['CI/CD', '质量门禁'],
        code: `{\n  \"scripts\": {\n    \"ci\": \"pnpm lint && pnpm typecheck && pnpm test && pnpm build\"\n  }\n}`,
      },
      {
        level: 'senior',
        title: 'Monorepo 的收益和代价分别是什么？',
        focus: '是否具备跨项目协作和基础设施治理经验。',
        answer:
          '收益是依赖统一、组件复用、跨包改动更顺滑、规范更一致；代价是仓库治理复杂度更高，需要缓存、受影响范围计算、发布策略和权限边界，否则规模一大就会拖慢整个研发链路。',
        language: 'json',
        tags: ['Monorepo', '协作'],
        code: `{\n  \"private\": true,\n  \"workspaces\": [\"apps/*\", \"packages/*\"]\n}`,
      },
    ],
  },
  {
    slug: 'browser-network-security',
    title: '浏览器、网络与安全',
    eyebrow: 'Browser / Network / Security',
    description:
      '这部分用于评估浏览器通信、缓存、跨域和前端安全基本盘，属于高频但容易答浅的区域。',
    summary: 'HTTP、缓存、跨域、安全',
    stats: [
      {label: '侧重点', value: '缓存 / 跨域 / XSS / HTTPS'},
      {label: '高频题', value: 'CORS / Cookie / CSP'},
    ],
    focusAreas: ['HTTP 缓存', '跨域机制', '前端安全'],
    questions: [
      {
        level: 'junior',
        title: '强缓存和协商缓存的区别是什么？',
        focus: '是否理解 Cache-Control、ETag、Last-Modified 的职责。',
        answer:
          '强缓存命中时浏览器直接使用本地资源，不发起请求；协商缓存会带条件请求到服务端，由服务端判断资源是否变化。工程里常把静态指纹资源放强缓存，HTML 或接口相关资源更多依赖协商缓存。',
        language: 'http',
        tags: ['缓存', 'HTTP'],
        code: `Cache-Control: public, max-age=31536000, immutable\nETag: \"8f3a-20260311\"\nLast-Modified: Wed, 11 Mar 2026 12:00:00 GMT`,
      },
      {
        level: 'mid',
        title: 'CORS 解决了什么问题，预检请求什么时候出现？',
        focus: '是否知道浏览器同源策略与复杂请求预检的关系。',
        answer:
          'CORS 是浏览器基于同源策略提供的跨源访问协商机制。当前端发送非简单请求，例如自定义请求头、PUT/DELETE 或特定 Content-Type 时，浏览器通常会先发 OPTIONS 预检请求确认服务端是否允许。',
        language: 'http',
        tags: ['CORS', '跨域'],
        code: `Access-Control-Allow-Origin: https://app.example.com\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization`,
      },
      {
        level: 'senior',
        title: '前端常见安全问题里，CSP 的作用是什么？',
        focus: '是否能把安全策略落到浏览器层能力，而不是泛谈 XSS。',
        answer:
          'CSP 是浏览器侧的内容安全策略，用来限制脚本、样式、图片、iframe 等资源的来源，能显著降低 XSS 注入后的执行面。它不是万能防线，但在现代前端里是很重要的一层浏览器级约束。',
        language: 'http',
        tags: ['CSP', 'XSS', '安全'],
        code: `Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'; base-uri 'self';`,
      },
    ],
  },
  {
    slug: 'performance',
    title: '性能优化',
    eyebrow: 'Performance',
    description:
      '性能类题目更适合看候选人是否具备“指标、链路、治理”三个层次的思维，而不是只会列招式。',
    summary: 'Core Web Vitals、加载优化、渲染治理',
    stats: [
      {label: '侧重点', value: 'LCP / INP / CLS'},
      {label: '常见追问', value: '首屏 / 长列表 / 图片'},
    ],
    focusAreas: ['指标理解', '加载优化', '渲染性能'],
    questions: [
      {
        level: 'junior',
        title: '首屏优化通常会先看哪些点？',
        focus: '是否知道资源体积、阻塞链路和渲染关键路径。',
        answer:
          '通常先看关键 CSS、首屏 JS、图片体积、接口串行依赖、字体加载、第三方脚本和服务端响应时间。优化不是只压缩资源，而是缩短从请求到可见内容出现的整条关键路径。',
        language: 'html',
        tags: ['首屏', '加载优化'],
        code: `<link rel="preconnect" href="https://api.example.com" />\n<link rel="preload" href="/hero.avif" as="image" />`,
      },
      {
        level: 'mid',
        title: '长列表性能问题通常怎么处理？',
        focus: '是否能从渲染数量、事件绑定和图片策略综合回答。',
        answer:
          '优先减少同时渲染的节点数量，典型方案是虚拟列表；其次控制每项的渲染复杂度、避免无意义重渲染、延迟图片加载，并减少滚动期间昂贵的同步计算。',
        language: 'jsx',
        tags: ['长列表', '虚拟化'],
        code: `<FlatList\n  data={data}\n  initialNumToRender={8}\n  windowSize={5}\n  removeClippedSubviews\n/>`,
      },
      {
        level: 'senior',
        title: '性能治理为什么不能只靠一次性专项？',
        focus: '是否具备持续监控、预算和回归治理思维。',
        answer:
          '因为性能会随着功能迭代持续退化。真正有效的是建立指标采集、预算门禁、告警和版本对比，把性能纳入日常研发流程，而不是等线上变慢后再做一次专项抢救。',
        language: 'json',
        tags: ['治理', '预算'],
        code: `{\n  \"budgets\": {\n    \"js\": \"250kb\",\n    \"css\": \"80kb\",\n    \"lcp\": \"2500ms\"\n  }\n}`,
      },
    ],
  },
  {
    slug: 'accessibility',
    title: '可访问性',
    eyebrow: 'Accessibility',
    description:
      '无障碍题目用于区分是否真正理解“可用性面向所有用户”，而不是把它当成额外工作。',
    summary: '语义、焦点管理、键盘访问、ARIA',
    stats: [
      {label: '侧重点', value: '语义 / 键盘 / 焦点管理'},
      {label: '常见追问', value: 'Dialog / 表单 / 读屏'},
    ],
    focusAreas: ['键盘可用性', '焦点管理', 'ARIA 边界'],
    questions: [
      {
        level: 'junior',
        title: '为什么点击事件不能只绑定 mouse 相关事件？',
        focus: '是否理解键盘用户与设备无关交互。',
        answer:
          '只绑定 mouseover、click on div 这类做法会让键盘用户和辅助技术用户无法操作。优先使用 button、a 等原生可交互元素，必要时补齐键盘事件与焦点状态。',
        language: 'html',
        tags: ['键盘无障碍', '语义化'],
        code: `<button type="button" aria-label="关闭弹窗">关闭</button>`,
      },
      {
        level: 'mid',
        title: '自定义弹窗组件最容易忽略哪些无障碍问题？',
        focus: '是否知道初始焦点、焦点陷阱和关闭后的焦点恢复。',
        answer:
          '最常见的问题是弹窗打开后没有把焦点移入，Tab 能跳到背景页面，关闭后焦点也没有回到触发按钮。弹窗不仅是视觉覆盖层，还要在键盘导航和读屏语义上形成完整闭环。',
        language: 'js',
        tags: ['Dialog', '焦点管理'],
        code: `dialogRef.current?.focus();\ntriggerRef.current?.focus();`,
      },
      {
        level: 'senior',
        title: 'ARIA 的使用边界是什么？',
        focus: '是否知道“优先原生语义，再用 ARIA 补充”的原则。',
        answer:
          'ARIA 不是用来替代原生 HTML 的。正确原则是先选有语义的原生元素，只有原生能力不足时再用 ARIA 补充角色、状态和关系。错误使用 ARIA 反而会让读屏表现更糟。',
        language: 'html',
        tags: ['ARIA', '读屏'],
        code: `<button aria-expanded="false" aria-controls="faq-panel-1">\n  查看答案\n</button>`,
      },
    ],
  },
  {
    slug: 'testing',
    title: '测试',
    eyebrow: 'Testing',
    description:
      '测试题更关注你如何把前端质量问题前移，而不是只知道某个测试库的 API。',
    summary: '单测、组件测试、E2E、质量策略',
    stats: [
      {label: '侧重点', value: '测试分层 / 边界 / 稳定性'},
      {label: '常见追问', value: 'Mock / flake / 覆盖率'},
    ],
    focusAreas: ['测试分层', '用户行为测试', '稳定性治理'],
    questions: [
      {
        level: 'junior',
        title: '单元测试、集成测试、E2E 测试分别适合测什么？',
        focus: '是否理解不同层级测试的目标和成本。',
        answer:
          '单元测试适合验证独立函数和小范围逻辑；集成测试适合验证组件或模块协作；E2E 更适合覆盖登录、支付、下单这类关键链路。不是层级越高越好，而是需要成本和覆盖面平衡。',
        language: 'js',
        tags: ['测试分层', '质量'],
        code: `describe('sum', () => {\n  it('adds two numbers', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});`,
      },
      {
        level: 'mid',
        title: '为什么前端测试更推荐围绕用户行为，而不是实现细节？',
        focus: '是否理解测试要防重构脆弱，而不是锁死内部实现。',
        answer:
          '实现细节容易随重构变化，导致测试脆弱且价值低。围绕用户能看到和能操作的结果去断言，通常更稳，也更接近真实质量风险。',
        language: 'js',
        tags: ['Testing Library', '行为测试'],
        code: `await user.click(screen.getByRole('button', {name: '提交'}));\nexpect(await screen.findByText('保存成功')).toBeInTheDocument();`,
      },
      {
        level: 'senior',
        title: '你会怎么降低 E2E 用例的 flaky 概率？',
        focus: '是否有真实排查不稳定测试的经验。',
        answer:
          '关键是减少时间依赖和环境波动：避免硬编码等待，优先等待稳定的 UI 状态或网络完成信号；隔离测试数据；控制第三方依赖；对经常失败的链路建立截图、日志和重试诊断机制。',
        language: 'js',
        tags: ['E2E', '稳定性'],
        code: `await page.getByRole('button', {name: '登录'}).click();\nawait expect(page.getByText('欢迎回来')).toBeVisible();`,
      },
    ],
  },
  {
    slug: 'node-bff',
    title: 'Node.js / BFF',
    eyebrow: 'Node / BFF',
    description:
      '很多前端岗位会考 Node.js 与 BFF，重点是边界层设计、聚合接口、SSR 支撑和工程协作。',
    summary: 'BFF、接口聚合、SSR、边界治理',
    stats: [
      {label: '侧重点', value: '中间层 / 聚合 / 稳定性'},
      {label: '常见追问', value: 'SSR / 鉴权 / 错误处理'},
    ],
    focusAreas: ['BFF 价值', '错误处理', '边界模型'],
    questions: [
      {
        level: 'junior',
        title: '为什么前端岗位会问 Node.js？',
        focus: '是否理解 Node 在前端工程体系里的真实角色。',
        answer:
          '因为前端不仅写页面，也经常负责构建工具、SSR、中间层、脚本平台和接口聚合。Node.js 是很多前端基础设施和全栈协作链路的运行时底座。',
        language: 'js',
        tags: ['Node.js', '全栈协作'],
        code: `import http from 'node:http';\n\nhttp.createServer((req, res) => {\n  res.end('ok');\n}).listen(3001);`,
      },
      {
        level: 'mid',
        title: 'BFF 适合解决什么问题？',
        focus: '是否理解它不是简单转发层，而是面向前端场景的接口适配层。',
        answer:
          'BFF 适合做接口聚合、字段裁剪、鉴权透传、降级容错和多端差异适配，让前端页面不必直接面向多个后端服务编排复杂逻辑。关键是边界要清晰，不要演变成新的“大后端”。',
        language: 'js',
        tags: ['BFF', '接口聚合'],
        code: `app.get('/api/dashboard', async (req, res) => {\n  const [profile, stats] = await Promise.all([\n    getProfile(req.userId),\n    getStats(req.userId),\n  ]);\n\n  res.json({profile, stats});\n});`,
      },
      {
        level: 'senior',
        title: 'Node 中间层的错误处理为什么不能只靠 try/catch？',
        focus: '是否知道超时、取消、日志与监控的重要性。',
        answer:
          '线上服务除了同步异常，还要处理超时、下游失败、请求取消、部分成功、重试与链路追踪。真正可运维的 BFF 需要统一错误模型、超时控制、日志采样、指标上报和降级策略。',
        language: 'js',
        tags: ['稳定性', '错误处理'],
        code: `const controller = new AbortController();\nconst timer = setTimeout(() => controller.abort(), 1500);\n\ntry {\n  const response = await fetch(url, {signal: controller.signal});\n  return await response.json();\n} finally {\n  clearTimeout(timer);\n}`,
      },
    ],
  },
  {
    slug: 'react-native',
    title: 'React Native',
    eyebrow: 'React Native',
    description:
      'RN 题目通常围绕跨端渲染原理、性能、原生协作和新架构，而不是只停留在组件层。',
    summary: '桥接、性能、原生协作、新架构',
    stats: [
      {label: '侧重点', value: '桥接 / 性能 / 调试'},
      {label: '常见追问', value: 'Fabric / TurboModules'},
    ],
    focusAreas: ['跨端渲染', '列表性能', '新架构'],
    questions: [
      {
        level: 'junior',
        title: 'React Native 为什么不是 WebView 方案？',
        focus: '是否能说明 RN 使用的是原生组件映射。',
        answer:
          'RN 用 JavaScript 描述 UI 和逻辑，但最终渲染的是 iOS/Android 的原生组件，不是把 HTML 页面塞进 WebView。也因此它在交互体验上通常优于纯 WebView 容器方案。',
        language: 'tsx',
        tags: ['架构', '跨端'],
        code: `import {Text, View} from 'react-native';\n\nexport function ProfileCard() {\n  return (\n    <View style={{padding: 16, borderRadius: 16, backgroundColor: '#fff'}}>\n      <Text style={{fontSize: 18, fontWeight: '700'}}>Frontend Engineer</Text>\n    </View>\n  );\n}`,
      },
      {
        level: 'mid',
        title: 'RN 页面卡顿时，优先从哪些方向排查？',
        focus: '是否能覆盖 JS 线程、UI 线程、列表与图片资源几个维度。',
        answer:
          '先区分卡顿发生在 JS 线程还是 UI 线程，再排查是否有长列表未虚拟化、频繁 bridge 通信、大图解码、重渲染过多或动画执行方式不当等问题。',
        language: 'tsx',
        tags: ['性能', '排障'],
        code: `<FlatList\n  data={data}\n  keyExtractor={(item) => item.id}\n  initialNumToRender={8}\n  windowSize={5}\n  removeClippedSubviews\n/>`,
      },
      {
        level: 'senior',
        title: 'Fabric 和 TurboModules 主要解决了哪些旧架构问题？',
        focus: '是否了解 RN 新架构的演进动机。',
        answer:
          '它们主要解决旧 bridge 序列化通信成本高、调用效率低和渲染链路割裂的问题。Fabric 重构了 UI 渲染系统，TurboModules 优化了原生模块调用，整体目标是提升一致性、性能与可维护性。',
        language: 'js',
        tags: ['新架构', 'Fabric'],
        code: `const nativeModule = TurboModuleRegistry.getEnforcing('NativeStorage');\nconst value = await nativeModule.getItem('token');`,
      },
    ],
  },
  {
    slug: 'git',
    title: 'Git',
    eyebrow: 'Git',
    description:
      'Git 题目通常直接映射真实协作能力，尤其是多人并行开发、回滚、历史整理和紧急修复。',
    summary: '协作流、rebase、回滚、排障',
    stats: [
      {label: '侧重点', value: '协作流 / 回滚 / 排障'},
      {label: '高频命令', value: 'rebase / cherry-pick / revert'},
    ],
    focusAreas: ['分支策略', '回滚', '历史整理'],
    questions: [
      {
        level: 'junior',
        title: 'merge 和 rebase 的区别是什么？',
        focus: '是否能从提交历史、协作成本和风险角度解释。',
        answer:
          'merge 会保留分叉历史并生成合并提交，适合保留真实协作轨迹；rebase 会把当前分支提交重放到目标分支之后，使历史更线性。rebase 不应随意改写已共享分支的公共历史。',
        language: 'bash',
        tags: ['协作流', 'rebase'],
        code: `git checkout feature/interview-docs\ngit fetch origin\ngit rebase origin/main`,
      },
      {
        level: 'mid',
        title: '线上有问题，但你只想回滚某一个提交，怎么做？',
        focus: '是否能正确区分 revert、reset 和 cherry-pick 的使用场景。',
        answer:
          '对于已经共享的提交，应优先使用 git revert 生成一个反向提交，这样历史清晰且不会改写公共记录。reset 更适合本地整理，线上协作分支不适合直接 reset 后强推。',
        language: 'bash',
        tags: ['回滚', '线上问题'],
        code: `git log --oneline\ngit revert <commit_sha>\ngit push origin main`,
      },
      {
        level: 'senior',
        title: 'cherry-pick 适合什么场景？潜在风险是什么？',
        focus: '是否理解跨分支摘取提交的收益与后续维护成本。',
        answer:
          '当你只需要把某个修复提交从 A 分支带到 B 分支，而不希望整体合并 A 分支时，cherry-pick 很合适。风险在于后续重复合并时可能出现重复提交或冲突，因此要保证提交粒度清晰并记录来源。',
        language: 'bash',
        tags: ['cherry-pick', '多分支维护'],
        code: `git checkout release/1.2\ngit cherry-pick abc1234`,
      },
    ],
  },
];

const extraQuestionsBySlug = {
  'html-browser': [
    {
      level: 'junior',
      title: 'defer 和 async 加载脚本的区别是什么？',
      focus: '是否理解脚本下载与执行时机对 HTML 解析的影响。',
      answer:
        '两者都会异步下载脚本。async 下载完成后立即执行，执行顺序不保证；defer 会等 HTML 解析完成后按文档顺序执行，更适合依赖 DOM 或有先后顺序的脚本。',
      language: 'html',
      tags: ['script', '加载顺序'],
      code: `<script src="/analytics.js" async></script>\n<script src="/app.bundle.js" defer></script>`,
    },
    {
      level: 'mid',
      title: '事件委托为什么常用于列表场景？',
      focus: '是否理解事件冒泡、动态节点和绑定成本。',
      answer:
        '事件委托利用事件冒泡，把多个子元素的处理逻辑挂到共同父节点上，能减少监听器数量，也更适合处理动态插入的节点。要注意命中元素判断和 stopPropagation 对链路的影响。',
      language: 'js',
      tags: ['DOM', '事件委托'],
      code: `const list = document.querySelector('[data-list]');\n\nlist.addEventListener('click', (event) => {\n  const item = event.target.closest('[data-item-id]');\n  if (!item) return;\n  console.log(item.dataset.itemId);\n});`,
      runnableTitle: '事件委托示例',
      runnableHeight: 240,
      runnableCode: `<ul data-list style="display:grid;gap:8px;padding:0;list-style:none;">\n  <li><button data-item-id="css">CSS</button></li>\n  <li><button data-item-id="js">JavaScript</button></li>\n  <li><button data-item-id="react">React</button></li>\n</ul>\n<div id="out" style="margin-top:12px;padding:10px;background:#f3f4f6;border-radius:12px;">等待点击</div>\n<script>\n  const out = document.getElementById('out');\n  document.querySelector('[data-list]').addEventListener('click', (event) => {\n    const item = event.target.closest('[data-item-id]');\n    if (!item) return;\n    out.textContent = '当前点击分类：' + item.dataset.itemId;\n  });\n</script>`,
    },
  ],
  css: [
    {
      level: 'junior',
      title: 'position 的几个常见取值分别有什么行为差异？',
      focus: '是否理解普通流、定位上下文和 fixed/sticky 的差别。',
      answer:
        'relative 保留原位置并作为绝对定位参考；absolute 脱离文档流，参考最近定位祖先；fixed 相对视口定位；sticky 在滚动到阈值前后在相对和固定之间切换。面试里通常会继续追问 containing block。',
      language: 'css',
      tags: ['position', '布局'],
      code: `.header {\n  position: sticky;\n  top: 0;\n}\n\n.badge {\n  position: absolute;\n  inset: 8px 8px auto auto;\n}`,
    },
    {
      level: 'mid',
      title: '层叠上下文是怎么形成的？为什么 z-index 有时不生效？',
      focus: '是否理解 stacking context，而不是把问题归因于 z-index 数值不够大。',
      answer:
        'z-index 只在同一层叠上下文里比较。定位元素带 z-index、opacity 小于 1、transform、filter 等都可能创建新的层叠上下文，所以数值再大也无法跨上下文压过外层元素。',
      language: 'css',
      tags: ['z-index', '层叠上下文'],
      code: `.modal-root {\n  position: relative;\n  z-index: 30;\n}\n\n.card {\n  transform: translateZ(0);\n}\n\n.card .tooltip {\n  position: absolute;\n  z-index: 9999;\n}`,
    },
  ],
  javascript: [
    {
      level: 'junior',
      title: 'this 的指向通常由什么决定？',
      focus: '是否理解调用方式比定义位置更重要。',
      answer:
        'this 大多数时候由调用方式决定。普通函数默认指向全局对象或 undefined，作为对象方法调用时指向该对象，call/apply/bind 可显式指定，箭头函数则继承外层词法作用域中的 this。',
      language: 'js',
      tags: ['this', '函数'],
      code: `const obj = {\n  value: 42,\n  getValue() {\n    return this.value;\n  },\n};\n\nconst fn = obj.getValue;\nconsole.log(obj.getValue());\nconsole.log(fn());`,
    },
    {
      level: 'mid',
      title: '深拷贝和浅拷贝的区别是什么？structuredClone 适合所有场景吗？',
      focus: '是否知道对象引用共享与内建深拷贝能力的边界。',
      answer:
        '浅拷贝只复制第一层引用，嵌套对象仍共享；深拷贝会递归复制结构。structuredClone 对大多数纯数据结构很好用，但函数、DOM 节点等并不适合直接处理，业务里仍要看数据形态。',
      language: 'js',
      tags: ['拷贝', '对象'],
      code: `const state = {user: {name: 'Ada'}};\nconst shallow = {...state};\nconst deep = structuredClone(state);\n\nshallow.user.name = 'Grace';\nconsole.log(state.user.name);\nconsole.log(deep.user.name);`,
      runnableTitle: '浅拷贝与深拷贝',
      runnableHeight: 220,
      runnableCode: `<pre id="out" style="margin:0;padding:12px;border-radius:12px;background:#f3f4f6;white-space:pre-wrap;"></pre>\n<script>\n  const state = {user: {name: 'Ada'}};\n  const shallow = {...state};\n  const deep = structuredClone(state);\n  shallow.user.name = 'Grace';\n  document.getElementById('out').textContent = [\n    '原对象 user.name: ' + state.user.name,\n    '深拷贝 user.name: ' + deep.user.name,\n  ].join('\\n');\n</script>`,
    },
  ],
  typescript: [
    {
      level: 'junior',
      title: '联合类型和交叉类型分别适合什么场景？',
      focus: '是否理解“多选一”和“同时具备”的建模差异。',
      answer:
        '联合类型表示值可能是多种类型之一，常用于状态分支和参数输入；交叉类型表示同时具备多个类型特征，常用于组合能力。两者看起来相似，但表达语义完全不同。',
      language: 'ts',
      tags: ['联合类型', '交叉类型'],
      code: `type RequestState = 'idle' | 'loading' | 'success';\n\ntype WithTimestamp = {createdAt: string};\ntype User = {name: string} & WithTimestamp;`,
    },
    {
      level: 'mid',
      title: '什么是类型守卫？为什么它对大型项目重要？',
      focus: '是否会把运行时校验和编译期收窄结合起来。',
      answer:
        '类型守卫是能让 TypeScript 缩小类型范围的判断逻辑，例如 typeof、in、instanceof 或自定义谓词函数。它的重要性在于把边界输入变得可控，减少 any 式写法扩散。',
      language: 'ts',
      tags: ['类型守卫', '收窄'],
      code: `function isUser(input: unknown): input is {name: string} {\n  return typeof input === 'object' && input !== null && 'name' in input;\n}\n\nfunction printName(input: unknown) {\n  if (isUser(input)) {\n    console.log(input.name);\n  }\n}`,
    },
  ],
  react: [
    {
      level: 'junior',
      title: 'key 为什么在列表渲染中重要？',
      focus: '是否理解 key 与节点复用、状态错位的关系。',
      answer:
        'key 用来帮助 React 识别列表项在前后两次渲染中的身份。如果用索引作为不稳定 key，在插入、删除、排序时容易导致节点复用错误和局部状态错位。',
      language: 'jsx',
      tags: ['列表渲染', 'key'],
      code: `items.map((item) => (\n  <TodoRow key={item.id} item={item} />\n))`,
    },
    {
      level: 'mid',
      title: 'useEffect 最常见的误用是什么？',
      focus: '是否知道 effect 是同步外部系统，而不是替代所有计算逻辑。',
      answer:
        '最常见的误用是把本可直接计算的派生值塞进 useEffect 再写回 state，导致冗余状态和双重渲染。effect 应该优先用于订阅、请求、定时器、DOM 同步等副作用，而不是普通数据推导。',
      language: 'jsx',
      tags: ['Hooks', '副作用'],
      code: `const visibleItems = React.useMemo(\n  () => items.filter((item) => item.name.includes(keyword)),\n  [items, keyword],\n);`,
    },
  ],
  vue: [
    {
      level: 'junior',
      title: 'v-if 和 v-show 的差异是什么？',
      focus: '是否理解真正销毁/创建与纯展示切换的成本差异。',
      answer:
        'v-if 会按条件真正创建和销毁节点，适合低频切换；v-show 通过 CSS display 控制显隐，初始渲染成本更高，但高频切换更合适。是否使用取决于切换频率和初始负担。',
      language: 'vue',
      tags: ['v-if', 'v-show'],
      code: `<template>\n  <Modal v-if=\"visible\" />\n  <div v-show=\"debugPanelVisible\">调试面板</div>\n</template>`,
    },
    {
      level: 'mid',
      title: '为什么不建议直接修改 props？',
      focus: '是否理解单向数据流和父子职责边界。',
      answer:
        'props 是父组件向子组件传递的数据契约，直接修改会破坏单向数据流，导致状态来源混乱。若子组件需要编辑它，应通过局部副本或事件通知父组件更新。',
      language: 'vue',
      tags: ['props', '单向数据流'],
      code: `<script setup>\nconst props = defineProps({count: Number});\nconst emit = defineEmits(['update:count']);\n\nconst increase = () => emit('update:count', props.count + 1);\n</script>`,
    },
  ],
  engineering: [
    {
      level: 'junior',
      title: '为什么要做代码分割？',
      focus: '是否理解首屏与按需加载的平衡。',
      answer:
        '代码分割可以把不必首屏加载的模块延后下载，降低初始 bundle 体积，改善首屏性能。但分割不是越细越好，过多小 chunk 也会增加请求与调度成本。',
      language: 'js',
      tags: ['Code Splitting', '首屏'],
      code: `const SettingsPage = React.lazy(() => import('./SettingsPage'));`,
    },
    {
      level: 'mid',
      title: '依赖升级为什么需要分层策略？',
      focus: '是否知道基础依赖、构建依赖和业务依赖的风险不同。',
      answer:
        '因为不同依赖对构建和运行时的影响范围不同。底层构建依赖升级需要先看插件兼容和构建链路，运行时依赖则更关注行为变更和回归风险。分层治理能降低一次性升级带来的系统性故障。',
      language: 'json',
      tags: ['依赖治理', '升级策略'],
      code: `{\n  \"dependencies\": {\n    \"react\": \"^18.3.1\"\n  },\n  \"devDependencies\": {\n    \"vite\": \"^7.0.0\"\n  }\n}`,
    },
  ],
  'browser-network-security': [
    {
      level: 'junior',
      title: 'Cookie、LocalStorage、SessionStorage 分别适合存什么？',
      focus: '是否理解生命周期、容量与请求自动携带行为。',
      answer:
        'Cookie 容量小但会随请求自动携带，适合服务端会话等受控场景；LocalStorage 持久化更长，适合非敏感本地偏好；SessionStorage 生命周期与标签页会话一致，适合同标签页临时状态。敏感令牌存储还要结合安全策略判断。',
      language: 'js',
      tags: ['存储', 'Cookie'],
      code: `localStorage.setItem('theme', 'dark');\nsessionStorage.setItem('draft', 'hello');\ndocument.cookie = 'locale=zh-Hans; path=/';`,
    },
    {
      level: 'mid',
      title: 'XSS 和 CSRF 的区别是什么？',
      focus: '是否能区分攻击面与防护手段。',
      answer:
        'XSS 是攻击者把恶意脚本注入到页面中执行，核心防护是输出转义、CSP、避免危险 HTML 注入；CSRF 是诱导已登录用户发起非预期请求，核心防护是 SameSite Cookie、CSRF Token 和关键操作二次确认。',
      language: 'http',
      tags: ['XSS', 'CSRF'],
      code: `Set-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Lax`,
    },
  ],
  performance: [
    {
      level: 'junior',
      title: '图片优化通常从哪些角度入手？',
      focus: '是否知道格式、尺寸、懒加载和占位策略。',
      answer:
        '常见手段包括选择更合适的格式如 AVIF/WebP、按展示尺寸输出多规格资源、懒加载非首屏图片、给出宽高避免布局抖动，以及为关键首屏图做 preload 或优先加载。',
      language: 'html',
      tags: ['图片', 'LCP'],
      code: `<img\n  src=\"/cover-960.avif\"\n  srcset=\"/cover-480.avif 480w, /cover-960.avif 960w\"\n  sizes=\"(max-width: 768px) 100vw, 50vw\"\n  loading=\"lazy\"\n  width=\"960\"\n  height=\"540\"\n/>`,
    },
    {
      level: 'mid',
      title: 'CLS 为什么经常被忽视？怎么减少？',
      focus: '是否理解布局偏移来源和资源占位的重要性。',
      answer:
        'CLS 常被忽视是因为它不一定影响本地开发感受，但会显著影响线上阅读和点击体验。减少 CLS 的关键是给图片和广告位预留尺寸，避免内容异步插入挤压布局，并谨慎处理字体替换。',
      language: 'css',
      tags: ['CLS', '布局稳定性'],
      code: `.hero-image {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  object-fit: cover;\n}`,
    },
  ],
  accessibility: [
    {
      level: 'junior',
      title: '为什么表单控件要有可见标签或可读名称？',
      focus: '是否理解读屏和点击范围体验。',
      answer:
        '表单控件没有可见标签或可读名称时，屏幕阅读器用户很难知道它的用途，鼠标和触控用户也失去通过 label 扩大点击区域的体验。可访问名称是基础，不是附加项。',
      language: 'html',
      tags: ['表单', '读屏'],
      code: `<label for=\"search\">搜索题目</label>\n<input id=\"search\" name=\"search\" type=\"search\" />`,
    },
    {
      level: 'mid',
      title: '为什么只用颜色传达状态是不够的？',
      focus: '是否考虑色弱、屏幕质量与无视觉提示场景。',
      answer:
        '只用颜色表达成功、失败、警告时，色觉缺陷用户和低对比环境用户可能无法准确区分。应结合图标、文案、形状或额外语义提示，保证状态信息不依赖单一感官通道。',
      language: 'html',
      tags: ['状态提示', '颜色对比'],
      code: `<p role=\"status\">\n  <strong>成功：</strong> 简历已提交。\n</p>`,
    },
  ],
  testing: [
    {
      level: 'junior',
      title: '为什么覆盖率高不等于测试质量高？',
      focus: '是否理解覆盖率只是辅助指标。',
      answer:
        '覆盖率只能说明代码被执行过多少，不能保证断言有效，也不能证明关键路径被正确覆盖。高质量测试更关注风险覆盖、关键行为验证和可维护性，而不是单纯追求数字。',
      language: 'js',
      tags: ['覆盖率', '质量'],
      code: `expect(screen.getByRole('heading', {name: '前端面试题库'})).toBeInTheDocument();`,
    },
    {
      level: 'mid',
      title: 'Mock 太多为什么会让测试失真？',
      focus: '是否知道隔离与真实度的平衡。',
      answer:
        'Mock 过多会让测试只验证“你自己写的假世界”，而不是接近真实协作链路的行为。适量 mock 对隔离外部依赖很必要，但关键集成点仍需保留真实交互验证。',
      language: 'js',
      tags: ['Mock', '测试策略'],
      code: `server.use(\n  http.get('/api/questions', () => HttpResponse.json([{id: 1, title: 'CSS'}])),\n);`,
    },
  ],
  'node-bff': [
    {
      level: 'junior',
      title: 'Node.js 里的事件循环和浏览器里的理解有什么共通点？',
      focus: '是否知道两者都有任务调度模型，但运行环境不同。',
      answer:
        '两者都基于事件循环处理异步任务，但浏览器更关注 UI、网络和渲染，Node.js 更关注 I/O、计时器和服务端任务调度。面试里重要的是理解“非阻塞不等于没有等待”。',
      language: 'js',
      tags: ['事件循环', 'Node.js'],
      code: `setTimeout(() => console.log('timer'), 0);\nPromise.resolve().then(() => console.log('microtask'));\nconsole.log('sync');`,
    },
    {
      level: 'mid',
      title: '为什么 BFF 层也要做缓存和限流？',
      focus: '是否理解中间层稳定性职责。',
      answer:
        'BFF 虽然不是底层服务，但它直接承接前端流量，若不做缓存、限流和降级，很容易把下游服务压力放大或让故障直接传递到前端用户。稳定性职责不能完全外包给后端。',
      language: 'js',
      tags: ['缓存', '限流'],
      code: `const cache = new Map();\n\nfunction getCached(key, fetcher) {\n  if (cache.has(key)) return cache.get(key);\n  const task = fetcher();\n  cache.set(key, task);\n  return task;\n}`,
    },
  ],
  'react-native': [
    {
      level: 'junior',
      title: 'StyleSheet.create 的价值是什么？',
      focus: '是否知道它不只是写法好看。',
      answer:
        'StyleSheet.create 可以让样式对象更集中、更易维护，也有助于静态检查和一些运行时优化。它不是性能银弹，但比在 render 中频繁创建匿名样式对象更稳定。',
      language: 'tsx',
      tags: ['样式', '性能'],
      code: `const styles = StyleSheet.create({\n  container: {\n    padding: 16,\n    borderRadius: 12,\n  },\n});`,
    },
    {
      level: 'mid',
      title: '为什么 RN 列表优化经常先看 keyExtractor 和 item 纯度？',
      focus: '是否知道列表性能不仅是窗口大小参数问题。',
      answer:
        '稳定的 key 能帮助列表正确复用节点，而每个 item 组件是否纯净、是否频繁接收新引用，也直接影响重渲染数量。很多性能问题不是 FlatList 参数不对，而是数据和渲染模型本身不稳定。',
      language: 'tsx',
      tags: ['FlatList', '重渲染'],
      code: `const renderItem = React.useCallback(\n  ({item}) => <MessageRow item={item} />,\n  [],\n);`,
    },
  ],
  git: [
    {
      level: 'junior',
      title: 'git fetch 和 git pull 的区别是什么？',
      focus: '是否理解“获取更新”和“获取并合并”的区别。',
      answer:
        'git fetch 只把远端提交更新到本地远程跟踪分支，不会改动当前工作分支；git pull 通常等于 fetch 再 merge 或 rebase，会直接尝试把更新带到当前分支。',
      language: 'bash',
      tags: ['fetch', 'pull'],
      code: `git fetch origin\ngit log HEAD..origin/main --oneline`,
    },
    {
      level: 'mid',
      title: '冲突解决后为什么还要认真检查 diff？',
      focus: '是否知道“冲突已消失”不代表“逻辑已正确”。',
      answer:
        'Git 只能帮你识别文本冲突，不能理解业务语义。冲突消掉后仍可能出现逻辑遗漏、条件被覆盖、删除了必要代码等问题，所以必须重新检查 diff 并尽量跑测试验证。',
      language: 'bash',
      tags: ['冲突', '代码审查'],
      code: `git status\ngit diff --staged`,
    },
  ],
};

export const interviewCategories = [...baseInterviewCategories, ...repoInterviewCategories].map((category) => ({
  ...category,
  questions: [
    ...category.questions,
    ...(extraQuestionsBySlug[category.slug] ?? []),
    ...(megaExtraQuestionsBySlug[category.slug] ?? []),
    ...(repoExtraQuestionsBySlug[category.slug] ?? []),
  ],
}));

export const categoryDocs = interviewCategories.map((item) => ({
  id: item.slug,
  title: `${item.title} 面试题`,
  slug: `/categories/${item.slug}`,
}));

export function getInterviewCategory(slug) {
  return interviewCategories.find((item) => item.slug === slug);
}
