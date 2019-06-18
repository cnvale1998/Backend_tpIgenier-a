"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProximosEstrenosControllers_1 = require("../controllers/ProximosEstrenosControllers");
class ProximosEstrenosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/ProximosEstrenos/:fecha', ProximosEstrenosControllers_1.proximosEstrenosControllers.get);
    }
}
const proximosEstrenosRoutes = new ProximosEstrenosRoutes();
exports.default = proximosEstrenosRoutes.router;
