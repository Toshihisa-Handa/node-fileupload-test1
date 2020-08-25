#nodeプロジェクトの事前準備

##express.jsで使用するパッケージ管理を行うためnpm initコマンドでpackage.jsonファイルの作成を行います。-yオプションをついて対話モードをスキップします。
```npm init -y```

##次にexpress.jsのインストールを行います。
```npm install express```

基本のhello.worldのコード
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

##nodemonのインストール
```
npm install nodemon
```

##ejsのインストール
```npm install ejs```
