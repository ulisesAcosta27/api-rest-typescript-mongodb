"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const mongoose_1 = require("mongoose");
const dogSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    breed: {
        type: String,
        enum: ["caniche", "pastor aleman", "perro de la calle", "boxer"],
        default: "boxer",
    },
    coat_color: {
        type: String,
        enum: ["negro", "blanco", "marron", "sin cabello", "marron con blanco"],
        default: "negro",
    },
    owner_name: { type: String },
    picture_url: { type: String },
});
exports.Dog = (0, mongoose_1.model)('Dog', dogSchema);
