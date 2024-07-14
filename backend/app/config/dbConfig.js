import env from 'dotenv';

env.config();

export default {
    database: {
        host: process.env.host,
        defaultport: process.env.defaultport,
        database: process.env.database,
        dialect: process.env.dialect,
        port: process.env.port,
    },
};