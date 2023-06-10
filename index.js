const app = require('./app')
require('dotenv').config();

async function main() {
    await app.listen(process.env.PORT);
    console.log('server starting on port', process.env.PORT);
}

main();