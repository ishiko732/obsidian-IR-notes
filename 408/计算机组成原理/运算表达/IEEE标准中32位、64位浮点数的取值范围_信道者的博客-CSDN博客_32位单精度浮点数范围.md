---
page-title: "IEEE标准中32位、64位浮点数的取值范围_信道者的博客-CSDN博客_32位单精度浮点数范围"
url: https://blog.csdn.net/chr1991/article/details/85109652
date: "2022-08-01 22:25:57"
tags: 计算机组成原理 [obsidian] 
cards-deck: 考研::计算机组成原理
---
## IEEE标准中32位、64位浮点数的取值范围

**目录**

[32位](https://blog.csdn.net/chr1991/article/details/85109652#t0)

[对于正浮点数](https://blog.csdn.net/chr1991/article/details/85109652#t1)

[对于零](https://blog.csdn.net/chr1991/article/details/85109652#t2)

[对于负浮点数](https://blog.csdn.net/chr1991/article/details/85109652#t3) 

[64位](https://blog.csdn.net/chr1991/article/details/85109652#t4)

[对于正浮点数](https://blog.csdn.net/chr1991/article/details/85109652#%E5%AF%B9%E4%BA%8E%E6%AD%A3%E6%B5%AE%E7%82%B9%E6%95%B0)

[对于负浮点数](https://blog.csdn.net/chr1991/article/details/85109652#t5)


---

IEEE标准中用$x=(-1)^s\times M\times 2^E]$来表示一个[浮点](https://so.csdn.net/so/search?q=%E6%B5%AE%E7%82%B9&spm=1001.2101.3001.7020)数，其中
$s$决定正负号，$M$是尾数，$E$是阶数。

## 32位
在32位浮点数中，符号位占1位，尾数占23位，阶数占8位。在正常情况下，阶数不包括全零和全一的情况，偏置常数是127，因此它的取值范围是-126-127。尾数值等于1+尾数23位表示的小数。于是

### *对于正浮点数*
$\begin{aligned} 1.0\times 2^{-126}\approx 1.1755\times 10^{-38}\le FloatNum \le (2-2^{-23})\times 2^{127}\approx 3.4028\times 10^{38}\end{aligned}$

32位浮点数大于$3.4\times 10^{38}$时，上溢出。当浮点数小于$1.2\times 10^{-38}$时，也可以溢出。

### *对于零*
$float\ number = 0$

### *对于负浮点数* 
$\begin{aligned} -(2-2^{-23})\times 2^{127}\approx -3.4028\times 10^{38}\le FloatNum \le -1.0\times 2^{-126}\approx -1.1755\times 10^{-38}\end{aligned}$

32位浮点数小于$-3.4\times 10^{38}$时，下溢出。正常的32位浮点数可以表示绝对值最小为$1.2\times 10^{-38}$，有效数位约7~8位。这对于神经网络、PageRank算法的计算已经足够了。纳米是$10^{-9}$米，微米是$10^{-6}$米。

## 64位

在64位浮点数中，符号位占1位，尾数占52位，阶数占11位。在正常情况下，阶数不包括全零和全一的情况，偏置常数是1023，因此它的取值范围是-1022 - 1023，尾数值等于1+尾数52位表示的小数。同理，

### *对于正浮点数*

$\begin{aligned} 1.0\times 2^{-1022}\approx2.2251\times 10^{-308}& \leq FloatNum \leq (2-2^{-52}) \times 2^{1023} \approx1.7977\times10^{308} \end{aligned}$

对于零和32位类似。

### *对于负浮点数*

$\begin{aligned}-(2-2^{-52})\times 2^{1023}\approx -1.7977 \times 10^{308} \le FloatNum\le-1.0\times 2^{-1022}\approx -2.2250 \times 10^{-308}\end{aligned}$

64位浮点数可以表示的绝对值，最大为$1.8\times 10^{308}$，最小为$2.2\times 10^{-308}$，有效数位约15位。普朗克常数约为$6.6\times 10^{-34}J\cdot s$，电子的电荷约为$1.6\times 10^{-19}C$，阿佛加德罗常数约为$6.02\times 10^{22}$。双精度浮点数的表示范围远远大于日常生活中的需要。