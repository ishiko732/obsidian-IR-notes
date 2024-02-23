# Hadoop 目录结构
```shell
           

[atguigu@hadoop102 hadoop-3.1.3]$ ll

总用量 52

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 **bin**

drwxr-xr-x. 3 atguigu atguigu 4096 5月 22 2017 **etc**

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 include

drwxr-xr-x. 3 atguigu atguigu 4096 5月 22 2017 **lib**

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 libexec

-rw-r--r--. 1 atguigu atguigu 15429 5月 22 2017 LICENSE.txt

-rw-r--r--. 1 atguigu atguigu 101 5月 22 2017 NOTICE.txt

-rw-r--r--. 1 atguigu atguigu 1366 5月 22 2017 README.txt

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 **sbin**

drwxr-xr-x. 4 atguigu atguigu 4096 5月 22 2017 **share**
```     

（1）bin目录：存放对Hadoop相关服务（hdfs，yarn，mapred）进行操作的脚本

（2）etc目录：Hadoop的配置文件目录，存放Hadoop的配置文件

（3）lib目录：存放Hadoop的本地库（对数据进行压缩解压缩功能）

（4）sbin目录：存放启动或停止Hadoop相关服务的脚本

（5）share目录：存放Hadoop的依赖jar包、文档、和官方案例