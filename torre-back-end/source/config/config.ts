import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const port = process.env.PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: port
};

const config = {
    server: SERVER
};

export default config;
