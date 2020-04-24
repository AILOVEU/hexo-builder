---
title: 网站更新说明
tags: 
- Other
up: true
date: 2021/1/1 23:00:00
excerpt: 无
---
网站更新记录：
|时间|更新内容|文件|
|:-:|:-:|:-:|
|2020/4/18|图床开始迁移到七牛，支持10G每月内的免费CDN|picGo、七牛、滴滴云、阿里云域名、域名备案|
|2020/4/17|完成域名备案，本网站支持访问 http://ailoveu.top 、http://www.ailoveu.top 、https://ailoveu.github.io (永久) ||
|2020/4/4|使用git hook自动拉取最新版本页面|参考https://www.jianshu.com/p/e88825d88347|
|2020/4/4|myjs调整自执行函数，防止变量作用域冲突||
|2020/3/31|使用gulp压缩css、js、html||
|2020/3/26|统一了妹子图的样式 class="lazy-img" class="lazy-gif"|Annie\source\ .. \custom.styl|
|2020/3/26|table适配手机宽度|source\css\_base\base.styl - table:width:100%;word-break:break-all;英文换行|
|2020/3/26|实现pc端的刮刮乐效果，手机端暂不兼容|myjs.js|
|2020/3/24|添加鼠标样式html cursor||
|2020/2/27|因为上一条的修改，需要让nav-trigger尽早出来|Annie/source/js/main.js修改scrollLimitG为50|
|2020/2/27|只在首页展示fixbackground、load|header.ejs,添加if(is_home)控制|
|2020/2/27|删除大部分不重要的文章||
|2020/2/9|修复audio不显示问题|添加audio {改进dth:300px;height: 54px;}|
|2020/2/9|首次引入网易云音乐外联|直接使用外联地址|
|2020/2/4|增加星空连线背景|参考https://www.lvfan.xyz/等|
|2020/2/4|更换logo和链接指向||
|2020/2/3|增加刮刮乐图片能力|参考http://www.fly63.com/article/detial/5788|
|2020/1/30|更改blockquote样式为#74B1DA|Annie\source\ .. \custom.styl|
|2020/1/30|添加myblockquote引用样式|Annie\source\ .. \base.stzyl|
|2020/1/19|添加mermaid支持||
|2020/1/19|文章内图片根据data-scr配置打开网页还是浏览图片|Annie\layout\ ..\post\gallery.ejs|
|2020/1/18|导航页图片添加外边框||
|2020/1/14|原创内容增加标识||
|2020/1/14|打开categories、gallery（直接引用的，内容暂未编辑）、tags、about组件||
|2020/1/10|随机主页图片||
|2020/1/10|调整主页图片的显示比例||
|2020/1/10|配置主题喜欢、评论、访问统计、本地搜索功能||
|2020/1/9|更换新主题||
|2020/1/8|解决post页面不居中的问题||
|2019/12/18|解决首页文章在手机上显示异常的问题||
|2019/12/17|项目上线||

后期准备上线功能：
- 改进刮刮乐手机上体验
- ~~只在首页展示fixbackground~~
- ~~可能会更换图床(现在的太慢了)~~
- ~~解决网速慢的情况下的鬼畜情况~~
- 名言展示生成截图
- 增加顶置组件
- gulp压缩图片
- 增加时间轴样式
- 修复返回/页面会刷新
- 添加每页号码翻页