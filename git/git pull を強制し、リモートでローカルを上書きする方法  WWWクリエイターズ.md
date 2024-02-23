---
page-title: "git pull を強制し、リモートでローカルを上書きする方法 | WWWクリエイターズ"
url: https://www-creators.com/archives/1097#git_pull
date: "2023-03-12 13:02:34"
tags: [obsidian] 
cards-deck: Obsidian::git
---
git pull して、リモートブランチの最新に合わせようとしたら・・、あれ？コンフリクト・・？なにこれ、うまくいかない！「git push -f origin masterして強制Pushはできたのに。git pull -f origin master的な強制コマンドはないの？！」

とにかくリモートに合わせたい。そんなあなたのための、解決方法と解説です。

目次

-   [1 「git pull --force」は存在しない・・。](https://www-creators.com/archives/1097#git_pull_w_hyphenforce)
-   [2 git pull で、ローカルを強制上書きする方法](https://www-creators.com/archives/1097#git_pull)
-   [3 git pull について、おさらい](https://www-creators.com/archives/1097#git_pull-2)
    -   [3.1 git fetch origin mater について](https://www-creators.com/archives/1097#git_fetch_origin_mater)
    -   [3.2 git merge origin/master について](https://www-creators.com/archives/1097#git_merge_originmaster)
-   [4 git pullの失敗理由と、その解決](https://www-creators.com/archives/1097#git_pull-3)
    -   [4.1 git mergeを強制する](https://www-creators.com/archives/1097#git_merge)
    -   [4.2 一撃必殺、git reset --hard](https://www-creators.com/archives/1097#git_reset_w_hyphenhard)
-   [5 ローカルの変更を保存しつつ、リモートの最新に強制的に合わせる](https://www-creators.com/archives/1097#i)
    -   [5.1 ローカルの変更を保持しつつ、リモートで強制上書き](https://www-creators.com/archives/1097#i-2)
-   [6 git pull の強制の関連情報](https://www-creators.com/archives/1097#git_pull-4)

## 「git pull --force」は存在しない・・。

「git push --force」というコマンドがあるので、そこから連想してしまいますが、**「git pull --force」というオプションは存在しません**。

git pull の強制的に実行するには、別のコマンドが必要になりますので、見ていきましょう。

## git pull で、ローカルを強制上書きする方法

### ローカルのmasterを、強制的にリモートのmasterに合わせる

```
// 1) リモートの最新を取ってきておいて・・
$ git fetch origin master

// 2) ローカルのmasterを、リモート追跡のmasterに強制的に合わせる！
$ git reset --hard origin/master
```

「git pull の強制」というよりは、要は「reset」という方が正しいですね。

もちろん、git reset --hardは、手元にある作業ツリーとインデックスの変更内容は、すべてふっとんで消えてなくなりますので、実行前は注意して慎重に行って下さい。

一般的にgitでは、「コミットされていない変更」は、一度失うともう帰ってこないですので、不安な人は必ず実行前に、git statusして、作業ツリーの状態を確認して下さい。もし、作業ツリーとインデックスを別の場所に退避しておきたかったら「git stash」などがあります。

-   [git stashで変更を一時的に退避する。git stash まとめ。](https://www-creators.com/archives/1583)


> card

如何强制将本地master分支与远程master分支合并？::使用git fetch origin master获取远程最新代码后，执行git reset --hard origin/master。 ^1678597996708
执行git reset --hard会发生什么？::手上的工作树和索引中的修改都会消失，并回到指定的commit。 ^1678597996719
在执行git reset --hard之前，有哪些需要注意的事项？::执行前应该注意做好备份，并用git status检查并确认当前工作树的状态。 ^1678597996724
如何确保不丢失尚未提交的更改？::使用git stash命令将更改保存到堆栈中。 ^1678597996729



## git pull について、おさらい

前提知識として、Git で「pull」というのは「fetch して、mergeする」を立て続けに行うためのコマンドでした。「push の反対だから pull 」って感じで名前が付けられたかと思うのですが、実際の動作が必ずしもきっちり対象に（反対に）なっていない点が、若干初学者の混乱のもとになっている気もします。

すなわち、いつものpullコマンド、

```
$ git pull origin master
```

上記コマンドは、この２つのコマンドのショートハンドのようなものです。

```
$ git fetch origin master 
$ git merge FETCH_HEAD
```

※「FETCH\_HEAD」は、要は「origin/master」がマージされると解釈すれば問題無いです。fetch実行時、その後のマージ実行のため、取得したリモート側のブランチ名（refs）とコミット名との対を、.git/FETCH\_HEADに記述します（これはgitユーザは意識する必要はありません）

![](https://www-creators.com/wp-content/uploads/2017/04/Screen-Shot-2017-05-25-at-17.06.56.png)

## git fetch origin mater について

「git fetch origin master」は、リモートレポジトリ「origin」にあるブランチ「master」を、ローカルのリモート追跡ブランチに反映させる。という意味のコマンドです。

#### リモート追跡ブランチ・・？

「リモート追跡ブランチ」と聞いて「えーと、なんだっけ・・・」の人は、Git のリモートの概念をへの理解が浅い可能性がありますので、こちらも補足しておきます。

下記のコマンドを打てば、すべてのローカルブランチが表示されますが・・

```
// すべてのローカルブランチを表示する
$ git branch -a
```

一度でも git fetch origin master, もしくは、git pull origin master したことのあるローカルレポジトリ環境では、おそらくアウトプットは、のように表示するはずです。

```
* master
  remotes/origin/master
```

この「remotes/xxxx/xxxx」となっているブランチ名が、すなわち「リモート追跡ブランチ」です。

これはローカルにあるブランチの一種ですが、通常あなたがコミットを行う類のブランチではなく、常に対応するリモートブランチからfetch して更新される対象とするためのブランチとして区別されています。

gitマニュアルでは「A remote tracking branch」とされていますので「リモートトラッキングブランチ」とそのまま呼んだりもします。リモート追跡ブランチは、通常のローカルブランチのようにチェックアウトして作業する事はできません。

ちなみに、git push 成功時には、（上流ブランチとして設定されていれば）自動的に対応する追跡ブランチの参照が更新されます。

![](https://www-creators.com/wp-content/uploads/2017/04/Screen-Shot-2017-05-25-at-17.06.17.png)

もし上流ブランチが設定されていない場合は「git push -u origin master」などのuオプションで設定できます。

## git merge origin/master について

fetchしたら、あとはmergeです。

mergeコマンドにおいて、リモート追跡ブランチを指定することができます。

「git merge origin/master」は『「origin」という名前のリモートレポジトリ上にあるブランチ「master」の追跡ブランチ、すなわち「origin/master」を現在のブランチにマージする』という意味です。

## git pullの失敗理由と、その解決

git pull origin materが失敗しているときは、おそらく origin/master　→ master のマージがコンフリクトしているときが多いはずです。

普通のチームの開発では、リモートのブランチを「正」とする事がほとんどだと思いますので、ローカルと噛み合わない場合「あ〜、めんどくさいから、ズバっと強制したい・・」となるわけです。

## git mergeを強制する

git mergeがコンフリクトする時は、コンフリクトを解決するのが教科書通りですが、もし完全に origin/master 側が「正」としているのであれば、「git merge --theirs」などというコマンドもありますが、そもそもマージによって、新しいコミットが作られてしまうので、これは選択肢ではありません。

ここでは、より強力な強制力を持つ「git reset 」を利用して、強制的に一致させます。

## 一撃必殺、git reset --hard

現在のブランチの状態を「強制的に」他のブランチの状態に合わせるときの方法として、「**git reset --hard** 」があります。reset --hard は、現在のブランチの状態を強制的に対象に合わせるコマンドでしたね。

```
git reset --hard <コミットへの参照>
```

resetコマンドは３種類が代表的です。

### git resetのモード

コマンドとオプション

動作

git reset --soft

現在のbranchの先頭 だけをリセット

git reset  
git reset --mixed

現在のbranchの先頭と、インデックスをリセット

git reset --hard

現在のbranchの先頭、インデックスと作業ツリーを全部リセット

いかがでしょうか？うまくgit pull を強制（？）できたでしょうか。

## ローカルの変更を保存しつつ、リモートの最新に強制的に合わせる

最後に、おまけです。

上記の方法では、git reset --hard により、ワーキングツリーの状態を完全に破棄してしまいます。もし、破棄しないでおいてあとで確かめたり、変更内容を利用したい時、別途、残しておくことができます。

## ローカルの変更を保持しつつ、リモートで強制上書き

```
// （１）ローカルの変更をコミットしておく。
$ git commit .

// （２）ローカルのmasterブランチの名前を変えておく
$ git branch -m prev-master

// （３）リモート追跡ブランチを最新にする。
$ git fetch origin

// （４）ローカルのmasterブランチを新規に作る
$ git checkout master

（４）の出力
Branch master set up to track remote branch master from origin.
Switched to a new branch 'master'
```

これまでのmasterブランチを名前を変え、新しくmasterブランチを作成します。（４）の時点で、自動的にリモート追跡ブランチ「origin/master」を起点にして新しいmasterブランチが生成されます。(指定されたブランチ名がリモートトラッキングブランチに見つかったときのgitによる補助的な振る舞いです)

さておき、たぶんこんなかんじになるはずです。

```
$ git log --all --decorate=full --graph --oneline

// 結果
*   HEAD -> refs/heads/master, refs/remote/origin/master
| * refs/heads/prev-master
|/
*
*
```

これで、自分のローカル変更を別の名前で保存できたことになります。

ともすれば、「自分の実の子であるmasterちゃんを戸籍変更して、別の女との間に新しくできた子に、前の子の名前をつけて、その子として育てる」という、なんだか推理サスペンス的な操作にも見えます。一抹の後ろめたさを感じてしまいます。

もちろん、コミットを作らなくても、git stashを使っても大丈夫です。でも、ブランチにしたほうが、なんだかクリーンで、管理しやすかったりもします。そのへんは好みや状況に応じてどうぞ。

以上です。

## git pull の強制の関連情報

リモートのブランチや、リモート追跡ブランチとローカルとの操作は、最初慣れるまで戸惑う事が多いです。こちらの記事も思い当たる方は是非どうぞ。

-   [gitでリモートブランチを削除するコマンド](https://www-creators.com/archives/1062)
-   [git commitしたコミットを取り消す、やり直す、修正する。](https://www-creators.com/archives/1116)
-   [git resetを取り消して、元に戻す方法。](https://www-creators.com/archives/2025)

こちらは、git pull について全般的にまとめた記事です。

-   [git pull コマンドの使い方と、主要オプションまとめ](https://www-creators.com/archives/2295)


----
# 压缩合并
利用`git merge <branch> --squash`进行压缩合并，当出现`fatal: refusing to merge unrelated histories`时应该使用`git merge  <branch>  --allow-unrelated-histories --squash


>card

如何使用 git merge 进行压缩合并？::使用` git merge <branch> --squash` 进行压缩合并。 ^1678597996734
当压缩合并出现 fatal: refusing to merge unrelated histories 时应该如何处理？::使用 `git merge <branch> --allow-unrelated-histories --squash` 命令处理。 ^1678597996739
--squash 参数的作用是什么？::	`--squash` 参数的作用是将多次提交压缩成一次提交。 ^1678597996743
--allow-unrelated-histories 参数的作用是什么？::	`--allow-unrelated-histories` 参数的作用是允许合并不同的历史。 ^1678597996748
在什么情况下需要使用 --allow-unrelated-histories 参数？:: 当要合并的两个分支没有共同的祖先时，需要使用` --allow-unrelated-histories` 参数。 ^1678597996752
