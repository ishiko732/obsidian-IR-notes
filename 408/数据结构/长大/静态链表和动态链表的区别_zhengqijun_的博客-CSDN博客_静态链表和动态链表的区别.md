---
page-title: "静态链表和动态链表的区别_zhengqijun_的博客-CSDN博客_静态链表和动态链表的区别"
url: https://blog.csdn.net/zhengqijun_/article/details/78192888
date: "2022-09-29 23:27:17"
tags: [obsidian] 
cards-deck: 考研::数据结构
---
**静态链表和动态链表的区别：**  

静态链表和动态链表是线性表链式存储结构的两种不同的表示方式。

1、静态链表是用类似于数组方法实现的，是顺序的存储结构，在物理地址上是连续的，而且需要预先分配地址空间大小。所以

静态链表的初始长度一般是==固定==的，在做插入和删除操作时==不需要==移动元素
^1664546885458
静态链表的初始长度一般是固定的，在做插入和删除操作时==需要==修改指针
^1664546885468

2、动态链表是用内存申请函数（malloc/new）动态申请内存的，所以在链表的长度上没有限制。动态链表因为是动态申请内存的，所以每个节点的物理地址不连续，要通过指针来顺序访问。  

**一、静态链表**

结构体中的成员可以是各种类型的指针变量，当一个结构体中有一个或多个成员的基类型是本结构体类型时，则称这种结构体为“引用自身的结构体”。如：  

```
struct node{char ch;int num;struct node *p;};struct node a;	
```

p是一个可以指向struct node类型变量的指针成员。因此，a.p = &a 是合法的表达式，由此构成的存储结构如下图所示：

![](http://files.jb51.net/file_images/article/201605/2016050811184210.jpg)

参考程序如下所示：  

```
#include <stdio.h>struct node{int num;struct node *next;};int main(){struct node stu[3];struct node *head, *p;    stu[0].num = 10;		    stu[1].num = 20;    stu[2].num = 30;    head = &stu[0];		    stu[0].next = &stu[1];	    stu[1].next = &stu[2];	    stu[2].next = NULL;		    p = head;			do{printf("%d\n", p->num);	        p = p->next;		    } while (p != NULL);	return 0;}
```

输出结果为：

```
root@ubuntu:~/2017/1010$ ./static_link 102030
```

**二、动态链表**

到目前为止，凡是遇到处理“批量”数据时，我们都是利用数组来存储。定义数组必须（显式的或隐含的）指明元素的个数，从而也就限定了一个数组中存放的数据量。在实际应用中，一个程序在每次运行时要处理的数据的数目通常并不确定。如果数组定义的小了，就没有足够的空间存放数据，定义大了又浪费存储空间。  
对于这种情况，如果能在程序执行过程中，根据需要随时开辟存储空间，不需要时再随时释放，就能比较合理的使用存储空间。C 语言的动态存储分配提供了这种可能性。每次动态分配的存储单元，其地址不一定是连续的，而所需处理的批量数据往往是一个整体，各数据之间存在着接序关系。链表的每个节点中，除了要有存放数据本身的数据域外，至少还需要有一个指针域，用它来存放下一个节点元素的地址，以便通过这些指针把各节点连接起来。由于链表每个存储单元都由动态存储分配获得，故称这样的链表为“动态链表”。

参考程序如下所示：

```
#include <stdio.h>#include <stdlib.h>struct Student{int No;		struct Student *next;};int main(){struct Student *p1, *p2;struct Student *head, *p;int n = 0;     head = NULL;    p1 = (struct Student *)malloc(sizeof(struct Student));printf("请输入第1个学号\n");scanf("%d", &p1->No);    p2 = p1; while (p1->No != 0)    {        n++;if (n == 1)        {            head = p1;        }else        {            p2->next = p1;        }        p2 = p1;printf("请输入学号，输入0终止：\n");        p1 = (struct Student *)malloc(sizeof(struct Student));scanf("%d", &p1->No);    };    p2->next = NULL;	p = head;printf("\n学号为：\n");while (p != NULL)    {printf("%d\n", p->No);        p = p->next;    }return 0;}
```

输出结果为：

```

```
