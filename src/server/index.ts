import Server from "./server";
import * as dotenv from "dotenv";

dotenv.config();
const { SERVER_PORT, NODE_ENV } = process.env;
const PORT = SERVER_PORT || 3000;
const ENV = NODE_ENV || 'production';

Server.app.listen(SERVER_PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} mode: ${ENV}`);
});