// require('dotenv').config();
// const mysql = require('mysql2');
// const config = require('../config');
// const dbconf = {
//   host: config.mysql.host,
//   user: config.mysql.user,
//   password: config.mysql.password,
//   database: config.mysql.database,
//   port: config.mysql.port,
// };

// let connection;

// function handleCon() {
//   connection = mysql.createConnection(dbconf);
//   connection.connect((err) => {
//     console.log('[db err]', err);
//   });

//   connection.on('error', (err) => {
//     console.log('[db err]', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       handleCon();
//     } else {
//       throw err;
//     }
//   });
// }

require('dotenv').config();
const mysql = require('mysql2');
let connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
//connection.end();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id='${id}'`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
}

async function upsert(table, data) {
  let row = [];
  if (data.id) {
    row = await query(table, { id: data.id });
  }

  if (row.length === 0) {
    return insert(table, data);
  }
  return update(table, data);
}

function query(table, query, join) {
  let joinQuery = '';

  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
  }

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} ${joinQuery} WHERE ?`,
      query,
      (err, result) => {
        if (err) return reject(err);
        resolve(result[0] || null);
      }
    );
  });
}

module.exports = { list, get, upsert, query };
