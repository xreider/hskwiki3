import { app } from "server/app";
import { getUserController } from "routes/controllers/user.controller";

app.get("/", getUserController);
