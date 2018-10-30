const path = require('path');
const express = require('express');
const app = express();

const routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/api/getArticle', (req, res, next) => {
  res.json({
      data: '后台返回结果 getArticle OP'
    })
})


routes(app);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');

module.exports = app;
