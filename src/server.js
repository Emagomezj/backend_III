import express from "express";
import cookieParser from "cookie-parser";
import { paths } from "./utils/index.js";
import { dotenvConfig, connectDB } from "./config/index.js";
import { passportConfig } from "./config/index.js";
import swaggerUiExpress from "swagger-ui-express";
import { specs } from "./config/swagger.config.js";

import UserMockRouter from "./routers/api/userMock.router.js";
import PetMockRouter from "./routers/api/petMock.router.js";
import PetRouter from "./routers/api/pet.router.js";
import UserRouter from "./routers/api/user.router.js";



const server = express();
dotenvConfig();
connectDB()

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(cookieParser(process.env.KEY ?? "defaultKey"));

server.use("/public", express.static(paths.public));

passportConfig(server);

server.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
console.log(specs)
// Rutas
server.use("/mockingusers", new UserMockRouter().getRouter());
server.use("/mockingpets", new PetMockRouter().getRouter() );
server.use("/api/pets", new PetRouter().getRouter());
server.use("/api/users", new UserRouter().getRouter())


server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

server.use((error, req, res) => {
    console.log("Error:", error.message);
    res.status(500).send("<h1>Error 500</h1><h3>Se ha generado un error en el servidor</h3>");
});

server.listen(process.env.PORT ? process.env.PORT : 8080, () => {
    console.log(`Ejecutándose en http://localhost:${process.env.PORT}`);
});

