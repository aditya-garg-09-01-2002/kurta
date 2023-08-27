const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(cors());

const d1_secret=process.env.DB1_PASS;
const d1_secret_obj=JSON.parse(d1_secret);

const connection = mysql.createConnection({
    host: d1_secret_obj.host,
    user: d1_secret_obj.user,
    password: d1_secret_obj.password,
    database: d1_secret_obj.database
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/items', (req, res) => {
    const query = 'desc user';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data');
            return;
        }

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

var x=10;
console.log(x++);

// let a=()=>{
//     return 10;
// }
// {
//     let a=11;
//     console.log(a);
// }
// console.log(a());
// a();