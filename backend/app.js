const express = require('express');
const fetch = require('node-fetch');
///////////////////////////////////////////////////////////////////////////////


const app = express();
const port = 3000;

const router = express.Router();
///////////////////////////////////////////////////////////////////////////////


router.get('/', (req, res) => {
    res.send('Hello World!');
});


router.get('/startgame', async (req, res) => {
    const result = await fetch('https://opentdb.com/api.php?amount=50&type=boolean');
    const x = await result.json();
    res.send(x);
});


router.get('/gameover', (req, res) => {
    res.send('Hello World!');
});


///////////////////////////////////////////////////////////////////////////////

app.use(router);

///////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
});

