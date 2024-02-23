[Database Structure · ankidroid/Anki-Android Wiki · GitHub](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure#anki-database-structure)
[Anki2 database documentation · bibstha/Anki-Android Wiki · GitHub](https://github.com/bibstha/Anki-Android/wiki/Anki2-database-documentation#revlog)
## Graves
- 包含需要同步的被删除的卡片、笔记和牌组。 
- usn应该设置为-1
- oid是原始id。 
- type类型。0代表卡片，1代表笔记，2代表牌组

```sql
-- 包含需要同步的被删除的卡片、笔记和牌组。
-- usn应该设置为-1， 
-- oid是原始id。
-- 类型。0代表卡片，1代表笔记，2代表牌组 CREATE TABLE graves ( usn整数不为零，oid整数不为零，type整数不为零)。
CREATE TABLE graves (
    usn             integer not null,
    oid             integer not null,
    type            integer not null
);
```

## Notes
- 笔记包含的原始信息被格式化为一些卡片
- 根据模型
```sql
-- Notes contain the raw information that is formatted into a number of cards
-- according to the models
CREATE TABLE notes (
    id              integer primary key,
      -- 注释创建的时间的毫秒数
    guid            text not null,
      --全局唯一的ID，几乎可以肯定是用于同步的。
    mid             integer not null,
      -- 模板id  对应col下的models[mid}
    mod             integer not null,
      -- 修改的时间戳，历时秒数
    usn             integer not null,
      -- 更新序列号：用于同步时查找差异。
      -- 更多信息见卡片表中的描述
    tags            text not null,
      -- 以空格分隔的标签字符串。
      -- 包括开头和结尾的空格，用于LIKE"%标签%"的查询。
    flds            text not null,
      -- 用0x1f(31)字符分隔的本说明中的字段值。
    sfld            integer not null,
      -- sort字段：用于快速排序和重复检查。
      -- 排序字段是一个整数，这样当用户在一个只包含数字的字段上进行排序时，就会按数字而不是词法顺序进行排序。
      -- 文本被存储在这个整数字段中。
    csum            integer not null,
      -- 用于重复检查的字段校验和。
      -- 第一个字段的sha1哈希值的前8位的整数表示。
    flags           integer not null,
      -- 未使用
    data            text not null
      -- 未使用
);
```


## Cards
```sql
-- 卡片是你要复习的内容。
-- 每个笔记可以有多张卡片，由模板决定。
CREATE TABLE cards (
    id              integer primary key,
      -- 卡片创建的时间，以毫秒为单位。
    nid             integer not null,--    
      -- notes.id
    did             integer not null,
      -- deck id (available in col table) 集合（牌组）ID（可在col表中找到） col.decks[did]
    ord             integer not null,
      -- 序号：确定它对应于哪一个卡片模板或cloze deletions。
      --  对于卡片模板，有效值为0至模板数-1
      --   对于cloze删除，有效值从0到最大cloze索引-1（尽管第一个被称为`c1'，但它们的索引为0）。
    mod             integer not null,
      -- 修改时间为历时秒
    usn             integer not null,
      -- 更新序列号：用来计算同步时的差异。
      -- 值为-1表示需要推送到服务器的变化。
      -- usn < server usn 表示需要从服务器上提取的变化。
    type            integer not null,
      -- 0=new, 1=learning, 2=review, 3=relearning
    queue           integer not null,
      -- -3=user buried(In scheduler 2),
      -- -2=sched buried (In scheduler 2), 
      -- -2=buried(In scheduler 1),
      -- -1=suspended, 暂停
      -- 0=new, 1=learning, 2=review (as for type)
      -- 3=in learning, next rev in at least a day after the previous review 
	     -- 在学习中，下一次修改至少在前一次复习后一天。
      -- 4=preview 重新复习
    due             integer not null,
     -- 对于不同的卡片类型，Due的使用方式不同：
     --   [new: note id or random int](<new: 笔记ID或随机int>)
     --   [due: integer day, relative to the collection's creation time](<due: 整数日，相对于集合的创建时间>)
     --   [学习：以秒为单位的整数时间戳](<learning: integer timestamp in second>)
    ivl             integer not null,
      --间隔（用于SRS算法）。负的=秒，正的=天
    factor          integer not null,
      -- [The ease factor of the card in permille (parts per thousand). If the ease factor is 2500, the card’s interval will be multiplied by 2.5 the next time you press Good.](<卡片的缓和系数，单位是permille（千分之几）。如果轻松系数是2500，那么下次按 "好 "时，卡片的间隔将被乘以2.5。>)
    reps            integer not null,
      -- 复习次数
    lapses          integer not null,
      -- 卡片从 "被正确回答 "到 "正确回答 "的次数
      --  到 "被错误地回答 "的状态
      -- 遗忘次数
    left            integer not null,
      -- 形式为a*1000+b，其中。 -- a是今天剩下的次数 -- b是毕业前剩下的次数
      -- 例如：'2004'意味着今天还有2个代表，到毕业还有4个代表。
    odue            integer not null,
      -- 原始到期日：在过滤的牌组中，它是该牌在转为过滤前的原始到期日。
                    -- 如果该卡在调度器1中失效，那么就是失效前的值。(这是在切换到调度器2时使用的。在这个时候，学习中的卡片又变成了以前的到期日）
                    -- 在任何其他情况下，它都是0。
    odid            integer not null,
      -- 原先的做法：只在该卡目前在过滤的卡组中时使用。
    flags           integer not null,
      -- 一个整数。这个整数乘以8表示一个 "标志"，可以在浏览器中看到，也可以在审查笔记时看到。红色1，橙色2，绿色3，蓝色4，没有标志：0。这个整数除以8代表目前没有任何东西
    data            text not null
      -- v3 调度
);
```

## Collection

```sql
-- col包含一个单行，持有关于集合的各种信息
CREATE TABLE col (
    id              integer primary key,
      -- 由于只有一行，所以是任意的数字
    crt             integer not null,
      -- 创建日期的时间戳，单位是秒。它是正确的，直到一天。
      -- 对于V1调度器，小时对应于开始一个新的一天。默认情况下，新的一天是4。
    mod             integer not null,
      -- 最后修改时间：毫秒
    scm             integer not null,
      -- schema mod time: "schema "被修改的时间。
      -- 如果服务器的scm与客户的scm不同，则需要进行完全同步。
    ver             integer not null,
      -- 版本号
    dty             integer not null,
      -- [dirty: unused, set to 0](<dirty: 未使用，设置为0>)
    usn             integer not null,
      -- 更新序列号：用于同步时查找差异。
      --  更多细节见卡片表中的usn。
    ls              integer not null,
      --"最后一次同步时间"
    conf            text not null,
      -- 包含同步的配置选项的json对象。在下面的 "配置JSONObjects "中进行了描述
    models          text not null,
      -- 代表模型的json对象（又称注解类型）的json对象。
      -- 这个对象的键是包含整数的字符串。模型的 "创建时间（以毫秒计）"。
      -- 这个对象的值是下面 "模型JSONObjects "中描述的其他形式的JSON对象。
    decks           text not null,
      -- 代表牌组的json对象的json对象。
      -- 这个对象的键是包含整数的字符串。对于大多数牌组来说，"牌组创建时间（以纪元毫秒为单位）"，"1 "表示默认牌组。
      -- 这个对象的值是其他json对象，其形式在 "甲板JSONObjects "中描述。
    dconf           text not null,
      -- 代表牌组的选项组的json对象。
      -- 这个对象的键是包含整数的字符串。大多数组的 "选项组创建时间（以毫秒为单位）"，默认选项组为 "1"。
      -- 这个对象的值是下面 "DConf JSONObjects "中描述的其他json对象的形式。
    tags            text not null
      -- 在收集中使用的标签的缓存（这个列表显示在浏览器中。 可能在其他地方）。
);
```

## Review Log
```SQL
-- revlog是一个评论历史；它有一排你所做过的每一个评论!
CREATE TABLE revlog (
    id              integer primary key,
       -- epoch-milliseconds timestamp 是复习时的时间戳
    cid             integer not null,
       -- cards.id
    usn             integer not null,
        -- 更新序列号：用于同步时查找差异。
        --   See the description in the cards table for more info
    ease            integer not null,
       -- 你按下哪个按钮来为你的回忆评分。
       -- review:  1(wrong), 2(hard), 3(ok), 4(easy)
       -- learn/relearn:   1(wrong), 2(ok), 3(easy)
    ivl             integer not null,
       -- 区间 (i.e. as in the card table)
       -- 间隔时间： 负数表示秒，正数表示天
    lastIvl         integer not null,
       -- last interval (i.e. the last value of ivl. Note that this value is not necessarily equal to the actual interval between this review and the preceding review)
       -- 最后间隔（即ivl的最后值。注意，这个值不一定等于这次审查和前次审查之间的实际间隔)
       -- 上次间隔时间： 负数表示秒，正数表示天
    factor          integer not null,
      -- factor 简易度
    time            integer not null,
       -- 你的复习花了多少毫秒，最多60000（60s）。
    type            integer not null
       --  0=learn 学习, 1=review 复习, 2=relearn 重新学习, 3=cram 突进
);
```

![[57718092642fa0e079c0f6e6702e075.png]]

---
创建索引index
```SQL
CREATE INDEX ix_cards_nid on cards (nid);
CREATE INDEX ix_cards_sched on cards (did, queue, due);
CREATE INDEX ix_cards_usn on cards (usn);
CREATE INDEX ix_notes_csum on notes (csum);
CREATE INDEX ix_notes_usn on notes (usn);
CREATE INDEX ix_revlog_cid on revlog (cid);
CREATE INDEX ix_revlog_usn on revlog (usn);
```

---
![[Pasted image 20230109160406.png]]