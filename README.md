# mmf-blog vuejs 2.0 jsx语法 leancloud api版

demo: [https://lincenying.github.io/mmf-blog-vue2-jsx-lc/](https://lincenying.github.io/mmf-blog-vue2-jsx-lc/)

---

#### 其他版本

react版本: [https://github.com/lincenying/mmf-blog-react](https://github.com/lincenying/mmf-blog-react)

react(dva)版本: [https://github.com/lincenying/mmf-blog-dva](https://github.com/lincenying/mmf-blog-dva)

vue1版本: [https://github.com/lincenying/mmf-blog-vue](https://github.com/lincenying/mmf-blog-vue)

vue2版本: [https://github.com/lincenying/mmf-blog-vue2](https://github.com/lincenying/mmf-blog-vue2)

vue2(jsx语法)版本: [https://github.com/lincenying/mmf-blog-vue2-jsx](https://github.com/lincenying/mmf-blog-vue2-jsx)

vue2(jsx语法,leancloud)版本: [https://github.com/lincenying/mmf-blog-vue2-jsx-lc](https://github.com/lincenying/mmf-blog-vue2-jsx-lc)

vue2 服务端渲染版本: [https://github.com/lincenying/mmf-blog-vue2-ssr](https://github.com/lincenying/mmf-blog-vue2-ssr)

---
1. 到 https://leancloud.cn 申请一个帐号
2. 创建一个 应用
3. 获取 App Key 和 Master Key
4. 修改 ./src/api/index.js 下的下面两行
```
var APP_ID = 'M1SivUjmGWHTFDv6FpwYxTpl-gzGzoHsz'
var APP_KEY = 'OwVDXgMCR09ztWdUIYGqG5Hl'
```
```
// 安装cooking
npm install cooking-cli -g

// 安装依赖
npm install  or  yarn

// 生产环境
npm run build

// 开发环境
npm run dev
```

首页
http://localhost:8080

登录
http://localhost:8080/login.html
