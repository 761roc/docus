const q = (level, title, focus, answer, language, tags, code, extra = {}) => ({
  level,
  title,
  focus,
  answer,
  language,
  tags,
  code,
  ...extra,
});

export const repoExtraQuestionsBySlug = {
  'html-browser': [
    q(
      'junior',
      'Frontend Master Prep：`defer` 和 `async` 加载脚本的差异是什么？',
      '是否理解脚本下载与执行时机对渲染的影响。',
      '`async` 下载完成后会立即执行，执行顺序不保证，适合彼此独立的脚本；`defer` 会在 HTML 解析完成后按文档顺序执行，更适合依赖 DOM 或脚本之间有顺序的场景。',
      'html',
      ['script', '加载顺序', '仓库整理'],
      `<script async src="/analytics.js"></script>\n<script defer src="/app.js"></script>`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么语义化标题层级会影响可维护性和 SEO？',
      '是否理解标题结构不仅是样式问题。',
      '标题层级能帮助搜索引擎、读屏软件和开发者快速理解文档结构。`h1-h6` 若被随意跳级或完全被 div 替代，内容层次会变得模糊，后续维护和自动化提取都会受影响。',
      'html',
      ['标题结构', '语义化', '仓库整理'],
      `<main>\n  <h1>前端面试题库</h1>\n  <section>\n    <h2>JavaScript</h2>\n    <h3>事件循环</h3>\n  </section>\n</main>`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么原生表单的 `label`、`fieldset`、`legend` 经常被低估？',
      '是否知道原生表单语义直接关系到可访问性和点击区域。',
      '它们不只是“更规范”，而是直接提升读屏语义、焦点可用性和点击热区体验。尤其复杂表单里，正确分组和关联标签能显著降低后续补 ARIA 的成本。',
      'html',
      ['表单', '无障碍', '仓库整理'],
      `<fieldset>\n  <legend>候选人信息</legend>\n  <label for="name">姓名</label>\n  <input id="name" name="name" />\n</fieldset>`
    ),
  ],
  css: [
    q(
      'junior',
      'Frontend Master Prep：CSS 优先级到底该怎么回答才不显得死记硬背？',
      '是否理解选择器权重只是层叠规则的一部分。',
      '优先级不仅取决于选择器权重，还受到来源、层叠顺序、`!important` 和后声明规则影响。面试里最好把“能不用提高权重就别提高权重”的工程经验一起说出来。',
      'css',
      ['优先级', '层叠', '仓库整理'],
      `.card .title {\n  color: #0f172a;\n}\n\n#app .card .title {\n  color: #1d4ed8;\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：什么情况下会创建新的层叠上下文？',
      '是否理解它和 z-index 失效问题的关系。',
      '`position` 配合 `z-index`、`opacity < 1`、`transform`、`filter` 等都可能创建新的层叠上下文。很多“z-index 为什么不生效”问题，本质不是值不够大，而是比较根本不在同一个上下文里。',
      'css',
      ['层叠上下文', 'z-index', '仓库整理'],
      `.modal {\n  position: relative;\n  z-index: 10;\n}\n\n.panel {\n  transform: translateZ(0);\n}`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么响应式布局不该只理解成媒体查询？',
      '是否能从组件尺寸、自适应排版和内容约束回答。',
      '真正的响应式布局不只是根据视口断点切样式，还包括组件级自适应、内容优先级调整、图片尺寸策略和可读性控制。只会写几个媒体查询，通常还不够。',
      'css',
      ['响应式', '媒体查询', '仓库整理'],
      `@media (max-width: 768px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n}`
    ),
  ],
  javascript: [
    q(
      'junior',
      'Frontend Master Prep：`let`、`const` 和 `var` 的区别是什么？',
      '是否理解块级作用域、变量提升和重复声明的边界。',
      '`var` 是函数作用域，存在变量提升且允许重复声明；`let` 和 `const` 是块级作用域，进入暂时性死区后不能在声明前访问。`const` 不能重新赋值，但若值是对象，内部属性仍可变。',
      'js',
      ['变量声明', '作用域', '仓库整理'],
      `function demo() {\n  if (true) {\n    var legacy = 'var';\n    let scoped = 'let';\n    const fixed = {count: 1};\n    fixed.count += 1;\n  }\n\n  console.log(legacy); // 'var'\n  console.log(scoped); // ReferenceError\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：`==` 和 `===` 的区别，面试里应该怎么答？',
      '是否知道宽松相等的隐式转换成本，而不是只背结论。',
      '`===` 会同时比较类型和值，语义更稳定；`==` 会在比较前发生隐式类型转换，规则复杂且容易埋坑。工程实践里优先使用 `===`，只有在你明确依赖转换规则时才考虑 `==`。',
      'js',
      ['相等比较', '类型转换', '仓库整理'],
      `console.log(0 == false); // true\nconsole.log(0 === false); // false\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false`
    ),
    q(
      'mid',
      'Frontend Master Prep：什么是原型继承？',
      '是否理解 JavaScript 对象复用和查找链路。',
      'JavaScript 对象通过原型链复用属性和方法。对象读取属性时，先查自身，再沿着 `[[Prototype]]` 向上查找，直到 `null`。理解这条链路，才能说清实例方法复用、继承和 `instanceof` 的行为。',
      'js',
      ['原型链', '继承', '仓库整理'],
      `function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.sayHi = function () {\n  return \`Hi, \${this.name}\`;\n};\n\nconst user = new Person('Edy');\nconsole.log(user.sayHi());`
    ),
    q(
      'mid',
      'Frontend Master Prep：`this` 绑定在面试里通常会怎么追问？',
      '是否理解默认绑定、隐式绑定、显式绑定和箭头函数差异。',
      '`this` 不是函数定义时固定死的，而是大多取决于调用方式。普通函数要结合调用点判断，`call/apply/bind` 可以显式指定；箭头函数则会捕获外层词法 `this`。',
      'js',
      ['this', '函数调用', '仓库整理'],
      `const user = {\n  name: 'Ada',\n  say() {\n    console.log(this.name);\n  },\n};\n\nconst fn = user.say;\nfn();\nuser.say();`
    ),
    q(
      'senior',
      'Frontend Master Prep：闭包为什么既是能力题，也是风险题？',
      '是否能从状态封装和内存保留两面回答。',
      '闭包能封装私有状态、延长变量生命周期，是很多模块化和函数式技巧的基础；但若不清楚引用链，也可能让原本该释放的数据被保留下来，造成难察觉的内存问题。',
      'js',
      ['闭包', '内存', '仓库整理'],
      `function createCache() {\n  const store = new Map();\n  return {\n    get(key) {\n      return store.get(key);\n    },\n    set(key, value) {\n      store.set(key, value);\n    },\n  };\n}`
    ),
  ],
  typescript: [
    q(
      'junior',
      'Frontend Master Prep：TypeScript 为什么采用结构化类型系统？',
      '是否能解释“看形状兼容”带来的便利与风险。',
      'TypeScript 更关注值的结构是否匹配，而不是名义上的类型名是否相同。这让对象字面量、接口组合和第三方数据接入更灵活，但也要求你警惕“形状兼容但语义不兼容”的情况。',
      'ts',
      ['结构类型', '类型兼容', '仓库整理'],
      `interface Point2D {\n  x: number;\n  y: number;\n}\n\nconst point = {x: 1, y: 2, z: 3};\nconst usePoint = (value: Point2D) => value.x + value.y;\n\nusePoint(point);`
    ),
    q(
      'mid',
      'Frontend Master Prep：联合类型和交叉类型分别适合什么场景？',
      '是否能用类型建模真实状态，而不是只记符号。',
      '联合类型适合表达“多种可能之一”，例如请求状态或多形态入参；交叉类型适合把多个能力拼装到同一个对象上。面试时最好结合接口响应、组件 props 或权限模型说明。',
      'ts',
      ['联合类型', '交叉类型', '仓库整理'],
      `type LoadingState = 'idle' | 'loading' | 'success' | 'error';\n\ntype WithTimestamp = {createdAt: string};\ntype User = {id: string; name: string} & WithTimestamp;`
    ),
    q(
      'senior',
      'Frontend Master Prep：什么时候应该给泛型加约束？',
      '是否知道泛型不是越自由越好，边界需要被表达。',
      '当函数或组件内部依赖某些字段、方法或键名时，就应该通过 `extends` 给泛型加约束。这样既保留复用性，也能避免调用方传入完全不满足前提的数据结构。',
      'ts',
      ['泛型', '约束', '仓库整理'],
      `function getById<T extends {id: string}>(items: T[], id: string) {\n  return items.find((item) => item.id === id);\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：判别联合为什么是 TypeScript 高频题？',
      '是否知道它能把运行时分支和类型收窄对齐。',
      '当一组类型都带有稳定的判别字段时，TypeScript 可以在分支判断后自动收窄类型。它特别适合建模请求状态、组件多形态 props 和消息协议。',
      'ts',
      ['判别联合', '类型收窄', '仓库整理'],
      `type Result =\n  | {status: 'success'; data: string[]}\n  | {status: 'error'; message: string};\n\nfunction render(result: Result) {\n  if (result.status === 'success') {\n    return result.data.length;\n  }\n  return result.message;\n}`
    ),
    q(
      'senior',
      'Frontend Master Prep：`never` 在真实项目里有什么价值？',
      '是否知道它不仅是“永远不会返回”的函数类型。',
      '`never` 常被用来做穷尽检查，确保联合类型的所有分支都被覆盖。它的价值在于把遗漏分支从运行时问题前移到编译期。',
      'ts',
      ['never', '穷尽检查', '仓库整理'],
      `function assertNever(value: never): never {\n  throw new Error(String(value));\n}`
    ),
  ],
  react: [
    q(
      'junior',
      'Frontend Master Prep：虚拟 DOM 到底解决了什么问题？',
      '是否能解释它是更新策略抽象，而不是“因为快”。',
      '虚拟 DOM 的核心价值是把界面变更描述成可比较的对象树，让 React 可以统一做 diff、调度和跨平台渲染。它不保证绝对更快，但让组件化和声明式更新变得可实现、可维护。',
      'jsx',
      ['虚拟 DOM', '渲染机制', '仓库整理'],
      `function Profile({user}) {\n  return <h1>{user.name}</h1>;\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么 Hooks 只能在顶层调用？',
      '是否理解 React 依赖调用顺序来关联状态槽位。',
      'React 通过 Hooks 的调用顺序来定位每个 state 和 effect。如果把 Hook 放进条件分支或循环中，顺序就会变化，React 无法正确匹配之前的状态记录，因此官方要求 Hooks 只能在组件顶层或自定义 Hook 顶层调用。',
      'jsx',
      ['Hooks', '规则', '仓库整理'],
      `function Example({visible}) {\n  const [count] = React.useState(0);\n\n  if (!visible) {\n    return null;\n  }\n\n  return <span>{count}</span>;\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：列表渲染时为什么 `key` 很重要？',
      '是否知道 key 影响节点复用、状态保留和重排成本。',
      '`key` 是 React 判断“同一个列表项是否还在”的身份标识。稳定且唯一的 key 能帮助 React 复用正确节点，避免输入框串值、动画错位或不必要的销毁重建。不要用随机数，也不要在会重排的列表里优先用索引。',
      'jsx',
      ['key', '列表渲染', '仓库整理'],
      `function TodoList({items}) {\n  return items.map((item) => <li key={item.id}>{item.label}</li>);\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么 `useEffect` 依赖数组是 React 面试的必问点？',
      '是否理解副作用重跑条件和闭包引用问题。',
      '`useEffect` 的依赖数组决定副作用何时重新执行。依赖漏写会拿到陈旧值，乱写又可能触发无意义重跑。面试里若能把“副作用同步外部系统”这个本质说清楚，会比只背 lint 规则更好。',
      'jsx',
      ['useEffect', '副作用', '仓库整理'],
      `React.useEffect(() => {\n  document.title = keyword;\n}, [keyword]);`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么“状态最小化”是 React 设计题里的核心原则？',
      '是否能识别冗余状态和派生状态。',
      '如果某个值可以从现有 props 或 state 推导出来，就不应该再单独存一份。冗余状态越多，同步点越多，组件就越容易出现数据不一致和调试困难。',
      'jsx',
      ['状态建模', '派生状态', '仓库整理'],
      `function ProductList({items, keyword}) {\n  const visibleItems = items.filter((item) => item.name.includes(keyword));\n  return visibleItems.map((item) => <li key={item.id}>{item.name}</li>);\n}`
    ),
  ],
  engineering: [
    q(
      'junior',
      'Frontend Master Prep：为什么 lockfile 是工程协作的基础设施，而不是可有可无的文件？',
      '是否理解依赖版本可重复安装的重要性。',
      '没有 lockfile，不同人和不同 CI 环境安装出的依赖树可能不同，导致“我这里没问题”一类问题反复出现。它的核心价值是让依赖解析结果可复现。',
      'bash',
      ['lockfile', '依赖治理', '仓库整理'],
      `yarn install --frozen-lockfile`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么前端构建也需要体积预算？',
      '是否理解包体增长是会持续回归的问题。',
      '体积预算不是为了追求某个漂亮数字，而是给团队一个明确的回归警戒线。没有预算门禁，依赖和业务代码会持续膨胀，直到首屏性能明显退化才被动处理。',
      'json',
      ['bundle budget', '治理', '仓库整理'],
      `{\n  "budgets": {\n    "js": "250kb",\n    "css": "80kb"\n  }\n}`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么 CI 缓存和增量构建会成为大型前端仓库的关键优化点？',
      '是否理解工程效率问题在规模下会被放大。',
      '当仓库规模扩大后，最耗时的往往不是单个任务本身，而是每次都重复做全量安装、全量编译和全量测试。合理使用依赖缓存、构建缓存和受影响范围计算，可以显著缩短反馈时间。',
      'txt',
      ['CI', '增量构建', '仓库整理'],
      `缓存依赖 -> 缩短安装\n缓存构建 -> 缩短重复编译\naffected 范围 -> 缩短测试集`
    ),
  ],
  performance: [
    q(
      'junior',
      'Frontend Master Prep：什么是代码分割，为什么它能改善首屏？',
      '是否理解按路由或模块拆包对关键路径的意义。',
      '代码分割会把不必首屏立刻执行的逻辑拆到异步 chunk 中，让浏览器先下载更小的入口包。这样能减少首屏解析与执行压力，但要注意切分过细也会带来额外请求和调度成本。',
      'jsx',
      ['Code Splitting', '首屏优化', '仓库整理'],
      `const SettingsPage = React.lazy(() => import('./SettingsPage'));\n\n<Suspense fallback={<Spinner />}>\n  <SettingsPage />\n</Suspense>`
    ),
    q(
      'mid',
      'Frontend Master Prep：防抖和节流分别解决什么问题？',
      '是否能把输入类事件和持续流事件区分清楚。',
      '防抖适合“停止一段时间后再执行”，如搜索建议；节流适合“持续触发时按固定频率执行”，如滚动监听和拖拽。面试里最好顺带说明取消、尾触发和请求竞态问题。',
      'js',
      ['防抖', '节流', '仓库整理'],
      `function throttle(fn, delay = 200) {\n  let last = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - last >= delay) {\n      last = now;\n      fn(...args);\n    }\n  };\n}`
    ),
    q(
      'senior',
      'Frontend Master Prep：LCP、CLS、INP 分别应该怎么理解？',
      '是否真正能把体验指标和页面问题对应起来。',
      'LCP 关注主要内容何时呈现，CLS 关注布局是否发生意外位移，INP 关注用户交互后到页面响应完成的延迟。它们分别对应加载、稳定性和交互三类体验问题，治理方式也不同。',
      'js',
      ['Core Web Vitals', '指标', '仓库整理'],
      `new PerformanceObserver((entryList) => {\n  for (const entry of entryList.getEntries()) {\n    console.log(entry.name, entry.value);\n  }\n}).observe({type: 'largest-contentful-paint', buffered: true});`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么图片优化几乎总在性能面试里出现？',
      '是否理解图片往往是页面中体积最大的资源。',
      '图片资源通常占据大量带宽，因此尺寸控制、现代格式、懒加载和首屏关键图优先级，往往比单纯压缩几段 JS 更直接影响用户感知速度。',
      'html',
      ['图片优化', '加载性能', '仓库整理'],
      `<img src="/cover.avif" alt="cover" loading="lazy" width="960" height="540" />`
    ),
    q(
      'senior',
      'Frontend Master Prep：什么时候应该考虑 Web Worker？',
      '是否知道它适合把重 CPU 计算移出主线程。',
      '当代码有明显的解析、压缩、加密、复杂计算或大数据处理任务，并且会阻塞交互时，可以考虑 Web Worker。它不能操作 DOM，但很适合把主线程从重计算里解放出来。',
      'js',
      ['Web Worker', '主线程', '仓库整理'],
      `const worker = new Worker('/worker.js');\nworker.postMessage({type: 'parse', payload: bigJson});`
    ),
  ],
  testing: [
    q(
      'junior',
      'Frontend Master Prep：前端为什么需要测试金字塔思维？',
      '是否理解不同测试层级的数量、成本和反馈速度。',
      '测试金字塔强调用更多低成本、快反馈的单测和集成测试打底，只把关键链路交给更贵、更慢的 E2E。这样既能控制成本，也能避免所有问题都堆到浏览器端再发现。',
      'js',
      ['测试策略', '测试分层', '仓库整理'],
      `export function sum(a, b) {\n  return a + b;\n}\n\ntest('sum', () => {\n  expect(sum(1, 2)).toBe(3);\n});`
    ),
    q(
      'mid',
      'Frontend Master Prep：什么情况下应该 mock，什么情况下不该 mock？',
      '是否知道 mock 是隔离手段，不是默认动作。',
      '当依赖不稳定、成本高或与你要验证的逻辑无关时，可以 mock；但若 mock 掉了真正的协作边界，测试就会失真。原则是只 mock 你不想在当前测试层验证的部分。',
      'js',
      ['Mock', '测试边界', '仓库整理'],
      `vi.spyOn(api, 'fetchUser').mockResolvedValue({id: '1', name: 'Ada'});`
    ),
    q(
      'senior',
      'Frontend Master Prep：如何降低 E2E 的 flaky 问题？',
      '是否有针对等待策略和测试数据的治理经验。',
      '降低 flaky 的关键是让等待条件稳定且可观测，例如等待角色文本、网络完成或业务状态，而不是硬编码 sleep。再配合隔离测试数据、减小环境差异和保留截图日志，稳定性会明显提升。',
      'js',
      ['E2E', 'Flaky', '仓库整理'],
      `await page.getByRole('button', {name: '提交'}).click();\nawait expect(page.getByText('提交成功')).toBeVisible();`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么 Testing Library 更强调按角色和文本查元素？',
      '是否理解测试应该靠近用户感知，而不是 DOM 结构细节。',
      '通过角色、标签文本和可见内容查询元素，更接近真实用户如何找到并操作界面，也能减少因 DOM 结构重构带来的无效测试失败。',
      'js',
      ['Testing Library', '查询策略', '仓库整理'],
      `screen.getByRole('button', {name: '登录'});\nscreen.getByLabelText('邮箱');`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么快照测试不能成为前端测试的主力？',
      '是否理解快照对视觉和语义变化的区分能力有限。',
      '快照适合捕获稳定、小范围且结构明确的输出，但一旦组件复杂，快照很容易变成噪音，导致大家习惯性更新而不审查。更有价值的测试通常仍是行为断言和关键状态验证。',
      'js',
      ['Snapshot', '测试价值', '仓库整理'],
      `expect(container.firstChild).toMatchSnapshot();`
    ),
  ],
  accessibility: [
    q(
      'junior',
      'Frontend Master Prep：为什么“能点”不等于“可访问”？',
      '是否理解键盘用户和读屏用户的交互要求。',
      '鼠标能操作并不代表键盘和辅助技术用户也能操作。一个真正可访问的交互控件需要有正确语义、可聚焦能力、状态反馈和键盘路径，而不是只在视觉上看起来像按钮。',
      'html',
      ['语义化', '键盘访问', '仓库整理'],
      `<button type="button" aria-pressed="false">收藏</button>`
    ),
    q(
      'mid',
      'Frontend Master Prep：自定义下拉框最容易遗漏哪些无障碍点？',
      '是否知道焦点、角色和键盘导航缺一不可。',
      '自定义下拉框常见问题是没有正确焦点管理、没有暴露展开状态、上下方向键不可用，或者关闭后焦点丢失。面试时如果你能从 roving tabindex 或 aria-activedescendant 说明，会更有说服力。',
      'html',
      ['下拉框', 'ARIA', '仓库整理'],
      `<button aria-haspopup="listbox" aria-expanded="true" aria-controls="city-list">\n  选择城市\n</button>\n<ul id="city-list" role="listbox">\n  <li role="option" aria-selected="true">上海</li>\n</ul>`
    ),
    q(
      'senior',
      'Frontend Master Prep：什么时候应该优先改原生标签，而不是继续叠加 ARIA？',
      '是否理解“原生优先”原则。',
      '如果一个 `div` 被改造成按钮、链接、输入框，通常最好的修复不是继续加角色和属性，而是直接换成真正的原生元素。ARIA 是补充层，不该被拿来掩盖错误的 DOM 结构。',
      'html',
      ['ARIA', '原生优先', '仓库整理'],
      `<a href="/jobs/frontend">查看前端岗位</a>`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么焦点可见性不该被统一去掉？',
      '是否理解键盘用户依赖焦点指示。',
      '很多项目为了“好看”直接把 outline 去掉，这会让键盘用户失去当前操作位置。正确做法不是隐藏焦点，而是设计更合适的焦点样式，例如 `:focus-visible`。',
      'css',
      ['focus-visible', '键盘访问', '仓库整理'],
      `.button:focus-visible {\n  outline: 3px solid #2563eb;\n  outline-offset: 2px;\n}`
    ),
    q(
      'senior',
      'Frontend Master Prep：`aria-live` 适合解决什么问题？',
      '是否知道动态内容更新也需要被辅助技术感知。',
      '对于搜索结果数量变化、表单提交反馈、购物车更新等动态消息，屏幕阅读器默认未必会主动播报。`aria-live` 可以让这些变化以更友好的方式通知用户。',
      'html',
      ['aria-live', '动态播报', '仓库整理'],
      `<div aria-live="polite">已保存 3 条修改</div>`
    ),
  ],
  'node-bff': [
    q(
      'junior',
      'Frontend Master Prep：为什么 Node.js 适合 I/O 密集型场景，不适合重 CPU 计算直接堆在主线程？',
      '是否理解单线程事件循环对吞吐的影响。',
      'Node.js 擅长通过事件循环处理大量 I/O 请求，但如果把重 CPU 计算直接塞进主线程，会阻塞后续请求处理，导致整条服务链路延迟上升。面试里要把“高并发”和“高计算”分开理解。',
      'js',
      ['Node.js', '事件循环', '仓库整理'],
      `app.get('/parse', (req, res) => {\n  const result = heavyCompute(req.query.payload);\n  res.json(result);\n});`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么 BFF 经常要做字段裁剪和接口聚合？',
      '是否理解它的价值在于贴近页面，而不是简单转发。',
      '前端页面往往不需要下游服务的全部字段，也不希望自己串多次请求再拼装。BFF 的价值之一，就是把多个服务响应裁剪、聚合成更适合页面消费的数据模型，减少前端复杂度和网络往返。',
      'js',
      ['BFF', '接口聚合', '仓库整理'],
      `app.get('/api/home', async (req, res) => {\n  const [profile, feed] = await Promise.all([getProfile(), getFeed()]);\n  res.json({userName: profile.name, feed});\n});`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么服务端日志、traceId 和错误分层对 BFF 排障很重要？',
      '是否具备中间层可观测性意识。',
      'BFF 夹在前端和多个下游之间，如果没有 traceId、结构化日志和错误分类，线上问题会很难判断到底卡在入口层、聚合层还是下游服务。它的排障复杂度通常高于单体前端页面。',
      'js',
      ['日志', '可观测性', '仓库整理'],
      `app.use((req, res, next) => {\n  req.traceId = crypto.randomUUID();\n  next();\n});`
    ),
  ],
  'react-native': [
    q(
      'junior',
      'Frontend Master Prep：React Native 和 React DOM 的核心差异是什么？',
      '是否知道同样是 React，但渲染目标和组件集合不同。',
      'React Native 沿用 React 的组件和状态模型，但最终渲染到原生视图而不是 DOM。它没有浏览器布局树和 HTML 标签，很多能力要通过 RN 组件或原生模块来承接。',
      'tsx',
      ['React Native', '渲染目标', '仓库整理'],
      `import {Text, View} from 'react-native';\n\nexport function Card() {\n  return <View><Text>Hello RN</Text></View>;\n}`
    ),
    q(
      'mid',
      'Frontend Master Prep：为什么 RN 性能题经常会追问图片和列表同时出现的页面？',
      '是否理解移动端卡顿往往来自滚动中的复合开销。',
      '在移动端，长列表、图片解码、布局计算和 JS 执行很容易叠加成卡顿。列表性能优化如果不把图片尺寸、缓存和占位一起考虑，通常治标不治本。',
      'tsx',
      ['图片', '列表性能', '仓库整理'],
      `<FlatList\n  data={photos}\n  renderItem={({item}) => <Image source={{uri: item.url}} style={{width: 120, height: 120}} />}\n/>`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么 RN 项目更强调真机调试和线上埋点？',
      '是否理解设备碎片化和复现成本。',
      'React Native 应用会受到机型、系统版本、内存、网络和原生依赖版本影响，很多问题在模拟器里并不明显。真机调试和线上埋点能显著提高定位效率，是移动端工程实践的重要组成。',
      'js',
      ['真机调试', '埋点', '仓库整理'],
      `track('screen_view', {\n  screen: 'InterviewTopic',\n  platform: Platform.OS,\n});`
    ),
  ],
  'browser-network-security': [
    q(
      'mid',
      'Frontend Master Prep：Cookie、localStorage 和 sessionStorage 该怎么区分？',
      '是否知道存储位置、生命周期和发送时机差异。',
      'Cookie 会在满足域和路径规则时自动随请求发送，适合服务端会话协作；localStorage 持久保存在浏览器本地；sessionStorage 只在当前标签页会话里有效。面试里还要补充容量、安全和跨标签页边界。',
      'js',
      ['存储', 'Cookie', '仓库整理'],
      `localStorage.setItem('token', 'abc');\nsessionStorage.setItem('draft', 'hello');\ndocument.cookie = 'theme=dark; Path=/; Secure; SameSite=Lax';`
    ),
    q(
      'mid',
      'Frontend Master Prep：事件委托为什么适合高频列表？',
      '是否理解事件冒泡和监听器规模之间的关系。',
      '事件委托把监听器挂在父节点上，借助事件冒泡识别具体触发源，适合动态列表和大批量节点。这样能减少监听器数量，也让新增项不必重复绑事件。',
      'js',
      ['事件委托', 'DOM', '仓库整理'],
      `list.addEventListener('click', (event) => {\n  const item = event.target.closest('[data-id]');\n  if (!item) return;\n  console.log(item.dataset.id);\n});`
    ),
    q(
      'senior',
      'Frontend Master Prep：XSS 防护为什么不能只靠转义？',
      '是否具备分层安全防护意识。',
      '输出转义很重要，但不够。真实项目里还需要输入校验、CSP、危险 HTML 白名单策略、富文本清洗和第三方脚本治理。面试时能把“多层防线”讲清楚，比只背一个概念更强。',
      'http',
      ['XSS', '安全', '仓库整理'],
      `Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'`
    ),
    q(
      'mid',
      'Frontend Master Prep：`SameSite` Cookie 为什么会在安全面试里高频出现？',
      '是否理解它和 CSRF 风险的关系。',
      '`SameSite` 可以限制浏览器在跨站请求中是否自动携带 Cookie，因此是防御 CSRF 的重要一层。常见取值有 `Strict`、`Lax` 和 `None`，不同业务场景取舍不同。',
      'http',
      ['Cookie', 'SameSite', '仓库整理'],
      `Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Lax`
    ),
    q(
      'senior',
      'Frontend Master Prep：为什么 HTTPS 不只是“地址栏有个锁”？',
      '是否能从机密性、完整性和身份校验回答。',
      'HTTPS 提供加密传输、数据完整性校验和服务端身份认证，防止内容被窃听或篡改。对前端来说，它不仅影响安全，也关系到 Service Worker、HTTP/2 等现代能力能否使用。',
      'http',
      ['HTTPS', 'TLS', '仓库整理'],
      `Strict-Transport-Security: max-age=31536000; includeSubDomains`
    ),
  ],
};

export const repoInterviewCategories = [
  {
    slug: 'coding-challenges',
    title: '手写与编码题',
    eyebrow: 'Frontend Master Prep / Coding Challenges',
    description:
      '参考仓库中 coding challenge 的常见考法整理，覆盖函数控制、数据处理、Promise 组合和常见手写题。',
    summary: '手写题、函数控制、数据结构、Promise 组合',
    stats: [
      {label: '来源', value: 'Coding Challenges'},
      {label: '常见追问', value: 'debounce / throttle / curry / Promise'},
    ],
    focusAreas: ['函数控制', '数组对象处理', '异步手写能力'],
    questions: [
      q(
        'junior',
        '手写 `debounce` 时，最基本的版本需要解决什么问题？',
        '是否理解“短时间频繁触发，只执行最后一次”。',
        '最基础的 `debounce` 需要在连续触发期间重置计时器，只让最后一次调用在等待时间结束后执行。它常用于搜索输入、窗口 resize 等高频场景。',
        'js',
        ['debounce', '手写题'],
        `function debounce(fn, delay = 300) {\n  let timer = null;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}`
      ),
      q(
        'mid',
        '手写 `throttle` 时，为什么面试官会追问 leading 和 trailing？',
        '是否知道节流不只是“隔一段时间执行一次”。',
        '真实节流题常会继续追问首触发、尾触发、取消和上下文透传，因为业务里经常需要更细的控制。只写出最基础版本，通常只是及格线。',
        'js',
        ['throttle', '手写题'],
        `function throttle(fn, delay = 200) {\n  let lastTime = 0;\n  return function (...args) {\n    const now = Date.now();\n    if (now - lastTime >= delay) {\n      lastTime = now;\n      fn.apply(this, args);\n    }\n  };\n}`
      ),
      q(
        'mid',
        '如何手写一个数组扁平化函数？面试里通常会追问什么？',
        '是否能写出递归或栈方案，并说明边界。',
        '数组扁平化是典型的数据处理题，除了能写出来，面试官还可能追问深度参数、非数组值保留、性能和是否能用迭代方式避免深递归。',
        'js',
        ['flatten', '数组处理'],
        `function flatten(input) {\n  return input.reduce((result, item) => {\n    if (Array.isArray(item)) {\n      return result.concat(flatten(item));\n    }\n    return result.concat(item);\n  }, []);\n}`
      ),
      q(
        'mid',
        '手写 `Promise.all` 时，核心边界有哪些？',
        '是否理解结果顺序、完成计数和失败短路。',
        '`Promise.all` 的关键点是保持结果顺序、统计完成数量，并在任意一个 Promise 失败时立即 reject。很多实现只会收集结果，却忽略空数组和非 Promise 值的兼容处理。',
        'js',
        ['Promise.all', '手写题'],
        `function promiseAll(tasks) {\n  return new Promise((resolve, reject) => {\n    const result = [];\n    let completed = 0;\n\n    if (tasks.length === 0) {\n      resolve([]);\n      return;\n    }\n\n    tasks.forEach((task, index) => {\n      Promise.resolve(task)\n        .then((value) => {\n          result[index] = value;\n          completed += 1;\n          if (completed === tasks.length) {\n            resolve(result);\n          }\n        })\n        .catch(reject);\n    });\n  });\n}`
      ),
      q(
        'senior',
        '实现 `curry` 时，为什么要关注参数长度和链式调用停止条件？',
        '是否知道函数柯里化题真正考的是调用模型。',
        '柯里化不是简单返回一个嵌套函数，而是要根据原函数参数个数决定什么时候真正执行。面试里如果你能把占位符、变长参数和 `this` 透传也提到，会更完整。',
        'js',
        ['curry', '函数式'],
        `function curry(fn, ...args) {\n  return args.length >= fn.length\n    ? fn(...args)\n    : (...rest) => curry(fn, ...args, ...rest);\n}`
      ),
      q(
        'senior',
        '为什么 LRU Cache 是高频手写题？',
        '是否理解它同时考察数据结构选型和复杂度。',
        'LRU Cache 能考 Map、双向链表思维和复杂度意识。即使你最终用 `Map` 的插入顺序快速实现，也应该说明 O(1) 访问和淘汰的设计目标。',
        'js',
        ['LRU', '数据结构'],
        `class LRUCache {\n  constructor(limit = 2) {\n    this.limit = limit;\n    this.cache = new Map();\n  }\n\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const value = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, value);\n    return value;\n  }\n\n  set(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    this.cache.set(key, value);\n    if (this.cache.size > this.limit) {\n      const oldestKey = this.cache.keys().next().value;\n      this.cache.delete(oldestKey);\n    }\n  }\n}`
      ),
      q(
        'mid',
        '深拷贝题为什么现在常会追问 `structuredClone`？',
        '是否知道现代原生能力改变了手写题背景。',
        '如今很多纯数据结构可以直接用 `structuredClone` 处理，因此面试里更重要的是说清它的适用边界，比如函数、DOM 节点、类实例和特殊对象不一定适合直接照搬。',
        'js',
        ['deep clone', 'structuredClone'],
        `const state = {user: {name: 'Ada'}};\nconst cloned = structuredClone(state);`
      ),
      q(
        'senior',
        '为什么手写题最后常会追问“线上还能直接这么写吗”？',
        '是否理解面试实现和生产实现的差距。',
        '面试题通常用来验证你是否掌握原理，但生产实现往往还要考虑类型约束、取消、错误处理、边界兼容和测试覆盖。能主动说出这些差距，会比只给出答案更像真实工程师。',
        'txt',
        ['工程化', '手写题'],
        `面试实现 -> 验证原理\n线上实现 -> 还要补边界、兼容、测试与监控`
      ),
    ],
  },
  {
    slug: 'flashcards',
    title: '高频闪卡速记',
    eyebrow: 'Frontend Master Prep / Flashcards',
    description:
      '基于仓库 `19-flashcards` 的高频问答卡整理，适合面试前快速回顾高频概念、代码输出题和易混点。',
    summary: '速记卡、代码输出、高频概念、面试前复盘',
    stats: [
      {label: '来源', value: '19-flashcards'},
      {label: '常见追问', value: 'hoisting / code output / JWT / React Hooks'},
    ],
    focusAreas: ['高频概念速记', '代码输出判断', '易混点对比'],
    questions: [
      q(
        'junior',
        '闪卡：什么是 JavaScript 闭包？',
        '是否能用 1-2 句话清晰说出闭包定义和用途。',
        '闭包是一个函数以及它创建时所处词法作用域的组合。即使外层函数已经返回，内部函数依然可以访问外层变量，因此常被用于封装私有状态和维持数据。',
        'js',
        ['Flashcard', '闭包'],
        `function createCounter() {\n  let count = 0;\n  return () => ++count;\n}`
      ),
      q(
        'mid',
        '闪卡：为什么 `useState` 的更新有时更推荐函数式写法？',
        '是否理解批量更新和陈旧闭包问题。',
        '当新状态依赖旧状态时，函数式更新 `setState(prev => prev + 1)` 更稳，因为它基于 React 提供的最新前值计算，能避免批量更新和闭包捕获导致的旧值问题。',
        'jsx',
        ['Flashcard', 'useState'],
        `setCount((prev) => prev + 1);`
      ),
      q(
        'mid',
        '闪卡：JWT 的三段式结构是什么？',
        '是否知道 JWT 不只是一个字符串，而是有清晰结构。',
        'JWT 通常由三段用点号连接的 Base64URL 编码内容组成：Header、Payload 和 Signature。Header 描述算法，Payload 放声明信息，Signature 用于验签防篡改。',
        'txt',
        ['Flashcard', 'JWT'],
        `header.payload.signature`
      ),
      q(
        'mid',
        '闪卡：这段代码输出什么？为什么？',
        '是否理解 `var` 提升只提升声明、不提升赋值。',
        '会输出 `undefined`。因为 `var x` 的声明会在编译阶段提升到当前作用域顶部，但赋值 `x = 5` 仍留在原位置执行。',
        'js',
        ['Flashcard', 'Hoisting', '代码输出'],
        `console.log(x);\nvar x = 5;`
      ),
      q(
        'mid',
        '闪卡：这段循环为什么输出 `3 3 3`？',
        '是否理解 `var` 是函数作用域，以及闭包按引用捕获变量。',
        '因为 `var i` 在整个循环里只有一个共享绑定，三个 `setTimeout` 回调捕获的是同一个 `i`。等回调执行时循环已结束，因此都读到 `3`。',
        'js',
        ['Flashcard', '闭包', '代码输出'],
        `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}`
      ),
      q(
        'senior',
        '闪卡：为什么 `NaN === NaN` 是 `false`，但 `Object.is(NaN, NaN)` 是 `true`？',
        '是否知道 `NaN` 在相等比较中的特殊规则。',
        '按照 JavaScript 规范，`NaN` 是唯一一个不等于自身的值，所以 `NaN === NaN` 为 `false`。`Object.is` 对少数边界值采用更精确的 SameValue 比较，因此能正确判断两个 `NaN` 相等。',
        'js',
        ['Flashcard', 'NaN', 'Object.is'],
        `console.log(NaN === NaN);\nconsole.log(Object.is(NaN, NaN));`
      ),
      q(
        'mid',
        '闪卡：REST 和 GraphQL 的核心差异怎么一句话概括？',
        '是否能快速区分多端点资源接口和单端点按需查询。',
        'REST 通常是多个资源端点，容易出现过取或少取；GraphQL 倾向单端点查询，客户端按需声明字段，但服务端复杂度和缓存策略也会更高。',
        'txt',
        ['Flashcard', 'REST', 'GraphQL'],
        `REST -> 多端点资源模型\nGraphQL -> 单端点按需查询`
      ),
      q(
        'senior',
        '闪卡：面试前最后 15 分钟更适合怎么用这些速记卡？',
        '是否知道速记卡更适合主动回忆，而不是被动浏览。',
        '更好的方式是看问题、遮住答案，先口头说出自己的版本，再核对是否缺了关键点。闪卡的价值在于激活检索，而不是临时死记答案。',
        'txt',
        ['Flashcard', '复习策略'],
        `看题 -> 先说答案 -> 再核对关键词 -> 标记薄弱点`
      ),
    ],
  },
  {
    slug: 'async-javascript',
    title: '异步 JavaScript',
    eyebrow: 'Frontend Master Prep / Async JavaScript',
    description:
      '基于仓库 `02_Async_JavaScript` 整理，重点覆盖事件循环、Promise、async/await 以及并发控制这类高频异步题。',
    summary: '事件循环、Promise、async/await、并发控制',
    stats: [
      {label: '来源', value: '02_Async_JavaScript'},
      {label: '常见追问', value: '微任务 / 错误处理 / 并发'},
    ],
    focusAreas: ['事件循环', 'Promise 链路', '异步错误处理'],
    questions: [
      q(
        'junior',
        '什么是事件循环？宏任务和微任务在执行顺序上如何配合？',
        '是否能准确描述一轮任务完成后的微任务清空规则。',
        '浏览器会先执行当前宏任务中的同步代码，然后清空当前轮产生的微任务队列，之后才会进入渲染与下一轮宏任务。因此 `Promise.then` 往往先于同轮 `setTimeout` 执行。',
        'js',
        ['Event Loop', '微任务'],
        `console.log('start');\nsetTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('end');`
      ),
      q(
        'mid',
        'Promise 链式调用里，`return`、`throw` 和 `catch` 各自意味着什么？',
        '是否理解 Promise 状态沿链路传播的规则。',
        '在 `then` 中 `return` 一个值会把下一个 Promise 变成 fulfilled；`throw` 或返回 rejected Promise 会让后续链路进入失败分支；`catch` 既能兜住异常，也会把链路恢复为成功，除非它再次抛错。',
        'js',
        ['Promise', '错误处理'],
        `fetchUser()\n  .then((user) => {\n    if (!user.active) {\n      throw new Error('inactive');\n    }\n    return fetchPermissions(user.id);\n  })\n  .catch((error) => {\n    console.error(error.message);\n    return [];\n  });`
      ),
      q(
        'senior',
        '什么时候应该用 `Promise.allSettled`，而不是 `Promise.all`？',
        '是否能根据业务容错需求选择并发模型。',
        '如果你需要“全部结束后统一汇总结果”，即使其中部分失败也要拿到剩余成功数据，就更适合 `Promise.allSettled`。`Promise.all` 则更适合只要有一个失败就整体失败的强依赖场景。',
        'js',
        ['并发', 'Promise.allSettled'],
        `const result = await Promise.allSettled([\n  fetch('/api/profile'),\n  fetch('/api/activity'),\n  fetch('/api/recommendations'),\n]);\n\nconst fulfilled = result.filter((item) => item.status === 'fulfilled');`
      ),
      q(
        'junior',
        '`async/await` 和 Promise.then 的关系是什么？',
        '是否理解 `async/await` 只是语法层封装，而不是新模型。',
        '`async/await` 本质上是 Promise 的语法糖，用同步风格写异步流程，但底层仍基于 Promise 链。它让顺序逻辑更好读，不过并不会自动带来并发，需要你主动组合 `Promise.all` 等策略。',
        'js',
        ['async/await', 'Promise'],
        `async function loadProfile() {\n  const user = await fetchUser();\n  const posts = await fetchPosts(user.id);\n  return {user, posts};\n}`
      ),
      q(
        'mid',
        '为什么 `forEach` 里直接写 `await` 往往不是你想要的结果？',
        '是否知道数组遍历方法和异步控制流的差异。',
        '`forEach` 不会等待异步回调完成，因此外层流程可能先结束。若要串行执行，用 `for...of`；若要并行执行，用 `map` 配合 `Promise.all`，这样控制流和错误处理都更清晰。',
        'js',
        ['遍历', '异步控制流'],
        `for (const id of ids) {\n  await fetchDetail(id);\n}\n\nawait Promise.all(ids.map((id) => fetchDetail(id)));`
      ),
      q(
        'senior',
        'AbortController 在前端异步治理里为什么越来越重要？',
        '是否理解请求取消、竞态处理和资源释放。',
        '当搜索联想、路由切换或组件卸载时，旧请求若不取消，既会浪费带宽，也可能出现“旧结果覆盖新结果”的竞态。`AbortController` 可以把取消能力纳入 fetch 和副作用生命周期，是前端异步治理的重要基础设施。',
        'js',
        ['AbortController', '请求取消'],
        `const controller = new AbortController();\nfetch('/api/search?q=react', {signal: controller.signal});\ncontroller.abort();`
      ),
      q(
        'mid',
        '为什么面试里会专门问“微任务队列何时清空”？',
        '是否理解这件事直接影响 UI 更新、Promise 链和错误时序。',
        '因为很多输出顺序题、状态更新题和渲染时机题，本质都和“当前宏任务结束后先清空微任务”有关。如果这个基础不稳，后面讲 Promise、MutationObserver 或框架调度都会很虚。',
        'js',
        ['微任务', '执行时序'],
        `queueMicrotask(() => console.log('microtask'));\nsetTimeout(() => console.log('timeout'), 0);\nconsole.log('sync');`
      ),
      q(
        'senior',
        '为什么异步重试不能简单写成“失败就 while 一直重试”？',
        '是否具备退避、幂等和熔断意识。',
        '重试策略必须考虑幂等性、指数退避、最大次数和错误类型。否则网络抖动时不仅救不了请求，还可能把下游服务压垮。真实项目里还要区分可重试错误和不可重试错误。',
        'js',
        ['重试策略', '稳定性'],
        `async function retry(task, times = 3) {\n  for (let attempt = 1; attempt <= times; attempt += 1) {\n    try {\n      return await task();\n    } catch (error) {\n      if (attempt === times) throw error;\n      await new Promise((resolve) => setTimeout(resolve, attempt * 300));\n    }\n  }\n}`
      ),
    ],
  },
  {
    slug: 'advanced-react',
    title: '高级 React',
    eyebrow: 'Frontend Master Prep / Advanced React',
    description:
      '基于仓库 `05_Advanced_React` 整理，关注 Context、Portals、错误边界、渲染优化和状态边界等进阶话题。',
    summary: 'Context、Portals、错误边界、渲染优化',
    stats: [
      {label: '来源', value: '05_Advanced_React'},
      {label: '常见追问', value: 'Portal / Error Boundary / Memo'},
    ],
    focusAreas: ['渲染边界', '组件抽象', '错误隔离'],
    questions: [
      q(
        'mid',
        'Portal 的核心价值是什么？它解决的是“视觉层级”还是“React 树层级”问题？',
        '是否理解 Portal 只改变 DOM 挂载位置，不改变 React 关系。',
        'Portal 让弹窗、浮层这类组件可以脱离父级的 `overflow` 和层叠上下文限制，挂载到更高层 DOM 节点中。但它仍然属于原来的 React 树，因此 Context、事件冒泡和状态流并不会丢失。',
        'jsx',
        ['Portal', '弹窗'],
        `return ReactDOM.createPortal(\n  <div role="dialog" aria-modal="true">面试详情</div>,\n  document.getElementById('modal-root'),\n);`
      ),
      q(
        'mid',
        'Error Boundary 能捕获哪些错误，不能捕获哪些错误？',
        '是否知道它只处理渲染阶段错误，而非所有异常。',
        '错误边界可以捕获子组件在渲染、生命周期和构造阶段抛出的异常，用于局部降级。但它捕不到事件处理函数、异步回调和服务端渲染中的错误，这些仍需要单独处理。',
        'jsx',
        ['Error Boundary', '容错'],
        `class ErrorBoundary extends React.Component {\n  state = {hasError: false};\n\n  static getDerivedStateFromError() {\n    return {hasError: true};\n  }\n\n  render() {\n    return this.state.hasError ? <Fallback /> : this.props.children;\n  }\n}`
      ),
      q(
        'senior',
        '为什么说 `React.memo` 是“最后一层优化”，而不是默认答案？',
        '是否理解真正的问题通常是状态边界或父组件职责过大。',
        '如果组件重渲染本身不贵，盲目加 `React.memo` 反而会引入 props 比较成本和心智负担。多数性能问题更该先从状态下沉、列表拆分、避免无意义派生和减少父组件频繁更新入手。',
        'jsx',
        ['React.memo', '性能优化'],
        `const UserCard = React.memo(function UserCard({user}) {\n  return <article>{user.name}</article>;\n});`
      ),
      q(
        'mid',
        '受控状态和非受控状态在复杂组件抽象里该怎么取舍？',
        '是否理解组件库常见的 controlled/uncontrolled 设计。',
        '复杂组件常会同时支持受控和非受控模式。受控模式便于业务方统一管理状态，非受控模式更适合快速接入。设计时要明确优先级、默认值语义，以及状态切换时是否允许两种模式混用。',
        'jsx',
        ['受控组件', '组件设计'],
        `function Tabs({value, defaultValue, onChange}) {\n  const [innerValue, setInnerValue] = React.useState(defaultValue);\n  const currentValue = value ?? innerValue;\n  const update = (next) => {\n    if (value === undefined) setInnerValue(next);\n    onChange?.(next);\n  };\n}`
      ),
      q(
        'senior',
        '为什么复杂表单或数据看板更需要“状态归属”设计？',
        '是否能从局部状态、共享状态和服务端状态拆分职责。',
        '很多 React 页面难维护，不是因为 Hook 太多，而是状态归属不清。局部 UI 状态、跨组件共享状态和服务端数据应该分层处理，否则更新链路会混杂，导致重渲染范围和调试成本迅速失控。',
        'jsx',
        ['状态归属', '架构'],
        `function Dashboard() {\n  const [filters, setFilters] = React.useState({status: 'all'});\n  const query = useDashboardQuery(filters);\n  return <DashboardView filters={filters} data={query.data} onFilterChange={setFilters} />;\n}`
      ),
      q(
        'senior',
        '自定义 Hook 为什么是 React 进阶题里的高频点？',
        '是否能区分“抽逻辑”与“抽状态耦合”。',
        '自定义 Hook 的价值不只是复用几行代码，而是把订阅、请求、表单、权限等业务能力按边界收拢起来。好的 Hook 应该暴露稳定接口，隐藏副作用细节，而不是把组件内部耦合原样搬出去。',
        'jsx',
        ['自定义 Hook', '抽象'],
        `function useDebouncedValue(value, delay = 300) {\n  const [debounced, setDebounced] = React.useState(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debounced;\n}`
      ),
      q(
        'mid',
        'Context 为什么容易被误用成“全局状态收纳箱”？',
        '是否理解 Context 的订阅范围和更新成本。',
        'Context 很适合主题、权限、语言这类跨层共享但更新相对可控的数据；如果把高频变化的大型业务状态都塞进去，很容易造成订阅面过大和调试困难。它更像依赖注入，不是默认状态库。',
        'jsx',
        ['Context', '状态管理'],
        `const ThemeContext = React.createContext('light');\n\nfunction App() {\n  return <ThemeContext.Provider value=\"dark\"><Page /></ThemeContext.Provider>;\n}`
      ),
      q(
        'senior',
        'Suspense 在 React 里为什么既是加载体验题，也是架构题？',
        '是否理解它影响数据获取边界和占位策略。',
        'Suspense 不只是展示一个 loading，而是在声明式地定义“某段 UI 在资源没准备好时如何占位”。它会影响组件拆分、数据边界和用户等待体验，因此在大型应用里本质上也是架构决策。',
        'jsx',
        ['Suspense', '渲染边界'],
        `const Profile = React.lazy(() => import('./Profile'));\n\n<Suspense fallback={<ProfileSkeleton />}>\n  <Profile />\n</Suspense>`
      ),
    ],
  },
  {
    slug: 'nextjs',
    title: 'Next.js',
    eyebrow: 'Frontend Master Prep / Next.js',
    description:
      '基于仓库 `06_Next.js` 整理，覆盖路由、预渲染、数据获取、服务端与客户端边界等高频 Next.js 题。',
    summary: '路由、预渲染、数据获取、服务端边界',
    stats: [
      {label: '来源', value: '06_Next.js'},
      {label: '常见追问', value: 'SSR / SSG / App Router'},
    ],
    focusAreas: ['渲染策略', '数据获取', '客户端边界'],
    questions: [
      q(
        'junior',
        'SSR、SSG 和 ISR 分别适合什么场景？',
        '是否能按内容更新频率和首屏需求做判断。',
        'SSR 适合个性化强、实时性高的页面；SSG 适合内容稳定、可预生成的页面；ISR 则适合内容大体稳定，但又希望在访问后按周期增量更新。它们没有绝对优劣，关键看内容更新模型。',
        'ts',
        ['SSR', 'SSG', 'ISR'],
        `export async function getStaticProps() {\n  return {\n    props: {time: Date.now()},\n    revalidate: 60,\n  };\n}`
      ),
      q(
        'mid',
        '为什么 App Router 里要特别关注 Server Component 和 Client Component 的边界？',
        '是否理解不同组件类型带来的包体与交互差异。',
        'Server Component 默认在服务端执行，不会把组件逻辑打到浏览器；Client Component 才能使用状态、事件和浏览器 API。边界划分合理时，既能减少客户端 JS 体积，也能避免把本可服务端完成的工作搬到浏览器。',
        'tsx',
        ['App Router', 'Server Components'],
        `// app/dashboard/page.tsx\nimport ClientChart from './ClientChart';\n\nexport default async function DashboardPage() {\n  const data = await getDashboardData();\n  return <ClientChart data={data} />;\n}`
      ),
      q(
        'senior',
        'Next.js 项目里为什么 still 要做缓存与数据失效设计？',
        '是否知道框架提供能力不等于业务缓存策略已完成。',
        '无论是 fetch 缓存、路由缓存还是 CDN 缓存，都只解决了一部分问题。真正上线后还要回答“谁来失效、什么时候失效、用户何时看到新数据、回源失败怎么办”，这才是完整的数据新鲜度设计。',
        'ts',
        ['缓存', '数据一致性'],
        `const response = await fetch('https://api.example.com/jobs', {\n  next: {revalidate: 300, tags: ['jobs']},\n});`
      ),
      q(
        'junior',
        '`next/link` 和普通 `<a>` 在应用内导航上的差异是什么？',
        '是否理解客户端路由切换和预取能力。',
        '在 Next.js 应用内页面跳转时，`next/link` 能结合客户端路由和预取机制，让导航更快且状态保留更自然；普通 `<a>` 会走整页刷新，更适合外链或明确希望重新加载文档的场景。',
        'tsx',
        ['路由', '导航'],
        `import Link from 'next/link';\n\n<Link href=\"/questions/react\">React 面试题</Link>`
      ),
      q(
        'mid',
        '为什么图片优化会成为 Next.js 高频面试题？',
        '是否知道框架能力背后仍然是性能设计。',
        '`next/image` 解决的不只是“写起来方便”，而是尺寸约束、懒加载、格式协商和响应式资源选择。面试里如果你能顺带提到 CLS 控制和首屏关键图优先级，会比只背 API 更完整。',
        'tsx',
        ['图片优化', 'CLS'],
        `import Image from 'next/image';\n\n<Image src=\"/hero.png\" alt=\"hero\" width={960} height={540} priority />`
      ),
      q(
        'senior',
        '为什么 Next.js 的中间件能力适合放“轻决策”，不适合塞重逻辑？',
        '是否理解边缘执行环境的限制与定位。',
        '中间件适合做重定向、地区判断、鉴权分流和简单实验开关，因为它执行得早、离用户近。但如果把复杂查询、重计算或大规模依赖都放进去，收益会迅速变差，还会增加边缘执行成本。',
        'ts',
        ['Middleware', '边缘计算'],
        `import {NextResponse} from 'next/server';\n\nexport function middleware(request) {\n  if (!request.cookies.get('session')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n}`
      ),
      q(
        'mid',
        '为什么流式渲染会成为 Next.js 面试里的进阶点？',
        '是否理解“先返回可见内容，再补后续块”的价值。',
        '流式渲染可以让服务端尽早把可渲染的部分发送给浏览器，缩短用户感知等待时间。它尤其适合有慢接口但页面可分块展示的场景，不过也会对骨架设计和组件边界提出更高要求。',
        'tsx',
        ['Streaming', 'SSR'],
        `export default function Page() {\n  return (\n    <Suspense fallback={<SectionSkeleton />}>\n      <SlowSection />\n    </Suspense>\n  );\n}`
      ),
      q(
        'senior',
        '为什么 Route Handlers 和传统后端接口层的边界要想清楚？',
        '是否理解“能写在 Next.js 里”不等于“都该写在 Next.js 里”。',
        'Route Handlers 很适合做轻量接口、BFF 聚合和同仓部署场景，但如果业务逻辑复杂、团队边界清晰或服务复用要求高，就要慎重决定哪些逻辑放在 Next.js 层，哪些仍留在独立服务中。',
        'ts',
        ['Route Handlers', 'BFF'],
        `export async function GET() {\n  const data = await fetchJobs();\n  return Response.json(data);\n}`
      ),
    ],
  },
  {
    slug: 'browser-web-apis',
    title: '浏览器与 Web APIs',
    eyebrow: 'Frontend Master Prep / Browser & Web APIs',
    description:
      '基于仓库 `08_Browser_and_WebAPIs` 整理，覆盖 DOM、事件传播、存储、历史记录和常见浏览器 API。',
    summary: 'DOM、事件传播、存储、History、观察器 API',
    stats: [
      {label: '来源', value: '08_Browser_and_WebAPIs'},
      {label: '常见追问', value: '冒泡 / localStorage / Observer'},
    ],
    focusAreas: ['DOM 操作', '事件模型', '浏览器能力边界'],
    questions: [
      q(
        'junior',
        '事件捕获、目标阶段和冒泡阶段的执行顺序是什么？',
        '是否能说清事件传播路径以及监听参数。',
        '浏览器事件会先从顶层往目标节点捕获，再在目标节点触发，最后向上冒泡。默认 `addEventListener` 监听的是冒泡阶段，第三个参数或 `capture: true` 才会改为捕获阶段。',
        'js',
        ['事件传播', 'DOM'],
        `outer.addEventListener('click', () => console.log('bubble outer'));\nouter.addEventListener('click', () => console.log('capture outer'), true);`
      ),
      q(
        'mid',
        '`IntersectionObserver` 适合解决什么问题？',
        '是否知道它是替代滚动轮询的观察方案。',
        '它适合懒加载、曝光埋点和无限滚动这类“元素是否进入视口”的场景。相比持续监听滚动再手动计算位置，`IntersectionObserver` 更省性能，也更容易统一管理阈值。',
        'js',
        ['IntersectionObserver', '懒加载'],
        `const observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry) => {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n    }\n  });\n});`
      ),
      q(
        'senior',
        '为什么同样是浏览器存储，IndexedDB 更像“数据库”而不是“更大的 localStorage”？',
        '是否理解异步事务模型和索引能力的工程价值。',
        'IndexedDB 是异步、可建索引、支持事务和对象存储的浏览器数据库，更适合离线数据、复杂查询和大体量缓存。它和简单 key-value 的 localStorage 不是同一层级的能力。',
        'js',
        ['IndexedDB', '离线缓存'],
        `const request = indexedDB.open('interview-bank', 1);\nrequest.onupgradeneeded = () => {\n  request.result.createObjectStore('topics', {keyPath: 'slug'});\n};`
      ),
      q(
        'junior',
        '`preventDefault` 和 `stopPropagation` 分别阻止了什么？',
        '是否能分清默认行为和事件传播不是一回事。',
        '`preventDefault` 阻止的是元素的默认行为，例如表单提交、链接跳转；`stopPropagation` 阻止的是事件继续传播。很多面试会故意把这两个概念混在一起，答的时候要明确拆开。',
        'js',
        ['DOM 事件', '默认行为'],
        `link.addEventListener('click', (event) => {\n  event.preventDefault();\n  event.stopPropagation();\n});`
      ),
      q(
        'mid',
        '`MutationObserver` 和轮询 DOM 相比有什么优势？',
        '是否知道它是响应式监听 DOM 变更的原生能力。',
        '`MutationObserver` 能在 DOM 结构、属性或文本变化时异步回调，比频繁轮询更省性能，也更准确。它常用于第三方 DOM 接入、埋点和少量 UI 变更感知，但订阅范围仍需控制。',
        'js',
        ['MutationObserver', '监听'],
        `const observer = new MutationObserver((records) => {\n  console.log(records.length);\n});\nobserver.observe(document.body, {childList: true, subtree: true});`
      ),
      q(
        'senior',
        '为什么 History API 会影响单页应用路由设计？',
        '是否理解 URL、前进后退和应用状态的同步问题。',
        '单页应用不整页刷新，但用户仍然期望 URL 可分享、可返回、可前进。History API 让前端可以更新地址栏和历史栈，因此路由系统设计时必须处理好页面状态与 URL 的双向同步。',
        'js',
        ['History API', '路由'],
        `window.history.pushState({topic: 'react'}, '', '/docs/categories/react');\nwindow.addEventListener('popstate', (event) => {\n  console.log(event.state);\n});`
      ),
      q(
        'mid',
        '`postMessage` 为什么是跨窗口通信题里的高频点？',
        '是否知道它服务于 iframe、弹窗和跨源窗口通信。',
        '`postMessage` 是浏览器提供的安全跨上下文通信方式，常用于 iframe、OAuth 登录弹窗和多窗口协作。面试时除了会用 API，还要说明必须校验 `origin`，否则容易引入安全问题。',
        'js',
        ['postMessage', '跨窗口'],
        `window.addEventListener('message', (event) => {\n  if (event.origin !== 'https://example.com') return;\n  console.log(event.data);\n});`
      ),
      q(
        'senior',
        '`ResizeObserver` 为什么比 window resize 更适合组件级响应？',
        '是否理解“视口变化”和“元素变化”不是同一件事。',
        '`window resize` 只能反映视口变化，而很多组件布局变化来自侧栏折叠、容器宽度变化或内容撑开。`ResizeObserver` 能直接观察元素尺寸变化，更适合组件级自适应与可视化布局。',
        'js',
        ['ResizeObserver', '响应式'],
        `const observer = new ResizeObserver((entries) => {\n  for (const entry of entries) {\n    console.log(entry.contentRect.width);\n  }\n});\nobserver.observe(document.querySelector('.chart'));`
      ),
      q(
        'mid',
        '原仓库题：什么是 Critical Rendering Path，它从 HTML 到屏幕像素经历了哪些阶段？',
        '是否能按 DOM、CSSOM、Render Tree、Layout、Paint、Composite 说清楚。',
        '关键渲染路径描述浏览器把 HTML、CSS、JavaScript 变成屏幕像素的主要链路。核心阶段是构建 DOM、构建 CSSOM、合成 Render Tree、执行布局、绘制，最后做图层合成。理解这条链路后，才能解释 render-blocking 和首屏优化。',
        'html',
        ['Browser', 'CRP'],
        `HTML -> DOM\nCSS -> CSSOM\nDOM + CSSOM -> Render Tree\nLayout -> Paint -> Composite`
      ),
      q(
        'senior',
        '原仓库题：什么是 Compositing Layers，为什么 transform/opacity 往往更适合动画？',
        '是否理解 GPU 合成层和避免布局重算的收益。',
        '浏览器会把某些元素提升到独立合成层，由 GPU 在合成阶段进行移动、缩放或透明度变化。`transform` 和 `opacity` 往往只影响合成，而不会像 `top/left/width` 那样触发布局和重绘，因此更容易获得平滑动画。',
        'css',
        ['Browser', 'Compositing', 'GPU'],
        `.card {\n  will-change: transform, opacity;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  opacity: 0.95;\n}`
      ),
    ],
  },
  {
    slug: 'networking',
    title: '网络',
    eyebrow: 'Frontend Master Prep / Networking',
    description:
      '基于仓库 `09_Networking` 整理，集中覆盖 HTTP、TCP、缓存、CDN、WebSocket 和常见网络瓶颈。',
    summary: 'HTTP、缓存、CDN、WebSocket、网络优化',
    stats: [
      {label: '来源', value: '09_Networking'},
      {label: '常见追问', value: 'HTTP/1.1 vs HTTP/2 / CDN / WebSocket'},
    ],
    focusAreas: ['传输链路', '缓存策略', '实时通信'],
    questions: [
      q(
        'junior',
        'HTTP/1.1、HTTP/2 和 HTTP/3 的核心差异是什么？',
        '是否能从连接复用与传输层角度回答。',
        'HTTP/1.1 以文本协议和多连接并发为主；HTTP/2 引入二进制分帧、头部压缩和多路复用；HTTP/3 则建立在 QUIC 之上，重点改善传输层阻塞与连接迁移能力。面试里不必背细节，但要知道演进动机。',
        'http',
        ['HTTP', '协议'],
        `:method: GET\n:path: /docs\n:scheme: https`
      ),
      q(
        'mid',
        'CDN 为什么能改善静态资源访问体验？',
        '是否理解边缘节点、缓存和回源链路。',
        'CDN 会把静态资源分发到靠近用户的边缘节点，减少跨地域时延，并通过缓存降低源站压力。真正使用时还要考虑缓存键设计、失效策略和版本指纹，避免用户拿到旧资源。',
        'http',
        ['CDN', '缓存'],
        `Cache-Control: public, max-age=31536000, immutable`
      ),
      q(
        'senior',
        '轮询、长轮询、SSE 和 WebSocket 该怎么取舍？',
        '是否能按实时性、方向性和基础设施复杂度做判断。',
        '轮询简单但浪费请求；长轮询减少空转但仍有重连成本；SSE 适合服务端单向推送文本流；WebSocket 适合双向实时交互。选型要看聊天室、行情、消息提醒还是任务进度这类具体场景。',
        'js',
        ['实时通信', 'WebSocket'],
        `const socket = new WebSocket('wss://example.com/ws');\nsocket.addEventListener('message', (event) => {\n  console.log(event.data);\n});`
      ),
      q(
        'junior',
        'DNS 解析、TCP/TLS 握手为什么会影响首个请求时间？',
        '是否理解“真正发出 HTTP 请求前”已经发生了很多网络成本。',
        '浏览器在拿到响应前，往往要先做 DNS 解析、建立 TCP 连接，并在 HTTPS 下完成 TLS 握手。这些前置步骤都会增加首字节等待时间，所以 `preconnect`、连接复用和边缘节点就很关键。',
        'html',
        ['DNS', 'TLS'],
        `<link rel="preconnect" href="https://api.example.com" crossorigin />`
      ),
      q(
        'mid',
        '为什么缓存题里总会追问 `ETag` 和 `Last-Modified`？',
        '是否理解协商缓存的两种验证信号。',
        '`Last-Modified` 基于修改时间，简单但精度有限；`ETag` 更像资源版本指纹，能更准确判断内容是否变化。真实项目常会同时返回两者，让浏览器和服务端在协商缓存时更稳。',
        'http',
        ['缓存', 'ETag'],
        `ETag: "questions-react-v2"\nLast-Modified: Thu, 12 Mar 2026 08:00:00 GMT`
      ),
      q(
        'senior',
        '为什么网络优化不能只看“资源体积”，还要看连接与优先级？',
        '是否具备端到端链路视角。',
        '资源小并不代表一定快。如果请求排队、优先级错误、连接没有复用或关键资源被低优先级资源挤占，页面仍然会慢。真正的网络优化要同时关注体积、数量、连接复用和请求时序。',
        'html',
        ['优先级', '关键资源'],
        `<link rel="preload" href="/fonts/interview.woff2" as="font" type="font/woff2" crossorigin />`
      ),
      q(
        'mid',
        '为什么接口设计题里会追问“幂等性”？',
        '是否理解重试、超时补发和重复提交的后果。',
        '当网络抖动或用户重复点击时，请求可能被重发。若接口不是幂等的，订单、支付或发消息这类操作就可能被重复执行。因此网络和接口设计往往要一起考虑重试策略与幂等保障。',
        'http',
        ['幂等性', '重试'],
        `Idempotency-Key: order-submit-20260312-001`
      ),
      q(
        'senior',
        '为什么前端也要理解超时、重试和熔断这些后端常见词？',
        '是否具备全链路稳定性思维。',
        '前端并不是“只发请求就结束”，页面体验直接受慢接口、失败重试和雪崩影响。懂这些概念，才能合理设计 loading、重试、降级和错误提示，而不是把所有异常都交给用户自己刷新。',
        'js',
        ['超时', '熔断'],
        `const withTimeout = (promise, ms = 5000) =>\n  Promise.race([\n    promise,\n    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),\n  ]);`
      ),
      q(
        'junior',
        '原仓库题：HTTP 方法有哪些，什么时候该用 GET / POST / PUT / PATCH / DELETE / OPTIONS？',
        '是否理解语义、幂等性和 REST 约定。',
        'HTTP 方法定义了对资源执行的动作。GET 用于读取，POST 常用于创建，PUT 用于整体替换，PATCH 用于局部更新，DELETE 用于删除，OPTIONS 常用于协商能力或 CORS 预检。面试里还要说明哪些方法是幂等的。',
        'http',
        ['HTTP', 'Methods'],
        `GET /users/1\nPOST /users\nPUT /users/1\nPATCH /users/1\nDELETE /users/1\nOPTIONS /users`
      ),
      q(
        'junior',
        '原仓库题：HTTP 状态码五大类分别表示什么？',
        '是否能按 1xx-5xx 做基础归类，并说出常用码。',
        'HTTP 状态码按首位分为 1xx 信息类、2xx 成功类、3xx 重定向类、4xx 客户端错误类、5xx 服务端错误类。实际面试里常见的高频码包括 200、201、204、301、304、400、401、403、404、409、422、429、500、503。',
        'http',
        ['HTTP', 'Status Code'],
        `200 OK\n201 Created\n204 No Content\n304 Not Modified\n404 Not Found\n429 Too Many Requests\n500 Internal Server Error`
      ),
    ],
  },
  {
    slug: 'security',
    title: '前端安全',
    eyebrow: 'Frontend Master Prep / Security',
    description:
      '基于仓库 `10_Security` 整理，聚焦 XSS、CSRF、认证、CSP、存储安全和第三方脚本风险。',
    summary: 'XSS、CSRF、认证、CSP、第三方脚本治理',
    stats: [
      {label: '来源', value: '10_Security'},
      {label: '常见追问', value: 'XSS / CSRF / JWT / Cookie'},
    ],
    focusAreas: ['输入输出安全', '会话安全', '浏览器防线'],
    questions: [
      q(
        'junior',
        'XSS 和 CSRF 的本质区别是什么？',
        '是否知道一个是“脚本注入”，一个是“借用身份发请求”。',
        'XSS 的核心是攻击者把恶意脚本带进可信页面执行；CSRF 的核心是诱导浏览器带上现有身份去发起非预期请求。两者攻击面和防御手段完全不同，面试里需要分开讲。',
        'http',
        ['XSS', 'CSRF'],
        `Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Lax`
      ),
      q(
        'mid',
        '为什么很多项目会用 HttpOnly Cookie 存会话，而不是把 token 直接放 localStorage？',
        '是否理解浏览器脚本可读性与服务端协作的差异。',
        'HttpOnly Cookie 不能被前端脚本直接读取，能降低 XSS 后 token 被直接窃取的风险；但它会自动随请求发送，需要配合同源策略、SameSite、CSRF Token 等机制。`localStorage` 使用简单，但暴露面更直接。',
        'http',
        ['Cookie', '认证'],
        `Set-Cookie: access_token=...; HttpOnly; Secure; SameSite=Strict; Path=/`
      ),
      q(
        'senior',
        '为什么第三方脚本是前端安全与性能的共同风险点？',
        '是否具备供应链风险意识。',
        '第三方脚本既可能引入额外执行开销，也可能带来数据泄露、权限滥用和内容篡改风险。治理上至少要做分类接入、最小权限、延迟加载、SRI/CSP、失败兜底和持续监控。',
        'html',
        ['第三方脚本', '供应链安全'],
        `<script\n  src="https://cdn.example.com/sdk.js"\n  integrity="sha384-..."\n  crossorigin="anonymous"\n></script>`
      ),
      q(
        'junior',
        '什么是 CSP？为什么它常被当作浏览器侧最后一道防线？',
        '是否知道 CSP 用来限制资源来源和脚本执行面。',
        'CSP 通过响应头约束脚本、样式、图片、iframe 等资源来源，能显著收窄恶意注入后的可执行空间。它不能替代转义和校验，但能在浏览器层面形成额外约束。',
        'http',
        ['CSP', '浏览器防线'],
        `Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'`
      ),
      q(
        'mid',
        'JWT 为什么不是“天然更安全”的认证方案？',
        '是否理解令牌方案也有失效、撤销和存储边界。',
        'JWT 只是令牌格式，不等于自动安全。它仍然要面对存储位置、过期策略、刷新机制、撤销能力和泄露后的影响面。如果回答时能把“安全问题在于整体会话设计”讲清楚，会更完整。',
        'json',
        ['JWT', '认证'],
        `{\n  "sub": "user_1",\n  "exp": 1741766400,\n  "role": "admin"\n}`
      ),
      q(
        'senior',
        '为什么富文本渲染总是前端安全里的高风险区？',
        '是否知道富文本会把“不可信 HTML”直接带进页面。',
        '富文本内容很容易携带脚本、事件属性、危险 URL 和样式注入，因此不能直接信任。比较稳妥的做法是服务端和客户端双重清洗、白名单过滤，并尽量减少 `dangerouslySetInnerHTML` 的裸用。',
        'jsx',
        ['富文本', 'XSS'],
        `const cleanHtml = DOMPurify.sanitize(rawHtml);\nreturn <div dangerouslySetInnerHTML={{__html: cleanHtml}} />;`
      ),
      q(
        'mid',
        '点击劫持为什么经常被前端忽略？',
        '是否知道它利用的是 UI 伪装而不是脚本注入。',
        '点击劫持通常通过 iframe 叠层或透明覆盖诱导用户误点敏感操作。它不像 XSS 那样直观，所以很容易被忽略。常见防护包括 `X-Frame-Options`、CSP `frame-ancestors` 以及对敏感操作增加二次确认。',
        'http',
        ['点击劫持', 'UI 安全'],
        `Content-Security-Policy: frame-ancestors 'none'`
      ),
      q(
        'senior',
        '为什么权限控制不能只做前端路由守卫？',
        '是否理解前端权限更多是体验层，而非最终安全边界。',
        '前端路由守卫可以改善体验，避免用户误入无权限页面，但真正的权限校验必须由后端或可信边界完成。否则用户仍可通过直接请求接口或篡改前端状态绕过限制。',
        'tsx',
        ['权限控制', '边界'],
        `if (!user.permissions.includes('view_dashboard')) {\n  return <NoPermission />;\n}`
      ),
      q(
        'senior',
        '原仓库题：什么是 CORS，预检请求为什么会出现，服务端应该如何安全配置？',
        '是否真正理解同源策略、简单请求、预检请求和允许源白名单。',
        'CORS 是浏览器给跨源请求提供的协商机制。当前端发起复杂请求时，浏览器会先自动发送 `OPTIONS` 预检，确认目标源、方法和请求头是否被允许。安全配置上应尽量使用明确白名单，而不是在生产环境用 `*` 全放开。',
        'http',
        ['Security', 'CORS'],
        `Access-Control-Allow-Origin: https://app.example.com\nAccess-Control-Allow-Methods: GET, POST, PATCH, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization`
      ),
      q(
        'senior',
        '原仓库题：JWT 和 Session-Based Authentication 的安全差异是什么？',
        '是否能从状态存储、撤销能力、XSS/CSRF 风险和扩展性做权衡。',
        'Session 方案把会话状态存服务端，客户端只持有 session id，撤销简单，常配合 HttpOnly Cookie；JWT 则把声明签名后交给客户端，扩展性更好，但撤销更难，若直接放 localStorage 也更容易暴露给 XSS。两者不是谁绝对更安全，而是取舍不同。',
        'http',
        ['Security', 'JWT', 'Session'],
        `Set-Cookie: sid=abc; HttpOnly; Secure; SameSite=Strict`
      ),
    ],
  },
  {
    slug: 'system-design',
    title: '前端系统设计',
    eyebrow: 'Frontend Master Prep / System Design',
    description:
      '基于仓库 `14_System_Design_and_Scalability` 整理，适合中高级前端的架构题，覆盖可扩展性、缓存、监控和容量规划。',
    summary: '可扩展性、缓存、监控、降级、架构取舍',
    stats: [
      {label: '来源', value: '14_System_Design_and_Scalability'},
      {label: '常见追问', value: '缓存 / 降级 / 可观测性'},
    ],
    focusAreas: ['系统边界', '容量与缓存', '可观测性'],
    questions: [
      q(
        'mid',
        '设计一个高访问量前端站点时，为什么要先划分“静态内容、动态内容、个性化内容”？',
        '是否理解不同内容类型对应不同渲染与缓存策略。',
        '因为这三类内容的更新频率、缓存条件和计算位置完全不同。静态内容更适合 CDN 和预渲染，动态内容要结合失效策略，个性化内容则要谨慎缓存并处理身份边界。',
        'txt',
        ['缓存设计', '架构'],
        `静态内容 -> CDN/预渲染\n动态内容 -> ISR/服务端缓存\n个性化内容 -> 边缘鉴权或客户端获取`
      ),
      q(
        'senior',
        '为什么系统设计题里“降级策略”几乎总会被追问？',
        '是否具备高可用思维，而不是只谈正常路径。',
        '真正的系统设计不是只说明功能如何工作，还要说明依赖失败、流量突增或部分服务超时时如何优雅退化。能讲清楚骨架屏、静态兜底、读缓存、关闭非核心模块等策略，会明显拉开层次。',
        'txt',
        ['高可用', '降级'],
        `优先级 1：核心内容可读\n优先级 2：关键交互可用\n优先级 3：推荐、埋点、装饰性能力可降级`
      ),
      q(
        'senior',
        '为什么没有监控与告警的系统设计是不完整的？',
        '是否理解“上线后如何知道它坏了”。',
        '没有可观测性，你无法判断请求成功率、接口延迟、缓存命中、客户端错误率和核心指标变化。系统设计题里谈监控，不是为了显得全面，而是因为运维闭环本身就是系统的一部分。',
        'js',
        ['监控', '可观测性'],
        `track('web_vitals', {\n  lcp,\n  cls,\n  inp,\n  release: window.__APP_VERSION__,\n});`
      ),
      q(
        'mid',
        '为什么前端系统设计题常会追问“数据流向图”？',
        '是否能把用户请求、缓存、BFF、客户端状态说成一条链路。',
        '系统设计题里如果只讲组件划分，通常不够。面试官更想看你能否把数据从入口到展示、再到缓存和回写的链路说清楚，因为瓶颈和风险往往都藏在链路交界处。',
        'txt',
        ['数据流', '链路设计'],
        `浏览器 -> CDN -> BFF -> 下游服务 -> 缓存层 -> 客户端状态 -> UI`
      ),
      q(
        'senior',
        '为什么架构设计里要区分“性能优化”与“容量规划”？',
        '是否理解一个偏单请求效率，一个偏整体承载能力。',
        '性能优化关注单个用户请求的延迟和渲染效率；容量规划关注高峰流量下系统是否还能稳定承载。两者相关但不等价，很多系统在单用户体验不错时，依然可能在流量高峰下崩掉。',
        'txt',
        ['容量规划', '架构'],
        `单请求快 != 高并发稳\n需要同时评估 QPS、缓存命中、扩容成本和降级方案`
      ),
      q(
        'senior',
        '为什么 BFF 常会出现在前端系统设计方案里？',
        '是否理解前端中间层对聚合、裁剪和稳定性的价值。',
        'BFF 可以把多个下游接口聚合成更贴近前端页面的数据模型，还能承接鉴权、缓存、降级和灰度逻辑。它不是必须存在，但在多端、多页面和高复杂度数据聚合场景里很有价值。',
        'js',
        ['BFF', '接口聚合'],
        `app.get('/api/dashboard', async (req, res) => {\n  const [profile, feed] = await Promise.all([getProfile(), getFeed()]);\n  res.json({profile, feed});\n});`
      ),
      q(
        'mid',
        '为什么系统设计题常会问“静态资源如何发布与回滚”？',
        '是否知道架构不只包括接口，也包括前端产物生命周期。',
        '大型前端系统上线后，静态资源版本管理、缓存穿透和快速回滚都很关键。若只讲页面渲染逻辑，不讲构建产物如何安全发布，系统设计答案通常不完整。',
        'txt',
        ['发布策略', '回滚'],
        `版本化文件名 -> CDN 缓存\nHTML 控制入口版本 -> 快速切回旧版本`
      ),
      q(
        'senior',
        '为什么 feature flag 在系统可扩展性里很重要？',
        '是否理解它能降低上线风险并支持灰度验证。',
        'Feature flag 可以把代码发布和功能开启解耦，支持灰度、A/B 实验和紧急关闭。对大型前端系统来说，这是一种非常实用的风险控制手段，而不只是“运营开关”。',
        'js',
        ['Feature Flag', '灰度'],
        `if (flags.enableNewSearchPanel) {\n  return <NewSearchPanel />;\n}\nreturn <LegacySearchPanel />;`
      ),
      q(
        'mid',
        '原仓库题：如何设计一个生产可用的 Autocomplete / Typeahead 组件？',
        '是否能把防抖、键盘导航、可访问性和请求竞态一起讲清楚。',
        '一个可上线的自动补全组件至少要处理输入防抖、上下键导航、Enter 选择、Escape 关闭、加载与错误状态、ARIA 语义，以及旧请求取消与结果覆盖问题。性能上还要限制结果数量，并在必要时高亮匹配文本。',
        'jsx',
        ['System Design', 'Autocomplete'],
        `const controller = new AbortController();\nconst load = debounce(async (keyword) => {\n  const result = await fetchSuggestions(keyword, {signal: controller.signal});\n  setOptions(result.slice(0, 10));\n}, 300);`
      ),
      q(
        'mid',
        '原仓库题：如何设计支持焦点陷阱和可访问性的 Modal / Dialog 组件？',
        '是否理解 Portal、焦点管理、滚动锁定和关闭语义。',
        '生产级弹窗要把内容渲染到 Portal，打开时把焦点移入弹窗，关闭时恢复到触发元素，Tab 不能逃出弹窗，还要支持 Escape 关闭、背景滚动锁定和 `role=\"dialog\"`、`aria-modal` 等语义。',
        'jsx',
        ['System Design', 'Modal', 'Accessibility'],
        `return createPortal(\n  <div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title\">\n    <h2 id=\"dialog-title\">确认删除</h2>\n  </div>,\n  document.body,\n);`
      ),
      q(
        'mid',
        '原仓库题：如何基于 Intersection Observer 设计 Infinite Scroll？',
        '是否能从哨兵元素、并发控制和结束条件设计组件。',
        '现代无限滚动通常在列表底部放一个 sentinel 元素，用 `IntersectionObserver` 触发下一页加载。实现时要避免重复请求、处理错误重试、识别“没有更多数据”的状态，并在超长列表里结合虚拟化减少节点数量。',
        'jsx',
        ['System Design', 'Infinite Scroll'],
        `const observer = new IntersectionObserver(([entry]) => {\n  if (entry.isIntersecting && hasMore && !loading) {\n    loadMore();\n  }\n});\nobserver.observe(sentinelRef.current);`
      ),
      q(
        'mid',
        '原仓库题：如何设计支持无限循环和触摸手势的 Carousel？',
        '是否理解循环切换、惰性加载、移动端手势和无障碍要求。',
        '一个可用的轮播组件不仅要能左右切换，还要处理首尾衔接、图片懒加载、触摸滑动阈值、键盘导航、自动播放暂停和 `aria-roledescription` 等可访问性细节。真正难点在于边界状态和移动端体验。',
        'jsx',
        ['System Design', 'Carousel'],
        `const onTouchEnd = () => {\n  const delta = touchStart - touchEnd;\n  if (Math.abs(delta) > 50) {\n    delta > 0 ? goNext() : goPrev();\n  }\n};`
      ),
    ],
  },
  {
    slug: 'pwa',
    title: 'PWA',
    eyebrow: 'Frontend Master Prep / PWA',
    description:
      '基于仓库 `15_PWA` 整理，覆盖 Service Worker、离线缓存、安装体验和推送等 Progressive Web App 核心能力。',
    summary: 'Service Worker、离线缓存、安装、推送',
    stats: [
      {label: '来源', value: '15_PWA'},
      {label: '常见追问', value: 'SW / Manifest / 离线策略'},
    ],
    focusAreas: ['离线能力', '缓存策略', '应用化体验'],
    questions: [
      q(
        'junior',
        'PWA 的核心组成一般包括哪些部分？',
        '是否知道它不只是“手机上能加到桌面”。',
        '常见组成包括 HTTPS、Web App Manifest、Service Worker 和一套合理的缓存策略。Manifest 负责应用元信息，Service Worker 负责离线、缓存和部分后台能力，它们一起把 Web 应用体验向 App 靠近。',
        'json',
        ['PWA', 'Manifest'],
        `{\n  "name": "Interview Bank",\n  "short_name": "Bank",\n  "start_url": "/",\n  "display": "standalone"\n}`
      ),
      q(
        'mid',
        '为什么 Service Worker 里的缓存策略要按资源类型拆分？',
        '是否理解 HTML、图片、接口和静态资源对新鲜度要求不同。',
        'HTML、接口、图片和构建产物对缓存一致性的要求不一样。真正可用的 PWA 不会把所有请求都丢给同一套 cache-first，而是按页面 shell、API、静态文件和图片分别设计策略。',
        'js',
        ['Service Worker', '缓存策略'],
        `self.addEventListener('fetch', (event) => {\n  if (event.request.destination === 'image') {\n    event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));\n  }\n});`
      ),
      q(
        'senior',
        '为什么离线可用不等于“永远返回缓存”？',
        '是否具备数据一致性和故障恢复意识。',
        '离线体验的目标是用户仍能完成关键动作，而不是无条件返回旧数据。真正的设计要考虑缓存失效、写操作排队同步、冲突处理和重新联网后的恢复机制。',
        'js',
        ['离线优先', '数据一致性'],
        `window.addEventListener('online', () => {\n  console.log('retry queued mutations');\n});`
      ),
      q(
        'junior',
        '为什么 PWA 必须跑在 HTTPS 下？',
        '是否知道 Service Worker 对安全上下文的要求。',
        'Service Worker 能拦截请求、控制缓存和影响离线行为，因此浏览器要求它运行在安全上下文中。HTTPS 是 PWA 能力的前置条件，localhost 开发属于特例。',
        'js',
        ['HTTPS', 'Service Worker'],
        `if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}`
      ),
      q(
        'mid',
        '安装到桌面和真正的“应用化体验”之间差了什么？',
        '是否能从加载、离线、图标、启动行为等角度回答。',
        '能安装只是开始。真正的应用化体验还包括独立窗口启动、图标与启动页、较快的再次访问速度、部分离线可用，以及对网络失败和系统返回的良好处理。',
        'json',
        ['安装体验', '应用化'],
        `{\n  "display": "standalone",\n  "background_color": "#ffffff",\n  "theme_color": "#0f172a"\n}`
      ),
      q(
        'senior',
        '为什么 PWA 的更新策略经常会带来“用户看到旧版本”问题？',
        '是否理解 Service Worker 生命周期与缓存版本切换。',
        '新的 Service Worker 安装后不会立刻接管所有页面，旧标签页可能继续被旧版本控制。如果更新策略没有设计好，用户就会遇到资源版本不一致、页面不刷新或新旧代码混用的问题。',
        'js',
        ['更新策略', '版本切换'],
        `self.addEventListener('install', () => {\n  self.skipWaiting();\n});\nself.addEventListener('activate', () => {\n  self.clients.claim();\n});`
      ),
      q(
        'mid',
        'Background Sync 为什么会被归到 PWA 的进阶能力？',
        '是否理解它解决的是离线期间的延后提交。',
        'Background Sync 允许应用在网络恢复后补发之前失败的写操作，比如离线评论、表单提交和消息发送。它把“用户当下可继续操作”和“网络恢复后再同步”这两件事串了起来。',
        'js',
        ['Background Sync', '离线写入'],
        `self.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-comments') {\n    event.waitUntil(flushQueuedComments());\n  }\n});`
      ),
      q(
        'senior',
        '为什么推送通知不是“能发就行”，而是强依赖场景设计？',
        '是否理解频繁或低价值推送会迅速伤害用户关系。',
        '推送通知涉及权限申请时机、消息价值、频率控制和点击后的落地体验。即使技术上可实现，如果产品策略失控，也会被用户直接关闭甚至卸载。',
        'js',
        ['Push', '消息策略'],
        `const permission = await Notification.requestPermission();\nif (permission === 'granted') {\n  console.log('ready for push subscription');\n}`
      ),
    ],
  },
  {
    slug: 'tooling-build',
    title: '工具链与构建',
    eyebrow: 'Frontend Master Prep / Tooling & Build',
    description:
      '基于仓库 `16_Tooling_and_Build` 整理，覆盖 Bundler、模块系统、源码映射、Tree Shaking 和开发构建链路。',
    summary: 'Bundler、模块系统、Tree Shaking、Source Map',
    stats: [
      {label: '来源', value: '16_Tooling_and_Build'},
      {label: '常见追问', value: 'Bundling / Tree Shaking / Source Map'},
    ],
    focusAreas: ['构建原理', '模块系统', '发布调试'],
    questions: [
      q(
        'junior',
        '为什么现代前端仍然需要打包工具，浏览器不是已经支持 ESM 了吗？',
        '是否理解生产优化和开发协议不是一回事。',
        '浏览器支持 ESM 解决了模块加载问题，但生产环境仍然需要压缩、分包、预加载、资源指纹、兼容转换和依赖分析。构建工具的价值已经从“让代码能跑”转向“让代码更快、更稳、更可发布”。',
        'js',
        ['Bundler', 'ESM'],
        `import {defineConfig} from 'vite';\n\nexport default defineConfig({\n  build: {\n    sourcemap: true,\n  },\n});`
      ),
      q(
        'mid',
        'Tree Shaking 为什么依赖 ESM 的静态结构？',
        '是否能解释打包器如何判断未使用代码。',
        '因为 ESM 的导入导出关系在编译阶段就是静态可分析的，打包器可以据此判断哪些导出没有被使用。若模块系统是动态的，或者包本身有副作用，Tree Shaking 的效果就会打折。',
        'js',
        ['Tree Shaking', 'ESM'],
        `// math.js\nexport const add = (a, b) => a + b;\nexport const sub = (a, b) => a - b;`
      ),
      q(
        'senior',
        '为什么生产环境 Source Map 既有排障价值，也有安全边界问题？',
        '是否理解调试便利与源码暴露之间的权衡。',
        'Source Map 能显著提升线上排障效率，但如果对外完全暴露，也可能泄露源码结构、注释和内部实现。很多团队会把 Source Map 上传到错误监控平台，而不是公开部署到静态站点上。',
        'json',
        ['Source Map', '发布策略'],
        `{\n  "build": {\n    "sourcemap": "hidden"\n  }\n}`
      ),
      q(
        'junior',
        'CommonJS 和 ESM 的关键差异是什么？',
        '是否知道一个偏运行时导出，一个偏静态分析。',
        'CommonJS 更偏 Node.js 早期生态，模块在运行时加载，使用 `require` 和 `module.exports`；ESM 是语言标准，导入导出关系静态可分析，更适合浏览器原生模块和现代构建优化。',
        'js',
        ['ESM', 'CommonJS'],
        `import {sum} from './math.js';\nconst legacy = require('./legacy');`
      ),
      q(
        'mid',
        '为什么开发环境的 HMR 快，不代表生产包就一定优？',
        '是否能把开发体验和产物质量分开理解。',
        '热更新快说明开发服务器和模块边界设计得不错，但生产质量还取决于分包策略、压缩、Tree Shaking、预加载和缓存设计。很多团队在工具选型时容易把这两个维度混为一谈。',
        'js',
        ['HMR', '构建质量'],
        `if (import.meta.hot) {\n  import.meta.hot.accept();\n}`
      ),
      q(
        'senior',
        '为什么构建链路里“副作用声明”会影响 Tree Shaking 结果？',
        '是否知道包管理元数据也会参与打包优化。',
        '如果一个包没有正确声明 `sideEffects`，打包器可能不敢安全删除看似未使用的导入，导致产物膨胀。反过来，错误声明也可能把实际有副作用的代码误删，因此这是一个需要谨慎维护的边界。',
        'json',
        ['sideEffects', 'Tree Shaking'],
        `{\n  "sideEffects": [\n    "*.css"\n  ]\n}`
      ),
      q(
        'mid',
        '为什么 Babel、TypeScript 编译器和 Bundler 常被一起提，但职责并不一样？',
        '是否能区分语法转换、类型检查和产物组织。',
        'Babel 更擅长语法转换，TypeScript 编译器负责类型系统并可兼做部分转换，Bundler 则负责依赖图、分包和资源产物。把三者职责说清楚，能体现你对构建链路不是“只会配插件”。',
        'txt',
        ['Babel', 'TypeScript', 'Bundler'],
        `Babel -> 语法降级\nTypeScript -> 类型检查/转译\nBundler -> 依赖打包/产物优化`
      ),
      q(
        'senior',
        '为什么 Monorepo 工具链问题本质上不是“仓库放一起”这么简单？',
        '是否理解缓存、受影响范围和发布策略才是关键。',
        'Monorepo 真正的难点在于依赖关系可视化、增量构建、受影响范围计算和统一发布策略。如果这些没做好，仓库放一起只会放大构建和协作成本。',
        'json',
        ['Monorepo', '增量构建'],
        `{\n  "workspaces": [\n    "apps/*",\n    "packages/*"\n  ]\n}`
      ),
    ],
  },
  {
    slug: 'internationalization',
    title: '国际化与本地化',
    eyebrow: 'Frontend Master Prep / i18n & l10n',
    description:
      '基于仓库 `17_Internationalization_and_Localization` 整理，覆盖文案、日期货币、RTL、翻译键管理和多语言工程实践。',
    summary: '文案翻译、日期货币、RTL、翻译键治理',
    stats: [
      {label: '来源', value: '17_Internationalization_and_Localization'},
      {label: '常见追问', value: 'Intl / RTL / fallback'},
    ],
    focusAreas: ['语言资源', '格式化', '多语言工程治理'],
    questions: [
      q(
        'junior',
        '国际化和本地化的区别是什么？',
        '是否知道 i18n 是能力建设，l10n 是落地到具体地区。',
        '国际化是让产品具备多语言、多地区适配能力；本地化则是把内容、格式、习惯和合规要求真正适配到某个地区。前者偏架构，后者偏具体市场落地。',
        'js',
        ['i18n', 'l10n'],
        `new Intl.DateTimeFormat('zh-CN', {dateStyle: 'long'}).format(new Date());`
      ),
      q(
        'mid',
        '为什么日期、货币和复数规则不能直接拼字符串？',
        '是否理解语言规则和地区格式远比文案切换复杂。',
        '不同地区的日期顺序、货币符号位置、小数分隔符和复数规则都不同。直接字符串拼接既容易出错，也很难维护，应该尽量使用 `Intl` 系列 API 或成熟的 i18n 方案。',
        'js',
        ['Intl', '格式化'],
        `const price = new Intl.NumberFormat('en-US', {\n  style: 'currency',\n  currency: 'USD',\n}).format(1299);`
      ),
      q(
        'senior',
        '多语言站点为什么要提前考虑 RTL 和布局镜像？',
        '是否意识到国际化会影响布局体系，而不只是文本资源。',
        '阿拉伯语、希伯来语等 RTL 语言会影响排版方向、图标朝向和交互习惯。如果布局从一开始只按 LTR 设计，后续再补 RTL 往往代价很大。',
        'css',
        ['RTL', '布局'],
        `html[dir='rtl'] .toolbar {\n  flex-direction: row-reverse;\n}`
      ),
      q(
        'junior',
        '为什么翻译键不应该直接用整句英文充当唯一标识？',
        '是否理解文案变更和资源管理的耦合问题。',
        '直接把英文句子当 key，会让文案微调演变成资源键变更，影响复用、搜索和版本管理。更稳妥的做法是使用语义化 key，并把显示文案交给翻译资源维护。',
        'json',
        ['翻译键', '资源管理'],
        `{\n  "interview.topic.react.title": "React 面试题"\n}`
      ),
      q(
        'mid',
        '为什么国际化项目要明确 fallback 语言策略？',
        '是否知道缺失翻译时的体验不能靠运气。',
        '翻译资源总会出现未覆盖或延迟上线的情况，如果没有 fallback 机制，用户就可能看到空白、占位 key 或混乱语言。合理的默认语言和降级顺序，是多语言站点稳定性的基础。',
        'js',
        ['fallback', '稳定性'],
        `i18n.init({\n  lng: 'fr-FR',\n  fallbackLng: ['en', 'zh-CN'],\n});`
      ),
      q(
        'senior',
        '为什么本地化不仅是翻译，还包括业务与合规差异？',
        '是否理解国际化会延伸到支付、地址、法务和内容审核。',
        '进入不同地区后，除了文案语言，往往还要处理地址格式、手机号校验、税费展示、隐私协议和内容合规等差异。本地化如果只停留在翻译层，业务上线后很容易踩地区规则问题。',
        'txt',
        ['本地化', '地区差异'],
        `语言 -> 文案\n地区 -> 时间/货币/地址\n合规 -> 隐私/税务/内容规则`
      ),
      q(
        'mid',
        '为什么复数、性别和占位变量会让 i18n 难度陡增？',
        '是否理解真实语言规则比“键值替换”复杂得多。',
        '很多语言会因为数量、性别或语境变化而切换不同句式，简单字符串拼接很快就会失控。成熟的国际化方案通常会内建 plural、select 和变量插值规则。',
        'json',
        ['plural', '消息格式'],
        `{\n  "cart.items": "{count, plural, one {# item} other {# items}}"\n}`
      ),
      q(
        'senior',
        '为什么多语言资源加载策略也会影响性能与发布效率？',
        '是否知道语言包过大或全量打包会伤害首屏。',
        '如果所有语言资源都被打进首包，页面体积会被显著放大；如果拆得过细，又会增加请求和切换复杂度。合理的语言包分片、按需加载和缓存策略，是国际化工程化的重要组成。',
        'js',
        ['语言包', '按需加载'],
        `const messages = await import(\`./locales/\${locale}.json\`);\ni18n.load(locale, messages.default);`
      ),
    ],
  },
  {
    slug: 'seo',
    title: 'SEO 与可发现性',
    eyebrow: 'Frontend Master Prep / SEO & Discoverability',
    description:
      '基于仓库 `18_SEO_and_Discoverability` 整理，覆盖元信息、结构化数据、渲染策略、抓取与站点可发现性。',
    summary: 'Meta、结构化数据、抓取、站点可发现性',
    stats: [
      {label: '来源', value: '18_SEO_and_Discoverability'},
      {label: '常见追问', value: 'Meta / Sitemap / SSR'},
    ],
    focusAreas: ['搜索引擎抓取', '内容语义', '分享与收录'],
    questions: [
      q(
        'junior',
        '为什么 title 和 meta description 仍然是 SEO 基础题？',
        '是否理解搜索结果展示与内容摘要的关系。',
        '因为它们直接影响搜索结果页的主题识别和点击意愿。虽然搜索引擎不一定完全照搬 description，但规范的标题与摘要仍然是基础内容信号。',
        'html',
        ['Meta', 'SEO'],
        `<title>前端面试题库 | JavaScript、React、性能优化</title>\n<meta name="description" content="按专题整理前端面试题、参考答案与代码示例。" />`
      ),
      q(
        'mid',
        '结构化数据为什么能提升“可发现性”，但不能替代内容质量？',
        '是否知道 schema.org 是补充语义，不是排名捷径。',
        '结构化数据能帮助搜索引擎更准确理解页面内容类型，例如文章、问答、面包屑和职位信息，但它只是增强语义，不会替代真实内容质量、页面体验和外部信号。',
        'json',
        ['Schema.org', '结构化数据'],
        `{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": []\n}`
      ),
      q(
        'senior',
        '为什么 JavaScript 渲染站点 still 要关注抓取预算和首轮 HTML？',
        '是否理解可执行脚本不等于抓取效率足够高。',
        '搜索引擎虽然能执行部分 JavaScript，但渲染队列、抓取预算和延迟执行都会影响收录效率。对重要内容页来说，能在首轮 HTML 中提供主要文本与元信息，通常仍然更稳。',
        'html',
        ['SSR', '抓取预算'],
        `<link rel="canonical" href="https://example.com/docs/categories/react" />\n<link rel="sitemap" href="/sitemap.xml" />`
      ),
      q(
        'junior',
        '为什么语义化标题层级会影响 SEO 和可读性？',
        '是否知道搜索引擎和辅助技术都依赖文档结构。',
        '清晰的标题层级能帮助搜索引擎理解页面主题结构，也能改善用户扫描阅读和辅助技术导航体验。`h1-h6` 不只是样式钩子，而是内容结构的一部分。',
        'html',
        ['语义化', '标题结构'],
        `<article>\n  <h1>React 面试题</h1>\n  <h2>Hooks</h2>\n  <h3>useEffect</h3>\n</article>`
      ),
      q(
        'mid',
        '为什么 canonical 对多路由或参数页很重要？',
        '是否理解重复内容会稀释搜索信号。',
        '当同一内容能通过多个 URL 访问时，搜索引擎可能把它们视为重复页，导致权重分散。`canonical` 用来声明首选地址，帮助统一信号。',
        'html',
        ['canonical', '重复内容'],
        `<link rel="canonical" href="https://example.com/docs/categories/javascript" />`
      ),
      q(
        'senior',
        '为什么 SEO 题最后常会追问“你怎么验证优化有效”？',
        '是否具备结果导向而不是只会列做法。',
        'SEO 不是做完 meta 标签就结束了，仍要通过收录、排名、点击率、抓取日志和页面体验指标来验证结果。能说出监控维度和验证周期，说明你做过真实优化闭环。',
        'txt',
        ['验证', 'SEO 指标'],
        `观察项：收录量 / CTR / 平均排名 / 抓取状态 / Core Web Vitals`
      ),
      q(
        'mid',
        '为什么 sitemap 和 robots.txt 经常会一起被问到？',
        '是否理解一个偏“告诉搜索引擎有哪些页”，一个偏“告诉它别抓什么”。',
        '`sitemap.xml` 用来帮助搜索引擎发现和理解站点 URL 结构，`robots.txt` 则用于声明爬虫访问规则。两者都不保证收录或屏蔽成功，但它们是站点抓取治理的基础设施。',
        'txt',
        ['sitemap', 'robots'],
        `Sitemap: https://example.com/sitemap.xml\nUser-agent: *\nDisallow: /admin`
      ),
      q(
        'senior',
        '为什么 SEO 在现代前端项目里常和性能、可访问性一起讨论？',
        '是否理解搜索引擎越来越重视真实页面体验。',
        'SEO 早就不只是关键词和 meta 标签。页面是否可抓取、加载是否快、布局是否稳定、语义是否清晰、可访问性是否合理，都会共同影响可发现性和用户停留表现。',
        'txt',
        ['体验信号', '综合优化'],
        `SEO = 可抓取 + 可理解 + 可访问 + 可快速到达核心内容`
      ),
    ],
  },
];
