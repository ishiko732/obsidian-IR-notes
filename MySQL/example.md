---
cards-deck: Obsidian::Mysql::example
---


# 如何找第n大数？（Leetcode 176）

如何在MySQL中查找第n大数？::使用LIMIT和OFFSET结合ORDER BY。 ^1678955395747
如果要查找第3大的数，在SELECT语句中应该如何设置LIMIT和OFFSET的值？::LIMIT 1 OFFSET 2。 ^1678955395758
OFFSET的偏移量是从哪里开始计数的？::从0开始。 ^1678955395762
如果表中存在重复的值，使用OFFSET方法是否会得到准确的结果？::不一定，可能需要使用其他方法。 ^1678955395766
在查找第n大的数时，OFFSET的值应该设置为多少？::n-1。 ^1678955395771
当表中没有足够的行时，使用OFFSET方法会返回什么结果？::空结果集。 ^1678955395775
如何避免使用OFFSET方法时出现报错的情况？::使用ifnull。 ^1678955395779

```MYSQL
select 
	ifnull(
		(select distinct salary 
		from employee 
		order by salary desc 
		limit 1 offset 1)
		,null)
	as SecondHighestSalary
```


# 窗口函数rank问题
rank函数的作用是什么？::计算排名，如果有并列的行，会占用下一名次的位置。 ^1678955395784
dense_rank函数的作用是什么？::计算排名，如果有并列的行，不会占用下一名次的位置。 ^1678955395789
row_number函数的作用是什么？::计算排名，不考虑并列的情况。 ^1678955395793
rank函数、dense_rank函数和row_number函数之间有什么区别？::主要区别是在对并列行的排名处理上。 ^1678955395797
在一个select语句中，如何使用rank函数？::在select语句中使用“rank() over (order by XXX)”添加rank列，其中XXX为排序依据。 ^1678955395803
在一个select语句中，如何使用dense_rank函数？::在select语句中使用“dense_rank() over (order by XXX)”添加dense_rank列，其中XXX为排序依据。 ^1678955395807
在一个select语句中，如何使用row_number函数？::在select语句中使用“row_number() over (order by XXX)”添加row_number列，其中XXX为排序依据。 ^1678955395813
如果有多行具有相同的排序条件，rank函数和dense_rank函数的区别是什么？::rank函数会将并列行占用下一名次的位置，而dense_rank函数不会。 ^1678955395818
如果有多行具有相同的排序条件，row_number函数和其他两个函数的区别是什么？::row_number函数不会考虑并列的情况。 ^1678955395823
```mysql
select score,dense_rank() over (order by score desc) as 'rank'

from Scores
```
