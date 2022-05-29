"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const port = 3000;
//main endpoint
app.get("/", (req, res) => {
    res.send("Welcome to image processing api");
});
// use endpoint :'/image'
app.use("/image", routes_1.default);
//check that server is started
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
