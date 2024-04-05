import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';
import connection from './DB/config.js';
dotenvConfig();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Login or Sign in
app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    let checkSql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(checkSql, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json(
                {
                    error: true,
                    message: "An error occurred while processing your request"
                });
        } else {
            console.log(result.length);
            if (result.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "Login successful"
                });
            } else {
                return res.status(401).json({
                    error: true,
                    message: "Username or password is incorrect"
                });
            }
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
