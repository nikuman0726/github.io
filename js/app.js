const express = require('express');
const app = express();



 app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/link1', (req, res) => {
    res.render('link1.ejs');
});
app.get('/link2', (req, res) => {
    res.render('link2.ejs');
});
app.get('/mene',(req, res)=>{
    res.render('mene.ejs');
});


  app.listen(3000);