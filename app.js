//expressの準備
const express = require('express');
const app = express();


//publicフォルダ内のcssや画像フォルダの読み取りを可能にする
app.use(express.static('public'));


//ルーティングを定義
app.get('/',(req, res)=>{
    res.render('top.ejs')
});


//ポートの読み込み
app.listen(3003);