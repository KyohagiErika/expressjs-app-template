const getConnection = require("../database/sql");

/**
 * Create Account
 * @param {string} username 
 * @param {string} pass 
 */
async function create(username, pass) {
    const pool = await getConnection();
    if (pool) {
        try {
            const result = await pool.query(`
                INSERT INTO Account (username, pass) VALUES ('${username}', '${pass}');
            `);
            pool.close();
            return result;
        } catch (err) {
            console.log(err);
            pool.close();
            return null;
        }
        
    }
    return null;
}

/**
 * Get all Accounts
 */
async function getAll() {
    const pool = await getConnection();
    if (pool) {
        try {
            const result = await pool.query(`
                SELECT * FROM Account;
            `);
            pool.close();
            return result;
        } catch (err) {
            console.log(err);
            pool.close();
            return null;
        }
        
    }
    return null;
}

exports.create = create;
exports.getAll = getAll;