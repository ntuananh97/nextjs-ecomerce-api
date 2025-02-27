const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDb = require("./configs/connectDb");
const routes = require("./routes");
const integrateSwagger = require("./configs/swaggerConfig");

const app = express();
const server = http.createServer(app); // thiết lập socket io cho sau này


dotenv.config();
app.use(cors());

// config data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());

routes(app);

integrateSwagger(app);

// start app
const port = process.env.PORT || 3001;

const startApp = () => {
    server.listen(port, () => {
        console.log("Server is running in port: ", + port);
    });
}


;(async () => {
    try {
        await connectDb();
        startApp()
    } catch (error) {
        console.log('Connection DB Error: ', error);
    }
})();
  