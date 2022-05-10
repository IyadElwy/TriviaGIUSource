const express = require('express');
const fetch = require('node-fetch');
const path = require("path");
///////////////////////////////////////////////////////////////////////////////


const app = express();
const port = 3000;

const router = express.Router();


///////////////////////////////////////////////////////////////////////////////

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

app.use(express.static(__dirname + '/../public'));

///////////////////////////////////////////////////////////////////////////////


router.get('/', (req, res) => {
    res.render('Home');
});


router.get('/startgame', async (req, res) => {
    const result = await fetch('https://opentdb.com/api.php?amount=50&type=boolean');
    const x = await result.json();
    res.render('Game',
        {
            questions: JSON.stringify(x)
        });
});


router.get('/gameover', (req, res) => {
    res.render('Score');
});


///////////////////////////////////////////////////////////////////////////////

app.use(router);

///////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
});

