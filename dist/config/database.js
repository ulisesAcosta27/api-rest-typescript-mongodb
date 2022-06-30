"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const main = async () => {
    try {
        await mongoose_1.default.connect("mongodb+srv://api-pets:api-pets@cluster0.r7jyr.mongodb.net/api-pets" ||
            "");
        console.log('The database is connected successfully');
    }
    catch (error) {
        console.log(error);
    }
};
main();
