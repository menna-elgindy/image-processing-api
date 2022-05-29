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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const sharpImage = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const originalImagesPath = path_1.default.resolve(__dirname, `../../../images/original/${params.imageId}.jpg`); //path for availble images that can be resized
    const resizedImagesPath = path_1.default.resolve(__dirname, `../../../images/resized/${params.imageId}-${params.width}x${params.height}.jpg`); //path for the resized images
    // using sharp for image resizing
    (0, sharp_1.default)(originalImagesPath)
        .resize(parseInt(params.width), parseInt(params.height))
        .toFile(resizedImagesPath);
    return true;
});
exports.default = sharpImage;
