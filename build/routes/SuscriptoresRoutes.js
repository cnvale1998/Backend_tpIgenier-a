"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SuscriptoresControllers_1 = require("../controllers/SuscriptoresControllers");
class SuscriptoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/API/Suscriptores/', SuscriptoresControllers_1.suscriptoresControllers.post);
        this.router.get('/API/Suscriptores/:email', SuscriptoresControllers_1.suscriptoresControllers.get);
        this.router.delete('/API/Suscriptores/:email', SuscriptoresControllers_1.suscriptoresControllers.delete);
    }
}
const suscriptoresRoutes = new SuscriptoresRoutes();
exports.default = suscriptoresRoutes.router;
