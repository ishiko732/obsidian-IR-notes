---
tags: 数据结构 [obsidian]
cards-deck: 考研::数据结构
---


---
page-title: "关于完全二叉树高度h与结点个数n的推导_举世无双勇的博客-CSDN博客_完全二叉树的高度公式"
url: https://blog.csdn.net/nb_zsy/article/details/120387834
date: "2022-08-30 23:15:02"

---

> 具有n个(n>0)结点的完全二叉树的高度h为：h = ⌊log2n⌋ + 1

---

## 关于完全二叉树高度h与结点个数n的推导

推导1：具有n个(n>0)结点的[完全二叉树](https://so.csdn.net/so/search?q=%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91&spm=1001.2101.3001.7020)的高度h为：⌈log2(n+1)⌉  
由于高度h的满[二叉树](https://so.csdn.net/so/search?q=%E4%BA%8C%E5%8F%89%E6%A0%91&spm=1001.2101.3001.7020)共有2h\-1个结点  
高度为h-1的满二叉树有2h-1\-1个结点  
可得2h-1\-1 < n <=2h\-1  
[不等式](https://so.csdn.net/so/search?q=%E4%B8%8D%E7%AD%89%E5%BC%8F&spm=1001.2101.3001.7020)同时+1：2h-1 < n+1 <=2h  
不等式同时取对数：  
h-1 < log2n+1 <= h  
可得h=⌈log2(n+1)⌉

![在这里插入图片描述](https://img-blog.csdnimg.cn/ca1893eb9bf74c2c9ab6a5160d6e4746.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5Li-5LiW5peg5Y-M5YuH,size_20,color_FFFFFF,t_70,g_se,x_16)  
推导2：具有n个(n>0)结点的完全二叉树的高度h为：h = ⌊log2n⌋ + 1  
由于高度h的满二叉树共有2h\-1个结点  
高度为h-1的满二叉树有2h-1\-1个结点  
可得2h-1 <= n <2h  
不等式取对数：
```
h-1 <= log2n <h  
h = ⌊log2n⌋ + 1  
```
![[Pasted image 20220830231646.png]]


具有n个(n>0)结点的完全二叉树的高度h为? #card
$$h =\left\lfloor\log _2(n+1)\right\rfloor \text { 或 }\left\lfloor\log _2 n\right\rfloor+1$$
^1661872753984
