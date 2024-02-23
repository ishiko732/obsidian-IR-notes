           

**查看三台服务器Java****进程脚本：jpsall**

```shell
[atguigu@hadoop102 ~]$ cd /home/atguigu/bin

[atguigu@hadoop102 bin]$ vim jpsall
```

输入如下内容

```shell
#!/bin/bash

for host in hadoop102 hadoop103 hadoop104

do

 echo =============== $host ===============

 ssh $host jps

done
```

保存后退出，然后赋予脚本执行权限

```shell
[atguigu@hadoop102 bin]$ chmod +x jpsall
```

**3****）分发/home/atguigu/bin****目录，保证自定义脚本在三台机器上都可以使用

```shell
[atguigu@hadoop102 ~]$ xsync /home/atguigu/bin/
```