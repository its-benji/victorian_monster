const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// gets the files we're going to serve
app.use('/', express.static(path.join(__dirname, '')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})