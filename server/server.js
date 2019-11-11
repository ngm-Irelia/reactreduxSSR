const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

// 常规路由页面

// 用于SSR服务端渲染的页面
let homeSSR = require('./routes/homeSSR');

app.use(express.static(path.join(__dirname, '../')));

// 自定义ejs模板
app.engine('html', ejs.__express);
app.set('view engine', 'html');
ejs.delimiter = '|';

app.set('frame', path.join(__dirname, '../frame/'));

app.get('/ssr/home', homeSSR);

let port = 12345;

app.listen(port, function() {
    console.log(`Server listening on ${port}`);
});
