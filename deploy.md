# 部署指南

## Netlify 部署

### 方法一：通过 Git 连接（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Netlify](https://netlify.com)
3. 点击 "New site from Git"
4. 选择 GitHub 并授权
5. 选择您的仓库
6. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
7. 点击 "Deploy site"

### 方法二：手动部署

1. 本地运行 `npm run build`
2. 将 `dist` 文件夹拖拽到 Netlify 部署页面

## Vercel 部署

1. 安装 Vercel CLI: `npm i -g vercel`
2. 在项目根目录运行: `vercel`
3. 按照提示完成部署

## GitHub Pages 部署

1. 安装 gh-pages: `npm install --save-dev gh-pages`
2. 在 package.json 添加脚本:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. 运行: `npm run build && npm run deploy`

## 环境变量配置

如果需要配置环境变量（如API密钥），请在部署平台的环境变量设置中添加：

- `VITE_ZHIPU_API_KEY`: 智谱AI API密钥（可选，也可在应用中配置）

## 域名配置

部署完成后，您可以：
1. 使用平台提供的默认域名
2. 配置自定义域名
3. 启用 HTTPS（通常自动启用）

## 注意事项

- 确保所有依赖都在 package.json 中正确声明
- 检查构建命令和输出目录配置
- 测试生产环境构建: `npm run build && npm run preview`