const app = require('./app/app.js')
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000, function onListen(err) {
    if (err) throw err;
    console.log('info', `Application listening on Port`);
});
