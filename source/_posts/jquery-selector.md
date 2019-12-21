---
title: Jquery选择器介绍
categories:
- IT
tags: 
- jquery
- html
up: false
thumbnail: https://s2.ax1x.com/2019/12/20/QOZIoT.jpg
---
### jquery元素选择器

##### 联合选择器(所有元素都生效):
    ${"#d1,.d2,div"}.css()

##### 后代元素选择器：
    $("#d1 a").css()

##### 儿子选择器：
    $("#d1> a").css()

##### 兄弟选择器（下一个）：
    $("#d1+").css()

##### 兄弟选择器（下所有）：
    $("#d1~").css()

##### 内容选择器：
    $("div:contains(‘我是一段内容’)"）.css()

##### 空内容：
    $("div:empty").css()

##### 元素包含选择器(包含has元素的元素)：
    $("div:has(p)").css() 

##### 有子元素的父元素选择器：
    $("div:parent").css()