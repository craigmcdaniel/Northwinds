var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ambivfgd_northwind',
  password : 'northwinds..',
  database : 'ambivfgd_northwinds'
});


connection.connect()

connection.query('SELECT * from Employees', function (err, rows, fields) {
  if (err) throw err
  var i = 0;


      console.log(rows[3]);
})

connection.end()