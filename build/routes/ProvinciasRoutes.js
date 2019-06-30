"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProvinciasControllers_1 = require("../controllers/ProvinciasControllers");
class ProvinciasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Provincias/', ProvinciasControllers_1.provinciasControllers.get);
    }
}
const provinciasRoutes = new ProvinciasRoutes();
exports.default = provinciasRoutes.router;
