"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BeneficiosControllers_1 = require("../controllers/BeneficiosControllers");
class BeneficiosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Beneficios/', BeneficiosControllers_1.beneficiosControllers.get);
		this.router.get('/API/Beneficios/getBenefEntrada/:tipo',BeneficiosControllers_1.beneficiosControllers.getBenefEntrada);
    }
}
const beneficiosRoutes = new BeneficiosRoutes();
exports.default = beneficiosRoutes.router;
