"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("server/app");
var user_controller_1 = require("routes/controllers/user.controller");
app_1.app.get("/", user_controller_1.getUserController);
//# sourceMappingURL=index.js.map