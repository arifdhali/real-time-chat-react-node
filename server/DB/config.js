import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "live_chat"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database successfully connected');
});

export default connection;
