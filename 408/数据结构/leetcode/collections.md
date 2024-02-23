`collections` 是 Python 标准库中的一个模块，提供了一些有用的集合类，这些类可以帮助我们更方便地处理一些常见的数据结构。下面是 `collections` 中一些常用的类及其用法：

1. `Counter`：用于统计可哈希对象中每个元素出现的次数。

   ```python
   from collections import Counter
   
   c = Counter('hello world')
   print(c)
   # 输出: Counter({'l': 3, 'o': 2, 'e': 1, 'h': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})
   
   c = Counter([1, 2, 3, 2, 1, 3, 4, 5, 1])
   print(c)
   # 输出: Counter({1: 3, 2: 2, 3: 2, 4: 1, 5: 1})
   
   c = Counter({'a': 3, 'b': 2, 'c': 1})
   print(c)
   # 输出: Counter({'a': 3, 'b': 2, 'c': 1})
   ```

2. `defaultdict`：与普通字典类似，但当访问不存在的键时会返回一个默认值。

   ```python
   from collections import defaultdict
   
   d = defaultdict(int)
   d['a'] += 1
   d['b'] += 2
   print(d)
   # 输出: defaultdict(<class 'int'>, {'a': 1, 'b': 2})
   
   d = defaultdict(list)
   d['a'].append(1)
   d['a'].append(2)
   d['b'].append(3)
   print(d)
   # 输出: defaultdict(<class 'list'>, {'a': [1, 2], 'b': [3]})
   ```

3. `deque`：双向队列，支持在两端进行快速的插入和删除操作。

   ```python
   from collections import deque
   
   d = deque()
   d.append(1)
   d.append(2)
   d.appendleft(3)
   print(d)
   # 输出: deque([3, 1, 2])
   
   d.pop()
   print(d)
   # 输出: deque([3, 1])
   
   d.popleft()
   print(d)
   # 输出: deque([1])
   ```

4. `OrderedDict`：有序字典，可以记住键值对的添加顺序。

   ```python
   from collections import OrderedDict
   
   d = OrderedDict()
   d['a'] = 1
   d['b'] = 2
   d['c'] = 3
   print(d)
   # 输出: OrderedDict([('a', 1), ('b', 2), ('c', 3)])
   
   d.popitem(last=False)
   print(d)
   # 输出: OrderedDict([('b', 2), ('c', 3)])
   ```

5. `namedtuple`：命名元组，可以为元组中的每个字段指定名称。

   ```python
   from collections import namedtuple
   
   Point = namedtuple('Point', ['x', 'y'])
   p = Point(1, 2)
   print(p.x, p.y)
   # 输出: 1 2
   
   Circle = namedtuple('Circle', ['x', 'y', 'r'])
   c = Circle
```


collections 是 Python 标准库中的哪一个模块？::集合类模块。
collections 中的 Counter 类能用于统计什么？::可哈希对象中每个元素出现的次数。
Counter 类的用法示例是什么？::统计字符串、列表和字典中各个元素的出现次数。
collections 中的 defaultdict 类有什么特点？::在访问不存在的键时返回一个默认值。
defaultdict 类的用法示例是什么？::创建一个默认为整数类型或列表类型的字典对象。
collections 中的 deque 类支持哪些操作？::在两端进行快速的插入和删除操作。
deque 类的用法示例是什么？::从队列左右两端插入和删除元素。
collections 中的 OrderedDict 类有什么特点？::可以记住键值对的添加顺序。
OrderedDict 类的用法示例是什么？::向字典中添加键值对，并对其进行插入和删除操作。
collections 中的 namedtuple 类的作用是什么？::为元组中的每个字段指定名称。
namedtuple 类的用法示例是什么？::为不同的命名元组指定分别不同的名称。
