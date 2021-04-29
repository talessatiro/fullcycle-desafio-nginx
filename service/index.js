const express = require('express');
const mysql = require('mysql');
const random_name = require('node-random-name');
const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

app.get('/', (req, res) => {
    connection.query(`INSERT INTO people(name) VALUES ('${random_name()}')`, (err) => {
        if(err) throw err;
        connection.query(`SELECT name FROM people`, (err, rows) => {
            if(err) throw err;
            let namesHtml = '';
            if(rows) {
                rows.forEach(row => {
                    namesHtml += `<li>${row.name}</li>`;
                });
            }

            res.send(`<h1>Full Cycle Rocks!</h1>
                <ul>
                    ${namesHtml}
                </ul>
            `);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Up and running Port ${PORT}`);
})