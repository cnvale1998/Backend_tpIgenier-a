"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CiudadesControllers_1 = require("../controllers/CiudadesControllers");
class CiudadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Ciudades/', CiudadesControllers_1.ciudadesControllers.get);
    }
}
const ciudadesRoutes = new CiudadesRoutes();
exports.default = ciudadesRoutes.router;
