PSscript
===
Photoshopを少し便利にできるScriptです。

これは何？
---

Photoshopで使えるスクリプトです。  
ぶっちゃけアクションをコード書き出ししたものくらいに思ってもらって問題ないです。
知識をアイデアがあればかなり自由度が高く、色々なものが作れます。  
私は知識がないので、他人のコードをお借りします。（ググればいっぱいでてきます）

好きなショートカットを振って使うことができるため利便性が高いです。
頑張ればウインドウなんかも自作できるみたいです。
 

使い方
---
1. 使いたいスクリプトを下記ファイルに入れます。
``/Applications/Adobe Photoshop CC 2019/Presets/Scripts``
よくわからなければ

1. Photoshopのメニューの
``ファイル>>スクリプト>>(各スクリプト)``を選択します。

1. ショートカットが触れるので使いやすいショートカットを振ります。ファンクションキーを使うことを強いられるアクションとは違いショートカットキーの制限もありません。
 
各スクリプトの解説
---　
### まとめてリネーム.jsx
選択レイヤー名をまとめてリネームできます。  
文字置換、連番をつけるなどもできます。（連番はレイヤーパネル下から上へつけるようになっているため修正予定）  
ややアセット書き出し向け。

### アセット書き出し用命名いろいろ.jsx

選択レイヤーの末尾に拡張子（.jpg、.png）をまとめてつけることができます。@2xをレイヤー名に付けて2倍書き出しも可能です。    
アセット書き出し向け。

### カラーをまとめて変更.jsx
選択レイヤーのカラーを複数まとめて変更できます。  
また、パス、テキストも区別せずまとめて変更することができます。

### グループ化してグループ名を変更.jsx
選択レイヤーをグループ化します。  
グループ名は一番上のレイヤーと同じになります。
レイヤー整理用。

### テキストレイヤーをクリップボードにコピー.jsx
テキストレイヤーからテキストをクリップボードにコピーします。  
alt用のテキストを抜いたり、ショートカットを振れば1ボタンでできます。

### レイヤーをグループ化_通常.jsx
選択レイヤーをグループ化します。
その際にデフォルトでは通過になる描画モードを通常にします。
webデザインにおいてはデフォルトが通過なのはマイナスになることが多いため便利です。

### 指定marginで等間隔配置.jsx
選択しているレイヤーに対して、指定の間隔を与え順番に並べます。
縦、横あります。
（並べる順番がレイヤーパネル下から上へ並べるため修正予定）

### 選択レイヤーのみ別psbに抜き出す.jsx
選択レイヤー群のみを瞬時に別タブのpsbにコピーします。
周りのレイヤーが作業の邪魔な際や、書き出しの時など便利でしょう。
 

もっと詳しく知りたい人は
---
1.  [オリジナルのスクリプトの作り方 | Dearps](http://dearps.lovwar.com/2016/01/19/script-2/)
1.  [Adobe Photoshop CS6自動化作戦]( http://www.openspc2.org/book/PhotoshopCS6/)

![](https://img.yakkun.com/poke/icon960/n200.png)
