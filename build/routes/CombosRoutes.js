"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CombosControllers_1 = require("../controllers/CombosControllers");
class CombosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Combos/:ciudad', CombosControllers_1.combosControllers.get);
    }
}
const combosRoutes = new CombosRoutes();
exports.default = combosRoutes.router;
