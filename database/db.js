const mysql = require('mysql');

// Create a database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sukamal',
  database: 'expenseapp',
  connectionLimit: 10, // Adjust as needed
});

// Function to execute a SQL query
function query(sql, args) {
  return new Promise((resolve, reject) => {
    pool.query(sql, args, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

module.exports = {
  query,
};
