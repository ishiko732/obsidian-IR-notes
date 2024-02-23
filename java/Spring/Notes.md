---
tags: [obsidian] 
cards-deck: Obsidian::java::spring
---

- Bean可以理解成一个个具体的类，在IOC中，Bean之间的依赖关系是由==Spring容器来管理的==，而不是==直接定义在类的内部==
^1664009360257
- 如果参数写在URL请求中,可以通过==@PathVariable==注解来读取参数
^1664009360269
- 如果参数是由@Params传入的,需要用@==RequestParam==来传递参数
^1664009360273
- 用==produces==参数可以返回json格式的结果
^1664009360276
- @Autowired注解的含义是根据==类型==到Spring容器中查找是否有该类型经过注册的类
^1664009360280
- 通过{2:Environment}对象的==getProperty==方法可以有效地读取配置文件中的参数,此外还可以用用@==Value==注解来读取
^1664009360283
- 