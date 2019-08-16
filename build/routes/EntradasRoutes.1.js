"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EntradasControllers_1 = require("../controllers/EntradasControllers");
class EntradasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/API/Entradas/', EntradasControllers_1.entradasControllers.put);
		this.router.post('/API/Entradas/getButacasEntrada/',EntradasControllers_1.entradasControllers.getButacasEntrada);
    }
}
const entradasRoutes = new EntradasRoutes();
exports.default = entradasRoutes.router;
