var mysql = require('mysql');
var connection = mysql.createConnection({
	host: process.env.RDS_HOSTNAME,
	user: process.env.RDS_USERNAME,
	password: process.env.RDS_PASSWORD,
	port: process.env.RDS_PORT,
	database: process.env.RDS_DB_NAME
});

function getAll() {
	connection.query(
		'SELECT * FROM test_table',
		function(err, rows, fields) {
			if (err) throw err;
			return rows;
		}
	);
}

module.exports = {
	getAll: getAll
};
