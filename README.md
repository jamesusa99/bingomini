# BingoMini 产品官网

BingoMini：您的个人私有 AI 算力中心 — 全本地运行，数据永不出屋。

## 项目结构

```
bingomini/
├── index.html       # 中文首页
├── whitepaper.html  # 中文白皮书
├── en/
│   ├── index.html       # 英文首页
│   └── whitepaper.html  # 英文白皮书
├── styles.css   # 样式（共用）
├── script.js    # 导航与交互（共用）
└── README.md
```

## 语言切换

- 中文版：`/` 或 `/index.html`、`/whitepaper.html`
- English：`/en/` 或 `/en/index.html`、`/en/whitepaper.html`
- 导航栏提供语言切换链接

## 本地预览

```bash
# 使用 Python
python3 -m http.server 8080

# 或使用 Node.js
npx serve .
```

访问 http://localhost:8080

## 页面区块

1. **首页 (Hero)** — 核心价值主张、三大优势
2. **硬件规格** — Bingo Mini I 详细参数
3. **应用生态** — AI 应用全家桶
4. **隐私安全** — 物理隔离、沙盒、无审计
5. **快速开始** — 三步开启
6. **开发者** — 镜像、存储、API 说明
#bingomini
