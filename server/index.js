const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('Welcome');
});


app.listen(PORT, (err) => {
    console.log(`Server listening on http://localhost:${PORT}`);
})