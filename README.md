# Hidetoshi & Nevaeh's Database

一个基于 MkDocs 构建的综合性知识数据库，为 Hidetoshi 和 Nevaeh 提供知识管理和分享平台。

## 📖 项目简介

这是一个使用 MkDocs 和 Material for MkDocs 主题构建的静态文档网站，主要包含：

- 🍳 **食谱数据库** - 新疆特色菜谱和家常菜做法
- 📚 **知识管理** - 个人知识库和笔记整理
- 🌐 **在线访问** - 通过 GitHub Pages 提供在线访问

## 🚀 快速开始

### 环境要求

- Python 3.7+
- pip 或 pip3

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/Hidetoshi20/Hidetoshi-Nevaeh-DB.git
cd Hidetoshi-Nevaeh-DB

# 安装依赖
pip3 install -r requirements.txt
```

### 本地运行

```bash
# 启动本地开发服务器
mkdocs serve

# 访问 http://127.0.0.1:8000 查看网站
```

### 构建部署

```bash
# 构建静态文件
mkdocs build

# 部署到 GitHub Pages
mkdocs gh-deploy
```

## 📁 项目结构

```
Hidetoshi&Nevaeh-DB/
├── docs/                          # 文档目录
│   ├── Recipe Book/               # 食谱数据库
│   │   ├── 主食类/               # 米饭、抓饭等主食
│   │   ├── 面食类/               # 面条、包子等面食
│   │   ├── 肉类菜品/             # 肉类为主的菜品
│   │   ├── 蔬菜类/               # 蔬菜为主的菜品
│   │   ├── 汤类/                 # 汤品
│   │   └── 其他菜品/             # 其他分类
│   └── ...                       # 其他文档
├── mkdocs.yml                     # MkDocs 配置文件
├── requirements.txt               # Python 依赖
└── README.md                     # 项目说明
```

## 🍳 食谱分类

项目中的食谱已按以下分类整理：

| 分类 | 数量 | 特色 |
|------|------|------|
| **主食类** | 4个 | 抓饭、米饭等主食 |
| **面食类** | 8个 | 面条、包子、饼子等 |
| **肉类菜品** | 4个 | 牛肉、羊肉等肉类菜品 |
| **蔬菜类** | 4个 | 土豆、茄子等蔬菜菜品 |
| **汤类** | 1个 | 汤品 |
| **其他菜品** | 1个 | 其他特色菜 |

## 🎨 功能特性

### 网站功能
- 📱 **响应式设计** - 支持手机、平板、电脑访问
- 🌙 **深色模式** - 支持明暗主题切换
- 🔍 **全文搜索** - 快速查找内容
- 📱 **移动优化** - 移动端友好体验

### 内容管理
- 📝 **Markdown 支持** - 使用 Markdown 编写内容
- 🏷️ **标签系统** - 内容分类和标签
- 📂 **自动导航** - 自动生成导航菜单
- 🔗 **内部链接** - 支持文档间链接

### 技术特性
- ⚡ **静态生成** - 快速加载
- 🔧 **插件扩展** - 丰富的插件生态
- 📊 **SEO 优化** - 搜索引擎友好
- 🚀 **CDN 支持** - 全球加速访问

## 🛠️ 技术栈

- **MkDocs** - 静态站点生成器
- **Material for MkDocs** - 现代化主题
- **Python** - 后端支持
- **GitHub Pages** - 免费托管

## 📦 依赖包

```
mkdocs                    # 静态站点生成器
mkdocs-material          # Material Design 主题
pymdown-extensions       # Markdown 扩展
mkdocs-awesome-pages-plugin  # 页面管理插件
```

## 🌐 在线访问

- **网站地址**: https://hidetoshi20.github.io/Program-Knowledge-Database/
- **GitHub 仓库**: https://github.com/Hidetoshi20/Hidetoshi-Nevaeh-DB

## 📝 使用说明

### 添加新食谱

1. 在 `docs/Recipe Book/` 对应分类文件夹中创建新的 `.md` 文件
2. 使用 Markdown 格式编写食谱内容
3. 添加适当的标签和分类信息
4. 提交并推送到 GitHub

### 修改配置

编辑 `mkdocs.yml` 文件来：
- 修改网站标题和描述
- 调整主题设置
- 配置插件和扩展
- 自定义导航结构

### 本地开发

```bash
# 实时预览（文件修改后自动刷新）
mkdocs serve

# 构建生产版本
mkdocs build

# 检查链接
mkdocs build --strict
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👥 作者

- **Hidetoshi Dekisugi** - 项目创建者
- **Nevaeh** - 项目协作者

## 🙏 致谢

- [MkDocs](https://www.mkdocs.org/) - 优秀的静态站点生成器
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - 精美的 Material Design 主题
- [GitHub Pages](https://pages.github.com/) - 免费的静态网站托管服务

---

⭐ 如果这个项目对你有帮助，请给我们一个星标！ 