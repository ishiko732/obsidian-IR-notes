#flashcards

# 大数据的特点
?
1. 大量Volume
2. 高速Velocity
3. 多样Variety
4. 低价值密度Value
---
# Hadoop
<!--SR:!2022-01-23,1,230-->

什么是Hadoop :: 用于解决海量数据的**存储**和**分析计算**的问题的工具
<!--SR:!2022-01-24,2,244-->

## Hadoop的优势
1. 高可靠性
2. 高可扩展性
3. 高效性
4. 高容错性

## Hadoop版本区别 (重点) ?
 ![[Pasted image 20220121103806.png]]

 Hadoop1.x中,没有Yarn资源调度,使用MapReduce来处理业务逻辑的运算和资源的调度,耦合性大
 Hadoop2.x中,增加来Yarn来进行资源调度,MapReduce只负责运算操作
 Hadoop3.x中与2.x组成上没有变化


 ## Hadoop 的组成
 

- Hadoop Distributed File System，简称HDFS，是一个分布式文件系统。
![[Pasted image 20220121105116.png]]
- Yet Another Resource Negotiator简称YARN ，另一种资源协调者，是Hadoop的资源管理器
![[Pasted image 20220121105159.png]]
- MapReduce将计算过程分为两个阶段：Map和Reduce
> Map阶段并行处理输入数据
> Reduce阶段对Map结果进行汇总


## Hadoop 常用端口号
![[Pasted image 20220121110505.png]]

Hadoop2.x中 NameNode 内部通信端口为 :: 8020或者9000
<!--SR:!2022-01-23,1,230-->
Hadoop2.x中 NameNode HTTPUI端口为 :: 50070
<!--SR:!2022-01-23,1,230-->
Hadoop2.x中 MapReduce查看执行任务端口为 :: 8088
<!--SR:!2022-01-23,1,224-->
Hadoop2.x中 历史服务器通信端口为 :: 19888
<!--SR:!2022-01-23,1,224-->

Hadoop3.x中 NameNode 内部通信端口为 :: 8020/9000/9820
<!--SR:!2022-01-23,1,224-->
Hadoop3.x中 NameNode HTTPUI端口为 :: 9870
<!--SR:!2022-01-23,1,224-->
Hadoop3.x中 MapReduce查看执行任务端口为 :: 8088
<!--SR:!2022-01-23,1,224-->
Hadoop3.x中 历史服务器通信端口为 :: 19888
<!--SR:!2022-01-25,3,258-->