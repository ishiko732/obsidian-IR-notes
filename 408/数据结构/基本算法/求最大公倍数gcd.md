---
tags: 数据结构 [obsidian]
cards-deck: 考研::数据结构::基础算法
---

辗转相除法求公倍数的公式gcd(a,b)=? :: gcd(a, b) = gcd(b, a mod b) ^1659539364263

辗转相除法
```c
//gcd(a, b) = gcd(b, a mod b)
int gcd(int a,int b){
    while(b){
        int t=b;
        a=t;
        b=a%b;
    }
    return a;
}
```
#card-spaced 
^1659539364278

最小公倍数 =a * b / gcd(a, b)