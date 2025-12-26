let totalTxt = 0;
const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 'secret',
  database: 'my_db',
});

connection.connect();
let validateSender = 'not allowed';

const rs = connection.query(
  `SELECT * FROM smscontacts WHERE msisdn = ${Number}`,
  function (error, results, fields) {
    if (error) throw error;
    return results;
  }
);

if (rs.length) {
  rs.forEach((row) => {
    if (row.group !== '') {
      if (row.grouping.trim() === row.group) {
        if (row.txtallowed !== 256) {
          totalTxt = row.txtused + 1;
          connection.query(
            `UPDATE smscontacts SET txtused = ${totalTxt} WHERE _msisdn = ${Number}`
          );
        }
        if (row.txtallowed <= row.txtused) {
          validateSender = '0';
        } else {
          validateSender = row.txtallowed - (row.txtused + 1);
        }
      } else {
        validateSender = 'unlimited';
      }
    } else if (row.grouping.trim().toUpperCase() === 'ADMIN') {
      validateSender = 'unlimited';
    } else if (row.group.trim().toUpperCase() === 'ADMIN') {
      validateSender = 'unlimited';
    }
    sender = row.contact.trim();
  });
}
connection.end();
