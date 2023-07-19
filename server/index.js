import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import keysRoutes from "./routes/keys.routes.js";


const app = express();

app.use(indexRoutes)
app.use(keysRoutes)
app.listen(PORT)
console.log(`Server on port ${PORT}`);