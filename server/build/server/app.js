"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var csurf_1 = __importDefault(require("csurf"));
// import i18n from "../middlewares/common/i18n";
require("dotenv").config({ path: ".env.".concat(process.env.NODE_ENV) });
var app = (0, express_1.default)();
exports.app = app;
var server = require("http").createServer(app);
exports.server = server;
var MongoStore = require("connect-mongodb-session")(express_session_1.default);
app.use((0, cors_1.default)({
    origin: process.env.ORIGIN || "http://localhost:3000",
}));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true }));
app.use(express_1.default.json({ limit: "10mb" }));
app.use((0, cookie_parser_1.default)());
app.use((0, csurf_1.default)({ cookie: true }));
// app.use(i18n);
var store = new MongoStore({
    collection: "sessions",
    uri: process.env.DB,
});
app.use((0, express_session_1.default)({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    // 7 days
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
}));
app.all("*", function (req, res, next) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
});
//# sourceMappingURL=app.js.map