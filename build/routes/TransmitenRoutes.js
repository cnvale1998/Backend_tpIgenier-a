"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransmitenControllers_1 = require("../controllers/TransmitenControllers");
class TransmitenRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Transmiten/:id_pelicula', TransmitenControllers_1.transmitenControllers.verTransmision);
    }
}
const transmitenRoutes = new TransmitenRoutes();
exports.default = transmitenRoutes.router;
