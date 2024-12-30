"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const port = 3000;
http_1.default.createServer(app_1.default).listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
