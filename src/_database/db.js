const sql = require('mssql/msnodesqlv8');

const server = 'EUDIN-F3-OFFSHO\\SQLEXPRESS'
const driver = 'ODBC Driver 17 for SQL Server'
const database = 'TodoDb'

const config = {
    connectionString: `
    Driver=${driver};
    Server=${server};
    Database=${database};
    Trusted_Connection=yes;`,
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
    },
}

const pool = new sql.ConnectionPool(config)

module.exports = pool;
