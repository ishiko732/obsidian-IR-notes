---
tags: 计算机网络 [obsidian]
cards-deck: FSRS::计算机网络
---

使用UDP通信的双方需要在传送数据之前建立连接吗? :: 错误,UDP是面向无连接的不可靠服务,不需要先建立连接. ^1680268092010
使用UDP通信可以随时发送数据? :: 正确 ^1680268092014

![[Pasted image 20211203092722.png]]
UDP：
- 支持1对1，1对多，多播
- UDP面向应用报文
- 对丢弃和误码不处理，**向上提供无连接的不可靠传输服务**
TCP：
- 只支持1对1
- TCP面向字节流
- 支持全双工通信（边发送边接收）
- **向上提供面向连接的可靠传输服务**

![[Pasted image 20211201212536.png]]

![[Pasted image 20211201212623.png]]


UDP支持哪种传输方式？::1对1，1对多，多播。 ^1680268092019
UDP对丢弃和误码做了什么处理？::不处理，向上提供无连接的不可靠传输服务。 ^1680268092023
TCP支持哪种传输方式？::只支持1对1。 ^1680268092027
TCP是面向什么的流？::字节流。 ^1680268092032
TCP是否支持全双工通信？::支持全双工通信，边发送边接收。 ^1680268092038
TCP向上提供什么样的传输服务？::面向连接的可靠传输服务。 ^1680268092042

使用TCP协议收发的双方,基于TCP连接的可靠信道进行数据传输,不会出现==误码==,==丢失==,==失序==,==重复==等传输差错.
^1680268092047
UDP 适用于哪些实时应用？	适用于 IP 电话、视频会议等实时应用。
UDP 向上层提供何种传输服务？	向上层提供无连接不可靠传输服务。
TCP 适用于哪些要求可靠传输的应用？	适用于要求可靠传输的应用，例如文件传输。
TCP 向上层提供何种传输服务？	向上层提供面向连接的可靠传输服务。

## TCP/UDP首部格式对比
![[Pasted image 20230331210304.png]]


UDP首部格式包含的字段是(从左到右顺序)? :: 源端口,目的端口,长度,检验和 ![[Pasted image 20230331210411.png]] ^1680268092052

UDP用户数据报首部的长度为多少字节? :: 8 字节 ^1680268092057
TCP报文段首部最小==20==字节，最大==60==字节
^1680268092062
