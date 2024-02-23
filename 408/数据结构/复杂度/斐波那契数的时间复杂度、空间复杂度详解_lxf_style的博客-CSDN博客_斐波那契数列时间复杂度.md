---
page-title: "斐波那契数的时间复杂度、空间复杂度详解_lxf_style的博客-CSDN博客_斐波那契数列时间复杂度"
url: https://blog.csdn.net/lxf_style/article/details/80458519
date: "2022-07-30 22:46:35"
tags: [obsidian] 
cards-deck: Obsidian::TODO
---
斐波那契数：斐波那契数列指的是1、1、2、3、5、8、13、21、······这样一个数列，我们可以发现它后面的一个数是前两个数之和。而在这个数列中的数就被称为斐波那契数。

时间复杂度：时间复杂度实际就是一个函数，该函数计算的是执行基本操作的次数。

时间复杂度的O渐进表示：算法语句总的执行次数是关于问题规模N的某个函数，记为f(N)，N称为问题的规模。语句总的执行次数记为T(N)，当N不断变化时，算法执行次数T(N)的增长速率和f(N)的增长速率相同。则有T(N) =O(f(N))，称O(f(N))为时间复杂度的O渐进表示法。

空间复杂度：类似于算法的时间复杂度，它是算法所需存储空间的度量，记作S(n)=O(f(n))。

接下来就讨论一下斐波那契数的相关问题

用C语言实现：求第N个斐波那契数

这里可以采用递归、循环、尾递归三种方法来解决

方法一：递归
```c
#include<stdio.h>

#include<stdlib.h>

long long Fib(long long N)

{

  if (N < 3)    //当N<3时，斐波那契数为1

  return 1;

  return Fib(N \- 1) + Fib(N \- 2);//函数递归

}

int main()

{

  int n = 0;

   scanf("%d",&n);

   printf("%d",Fib(n));

   system("pause");

   return 0;

}
```

1.时间复杂度   O(2^n)

首先可以根据函数递归执行顺序画出下图的二叉树结构（假设求第五个斐波那契数）

![](https://img-blog.csdn.net/20180526005833138)

2.空间复杂度    O(1)

![](https://img-blog.csdn.net/20180526005844491)

①-③：调用Fib(5),首先需调用Fib(4),Fib(4)要先调用Fib(3)，逐步调用直至返回Fib(2)的值1，Fib执行结束，所创建空间销毁。此时Fib(5)、Fib(4)、Fib(3)均未调用结束，程序共占用4个函数栈帧空间。

④-⑨：Fib(2)执行结束，接下来调用Fib(1)，创建一个函数栈帧空间，调用结束返回1后，该空间销毁，此时可得到Fib(3)=2，通过第⑦步返回Fib(3)的值，第⑧步同样创建空间再次调用Fib(2)，调用结束销毁空间，此时可得到Fib(4)=3，通过第⑨步返回Fib(4)的值，此过程最大占用4个函数栈帧空间。

⑩-···：最后和上面一样，调用Fib(3)，将返回值传给Fib(5)的模块，最终得到Fib(5)=5。

整个程序执行过程中，最多占用4个函数栈帧空间的大小，设一个函数栈帧空间为C

因此可得知当n=5时，该程序空间复杂度为O(4C)=>O(1)

当求第n个斐波那契数时，程序空间复杂度为O(n-1)C (n是常数)\=>O(1)

方法二：循环

![](https://img-blog.csdn.net/20180526005859798)

1.当n为1和2时result为1；

2.使用while循环，循环条件为n>2，当n--至n为零循环结束

3.循环内部：将前一次的result赋给新的pre\_result

                    将前一次的pre\_result赋给新的next\_\_oder\_result

                    每次的result通过pre\_result+next\_\_oder\_result进行计算

4.返回result。

```c
#include<stdio.h>

#include<stdlib.h>

long Fib(long N)

{

  int result = 0;      //前两个数之和

  int pre\_result = 1;   //前一个数

  int next\_older\_result = 1; //前前一个数-\_-！

   result = pre\_result;    

   while (N \> 2)           

   {                   

    N\--;

     next\_older\_result = pre\_result;

     pre\_result = result;      

     result = pre\_result + next\_older\_result;//结果为前两个数之和

   }

    return result;

}

int main()

{

     int n = 0;

     scanf("%d",&n);

     printf("%d",Fib(n));

     system("pause");

    return;

}
```
1.时间复杂度    O(n)

程序中循环了n-2次，时间复杂度为O(n-2),保留最高阶时间复杂度为O(n)

2.空间复杂度    O(1)

该程序中创建了3个变量，即创建了3个内存空间，空间复杂度为O(3)即O(1)

方法三：尾递归

![](https://img-blog.csdn.net/20180526005914477)

```c
#include<stdio.h>

#include<stdlib.h>

long Fib(long first, long second, long N)

{

 if (N < 3)

  return 1;

 if (3 == N)

  return first + second;

 return Fib(second, first + second, N \- 1);

}

int main()

{

 int n = 0;

 scanf("%d",&n);

 printf("%d",Fib(1,1,n));

 system("pause");

 return 0;

}
```
1.时间复杂度   O(n)

根据尾递归的图解可看出，计算Fib(1,1,5)时，函数调用了3次，那么计算Fib(1,1,n)时，函数将调用n-2次，

由此可得时间复杂度为O(n-2)即O(n)。

2.空间复杂度   O(n)

![](https://img-blog.csdn.net/20180526005922481)

尾递归的方法，需开辟n-2个空间，空间复杂度为O(n-2)即O(n)。