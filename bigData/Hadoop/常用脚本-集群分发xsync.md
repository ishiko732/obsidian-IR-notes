           

（a）在/home/atguigu/bin目录下创建xsync文件

```shell
[atguigu@hadoop102 opt]$ cd /home/atguigu

[atguigu@hadoop102 ~]$ mkdir bin

[atguigu@hadoop102 ~]$ cd bin

[atguigu@hadoop102 bin]$ vim xsync
```

在该文件中编写如下代码

```shell
           

#!/bin/bash

#1. 判断参数个数

if [ $# -lt 1 ]

then

 echo Not Enough Arguement!

 exit;

fi

#2. 遍历集群所有机器

for host in hadoop102 hadoop103 hadoop104

do

 echo ==================== $host ====================

 #3. 遍历所有目录，挨个发送

 for file in $@

 do

 #4. 判断文件是否存在

 if [ -e $file ]

 then

 #5. 获取父目录

 pdir=$(cd -P $(dirname $file); pwd)

 #6. 获取当前文件的名称

 fname=$(basename $file)

 ssh $host "mkdir -p $pdir"

 rsync -av $pdir/$fname $host:$pdir

 else

 echo $file does not exists!

 fi

 done

done
```

（b）修改脚本 xsync 具有执行权限

```shell
[atguigu@hadoop102 bin]$ chmod +x xsync
```

（c）测试脚本

```shell
[atguigu@hadoop102 ~]$ xsync /home/atguigu/bin
```

（d）将脚本复制到/bin中，以便全局调用

```shell
[atguigu@hadoop102 bin]$ sudo cp xsync /bin/
```

（e）同步环境变量配置（root所有者）

```shell
[atguigu@hadoop102 ~]$ sudo ./bin/xsync /etc/profile.d/my_env.sh
```

注意：如果用了sudo，那么xsync一定要给它的路径补全。

让环境变量生效

```shell
[atguigu@hadoop103 bin]$ source /etc/profile

[atguigu@hadoop104 opt]$ source /etc/profile
```