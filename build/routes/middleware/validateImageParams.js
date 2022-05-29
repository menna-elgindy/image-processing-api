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
const path_1 = __importDefault(require("path"));
const imageExistence_1 = __importDefault(require("../utilities/imageExistence"));
// vaildate query parameters
const validateParams = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const imageId = req.query.imageId; //name of the desired image to be resized
    const width = req.query.width; // desired width
    const height = req.query.height; //desired height
    const imagesPath = path_1.default.resolve(__dirname, `../../../images/original/${imageId}.jpg`); //path for the available images
    //check imageId existence at query parameters
    if (!imageId) {
        return res.send("please select an image id");
    }
    //check that the query's imageId is availble
    if ((0, imageExistence_1.default)(imagesPath) == false) {
        return res.send("image not found, please select a valid image id");
    }
    //check width existence at query parameters
    if (!width) {
        return res.send("please select the desired width");
    }
    //check that width is a positive number
    if (width <= 0) {
        return res.send("please select width>0");
    }
    //check that width is a number not charcter
    if (isNaN(width)) {
        return res.send("width must be a positive integer");
    }
    //check height existence at query parameters
    if (!height) {
        return res.send("please select the desired height");
    }
    //check that height is a number not charcter
    if (isNaN(height)) {
        return res.send("height must be a positive integer");
    }
    //check that height is a positive number
    if (height <= 0) {
        return res.send("please select height>0");
    }
    next();
});
exports.default = validateParams;
