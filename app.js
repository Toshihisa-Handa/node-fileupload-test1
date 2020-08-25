//expressの準備
const express = require('express');
const app = express();

//fileuploadの準備
const upload = require('express-fileupload')


//publicフォルダ内のcssや画像フォルダの読み取りを可能にする
app.use(express.static('public'));


app.use(upload());


//ルーティングを定義

//getのルーティング
app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/index.html')
});


//postのルーティング
app.post('/',(req,res)=>{
    if(req.files){
        console.log(req.files)
    }
})


//ポートの読み込み
app.listen(3003);