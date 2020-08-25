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
        const file = req.files.file;//req.file.〇〇の部分はindex.htmlのinputタグのname属性と同じにする。
        console.log('hoge');
        const filename =file.name;
        console.log(filename);

        file.mv('./uploads/'+filename,(error)=>{
            if(error){
                res.send(error)
            }else{
                res.send("File Uploaded")
            }
        })
};
});


//ポートの読み込み
app.listen(3003);