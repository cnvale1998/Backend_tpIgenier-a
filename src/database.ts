import mysql from 'promise-mysql';
const pool=mysql.createPool(
                {host: 'localhost',
                user: 'root',
                password:'1234',
                database:'cinemacenter'});
pool.getConnection().then(connection => 
        {pool.releaseConnection(connection);
        console.log('Base de datos conectada');} );

export default pool;