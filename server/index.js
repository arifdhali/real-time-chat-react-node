const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });

});
app.post("/sign-in", (req, res) => {
    console.log(req.body);

});


app.listen(PORT, (err) => {
    console.log(`Server listening on http://localhost:${PORT}`);
})