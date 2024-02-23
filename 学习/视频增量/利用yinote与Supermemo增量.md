

#  chrome安装yinote


~~导出文章为json,替换url “/” -> ?p= number~~ （废弃-启用python处理）
# 利用jq切割json为html (方法1)
```shell
cat yi-note_3.json | jq '.data[]|{title: .meta.title, subject: [{url: .meta.url} + (.notes[] | {content: .content, times: .timestamp, image:.image})]}' | jq '.|"<hr>"+.title, (.subject[] |["<p>"+.content+"<br><img style=\"background-image:url('\"+.image+\"'); background-repeat: no-repeat\" width=\"640px\" height=\"360px\"><br>"+"  ",.url+"?yinotetimestamp=",.times]|join(""))|tostring' -r > ./yi-note-html_3.html

```
```shell
cat yi-note_4.json | jq '.data[]|{title: .meta.title, subject: [{url: .meta.url} + (.notes[] | {content: .content, times: .timestamp, image:.image})]}' | jq '.|"<hr>"+.title, (.subject[] |["<p>"+.content+"<br><img style=\"background-image:url('\"+.image+\"'); background-repeat: no-repeat\" width=\"640px\" height=\"360px\"><br>"+"  ",.url+"&yinotetimestamp=",.times]|join(""))|tostring' -r > ./yi-note-html_4.html
```
```shell
cat yi-note_6.json | jq '.data[]|{tags:.tags, title: .meta.title, subject: [{url: .meta.url} + (.notes[] | {content: .content, times: .timestamp, image:.image})]}' | jq '.|"<hr>"+.title+"--"+.tags[0], (.subject[] |["<p>"+.content+"<br><img style=\"background-image:url('\"+.image+\"'); background-repeat: no-repeat\" width=\"640px\" height=\"360px\"><br>"+"  ",.url+"&yinotetimestamp=",.times]|join(""))|tostring' -r > ./yi-note-html_6.html
```

# 利用python处理（方法2）
```shell
python3 action.py
python3 main.py yi-note_8.json 8
```

# 通过Supermemo切割文章
使用`<P` 切割单个文章的内容


安装通用媒体服务器
[Universal Media Server](https://www.universalmediaserver.com/)
实现本地化视频
