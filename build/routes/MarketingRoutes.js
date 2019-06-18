"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MarketingControllers_1 = require("../controllers/MarketingControllers");
class MarketingRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/API/Empresas/', MarketingControllers_1.marketingControllers.insertarEmpresa);
    }
}
const marketingRoutes = new MarketingRoutes();
exports.default = marketingRoutes.router;
