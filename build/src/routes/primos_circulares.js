"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Primos_circulares {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const primos_circulares = new Primos_circulares();
exports.default = primos_circulares.router;
