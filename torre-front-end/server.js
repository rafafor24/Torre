const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(__dirname + '/dist'));
app.use(history({
    rewrites: [
        { from: /\/compare/, to: '/index.html' },
        { from: /\/opportunity/, to: '/index.html' }
    ]
}));
app.get(/.*/, function (req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});
app.listen(process.env.PORT || 5000);