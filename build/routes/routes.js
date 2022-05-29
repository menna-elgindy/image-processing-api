"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateImageParams_1 = __importDefault(require("./middleware/validateImageParams"));
const sharpImageResize_1 = __importDefault(require("./utilities/sharpImageResize"));
const path_1 = __importDefault(require("path"));
const imageExistence_1 = __importDefault(require("./utilities/imageExistence"));
const routes = express_1.default.Router();
//get endpoint:'/image'
//validate query parameters then send the resized image to browser
routes.get("/", validateImageParams_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageId = req.query.imageId; //name of the desired image to be resized
    const width = req.query.width; // desired width
    const height = req.query.height; //desired height
    const resizedImagesPath = path_1.default.resolve(__dirname, `../../images/resized/${imageId}-${width}x${height}.jpg`); //path for the resized images
    // helper function for sending image to browser
    function sendImage() {
        res.sendFile(resizedImagesPath);
    }
    let f = false; //helper flag
    //send image to browser if it was resized before
    if ((0, imageExistence_1.default)(resizedImagesPath) == true) {
        sendImage();
    }
    // resize image if it was not resized yet
    if ((0, imageExistence_1.default)(resizedImagesPath) == false) {
        f = yield (0, sharpImageResize_1.default)({ imageId, width, height });
    }
    // send new resized image to browser
    if (f) {
        setTimeout(sendImage, 500);
    }
}));
exports.default = routes;
