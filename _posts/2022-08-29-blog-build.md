---
title: "基于 Github Pages & Jekyll 的个人博客搭建方法"
date: 2022-08-29 11:33:00 +0800
tags: ["Github", "Jekyll"]
categories: ["code"]
---

<!-- # 基于 Github Pages & Jekyll 的个人博客搭建方法 -->
## 1. 软件安装
**清单**
* Git
* Github Desktop (optional)
* Ruby + Devkit
其中，Ruby 安装有如下注意事项：
* 安装包下载地址：https://rubyinstaller.org/downloads/
* 以管理员身份运行安装文件
* 安装目录不要包含中文和空格（空格是一个**坑**，会导致下方的部分命令出现运行时错误）
* 其他选项可默认执行
* MSYS 安装会耗时久一些，耐心
Github Desktop 可以帮助不熟悉 Git 操作的朋友进行 Github 仓库的版本管理。

## 2. Github Pages
Github 上建立以用户 `id` 为第一级名称的 public 仓库：`id`.github.io, 如此获得域名为 https://`id`/github.io 的站点作为博客网站。

## 3. Ruby 相关包安装
在终端运行依次如下指令，安装如下包：
* bundler
* jekyll
* webrick（也是一个**坑**：Ruby3.0.0 以上不会再自带 WebRick，需要自行添加）
```ruby
gem install jekyll bundler
gem install webrick
```

## 4. 建立博客文件和部署到 Github pages
1. 进入自己选定的本地博客目录
2.  安装项目依赖的所有 gem 包。运行  
   `bundle install`
3. 创建博客文件夹。设 [blog name] 为博客名称。运行  
   `jekyll new [blog name]`  
4. 本地预览。进入博客文件夹内后，运行  
   `bundle exec jekyll server`  
   或者（区别在 bundle 的作用）  
   `jekyll server`  
   浏览器进入网址 http://localhost:4000 查看效果。`Ctrl + c` 结束本地预览。   
5. 运行如下命令生成网页文件  
   `jekyll build`  
   将 _site 文件夹**内**的所有文件复制到本地 Github Pages 仓库根目录下。
6. 同步到 Github.

## 5. 应用和修改 theme
在 Github 中搜索 `jekyll theme`，寻找感兴趣的主题，并按照其文档部署到自己的项目，以及自定义的修改。

对相关知识不熟悉的朋友，建议选择 star 较多的项目，可能会 bug 更少，效果更好。

## 6. 其他
`jemoji` 包可以为 jekyll 提供 emoji 支持。

## Reference
*本文介绍择其大纲，细节较为简略。可结合以下文章食用。由于更新时间问题，下述文章的部分内容如今是可能产生问题的，参考时注意规避本文提到的两个坑。*

[1] Github Pages + jekyll 全面介绍极简搭建个人网站和博客  https://zhuanlan.zhihu.com/p/51240503

[2] Jekyll + Github Pages 搭建个人免费博客  https://zhuanlan.zhihu.com/p/87225594

[3] Bundle、Gem、Gemfile关系  https://www.jianshu.com/p/32fcdeb5bbec

[4] Jekyll使用教程笔记  https://juejin.cn/post/6844903623567081486
