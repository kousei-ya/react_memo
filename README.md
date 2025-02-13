# react_memo

## 概要

以下の機能を備えたSPAメモアプリです。

- 一覧
- 詳細
- 追加
- 編集
- 削除

## 使い方

1. 以下のコマンドを実行し、このリポジトリをクローンしてください。

```
git clone https://github.com/kousei-ya/react_memo.git
```

2. 以下のコマンドを実行し、クローンしてきたリポジトリに移動します。

```
cd react_memo
```

3. 以下のコマンドを実行し、必要なnpmパッケージをインストールしてください。

```
npm install
```

4. 以下のコマンドを実行すると、メモアプリが起動します。

```
npm start
```

「ログイン」ボタンをクリックするとログイン、「ログアウト」ボタンをクリックするとログアウトされます。

## 機能説明

### 一覧

メモの１行目をタイトルとして一覧表示します。

### 詳細

一覧画面からタイトルをクリックすると、そのメモの詳細画面に移行します。

### 追加

＋ボタンをクリックすると、「新規メモ」というメモが作成され、そのメモを編集できます。(ログイン時)

### 編集

テキストエリアの内容を編集し、保存ボタンをクリックすると保存されます。（ログイン時）

### 削除

編集状態から削除ボタンをクリックすると、そのメモが削除されます。（ログイン時）
