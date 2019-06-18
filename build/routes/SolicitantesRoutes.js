"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SolicitantesControllers_1 = require("../controllers/SolicitantesControllers");
class SolicitantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Solicitantes/:email', SolicitantesControllers_1.solicitantesControllers.get);
    }
}
const solicitantesRoutes = new SolicitantesRoutes();
exports.default = solicitantesRoutes.router;
