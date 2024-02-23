
`enumerate()` 是 Python 内置函数之一，用于将一个可迭代对象（例如列表、元组或字符串）组合成一个索引序列，同时列出数据和数据下标，常用于 for 循环中。

以下是 `enumerate()` 函数的使用方法：

```python
for index, item in enumerate(iterable):
    # 在这里进行操作，例如打印数据和数据下标
    print(index, item)
```

其中，`iterable` 是要迭代的对象，`index` 是数据的下标，`item` 是数据本身。在循环中，每次迭代时，`enumerate()` 函数会返回一个包含当前下标和对应数据的元组，我们可以通过解包操作将它们分别赋值给 `index` 和 `item` 变量。