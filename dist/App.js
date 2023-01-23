"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const httpErrorMiddleware_1 = __importDefault(require("./middlewares/httpErrorMiddleware"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        const acessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(acessControl);
        this.app.use(httpErrorMiddleware_1.default);
    }
    ;
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
