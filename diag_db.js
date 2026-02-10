import mysql from 'mysql2/promise';

const HOSTNAME = "mysql-2c1df8be-sanjeevpkadakol1-cbf1.d.aivencloud.com";
const IP = "165.22.220.2";
const PASS = "AVNS_kFrHYJLxbKap46X2_eI";

async function test(host) {
    console.log(`\nTesting connection to: ${host}...`);
    try {
        const conn = await mysql.createConnection({
            host: host,
            port: 22569,
            user: 'avnadmin',
            password: PASS,
            database: 'defaultdb',
            ssl: {
                rejectUnauthorized: false
            }
        });
        console.log(`✅ Success with ${host}!`);
        await conn.end();
    } catch (err) {
        console.log(`❌ Fail with ${host}: ${err.message}`);
    }
}

async function run() {
    await test(HOSTNAME);
    await test(IP);
}

run();
