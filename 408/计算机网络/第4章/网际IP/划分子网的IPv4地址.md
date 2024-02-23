---
tags: 计算机网络  [obsidian]
cards-deck: 考研::计算机网络
---

![[Pasted image 20220912221726.png]]

## 划分子网的IPv4地址
用32位子网掩码
![[Pasted image 20211014155606.png]]
![[Pasted image 20211014155658.png]]
![[Pasted image 20211014160613.png]]

如何划分子网IPv4地址？ #card 
保持网络号，借用**主机**号的n比特作为子网号，网络号+子网号作为子网掩码
![[Pasted image 20211014160613.png]]
^1634200949968

已知IPv4地址和子网掩码,如何求网络地址? #card 
逐比特进行**逻辑与**运算
![[Pasted image 20220913194938.png]]
^1663069830085


## 默认子网掩码
![[Pasted image 20220913195023.png]]
#card-spaced 
^1663069830097
