const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'Admin1234*',
    database: 'Prueba'
};

const pool = new Pool (config);


const getBooks = async () => {
    try {
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();
    }catch(e){
        console.log(e);
    }
}

const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(username, password) VALUES ($1, $2)'
        const values = ['john', 'john1234']
        const res = await pool.query(text, values);
        pool.end();
        console.log(res);
    }catch(e){
        console.log(e);
    }
}

const deleteUser = async () => {
    try {
        const text = 'DELETE FROM users WHERE username = $1'
        const values = ['john']
        const res = await pool.query(text, values);
        pool.end();
        console.log(res);
    }catch(e){
        console.log(e);
    }
}


const editUser = async () => {
    try {
        const text = 'UPDATE users SET username = $1 WHERE username = $2'
        const values = ['jhon', 'joe']
        const res = await pool.query(text, values);
        pool.end();
        console.log(res);
    }catch(e){
        console.log(e);
    }
}

editUser();