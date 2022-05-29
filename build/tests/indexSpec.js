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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const imageExistence_1 = __importDefault(require("../routes/utilities/imageExistence"));
const path_1 = __importDefault(require("path"));
const sharpImageResize_1 = __importDefault(require("../routes/utilities/sharpImageResize"));
const request = (0, supertest_1.default)(index_1.default);
describe("Test responses from endpoints", () => {
    describe("endpoint: /", () => {
        it("gets /", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/");
            expect(response.status).toBe(200);
        }));
    });
    describe("endpoint:/image", () => {
        it("gets /image", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/image");
            expect(response.status).toBe(200);
        }));
        it("gets /image?imageId=fjord", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/image?imageId=fjord");
            expect(response.status).toBe(200);
        }));
        it("gets /image?imageId=fjord&width=100&height=100", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/image?imageId=fjord&width=100&height=100");
            expect(response.status).toBe(200);
        }));
    });
});
describe("Test image existance", () => {
    it("checks that there is no original image called test ", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageExistance = (0, imageExistence_1.default)(path_1.default.resolve(__dirname, `../../../images/original/test.jpg`));
        expect(imageExistance).toBeFalse();
    }));
    it("checks that there is original image called fjord ", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageExistance = (0, imageExistence_1.default)(path_1.default.resolve(__dirname, `../../images/original/fjord.jpg`));
        expect(imageExistance).toBeTrue();
    }));
    it("checks that there is resized image called test-200x100 ", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageExistance = (0, imageExistence_1.default)(path_1.default.resolve(__dirname, `../../images/resized/test-200x100.jpg`));
        expect(imageExistance).toBeTrue();
    }));
});
describe("Test sharp image processing module", () => {
    it("checks that sharp module is defined ", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(sharpImageResize_1.default).toBeDefined();
    }));
    it("checks that sharp module resized the image icelandwaterfall ", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageResized = yield (0, sharpImageResize_1.default)({
            imageId: "icelandwaterfall",
            width: "100",
            height: "100",
        });
        expect(imageResized).toBeTrue();
    }));
});
