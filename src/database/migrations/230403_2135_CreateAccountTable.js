const getConnection = require("../sql");

(async () => {
	const pool = await getConnection();
	if (pool) {
		console.log("Connected to database");
		const result = await pool.query(`
			CREATE TABLE Account (
				id int identity(1,1) primary key,
				username varchar(50) not null unique,
				pass varchar(30) not null
			);
		`);
		console.log(result);
		pool.close();
	} else {
		console.log("Failed to connect to database");
	}
})()