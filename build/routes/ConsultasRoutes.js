"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultasControllers_1 = require("../controllers/ConsultasControllers");
class ConsultasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/API/Consultas/', ConsultasControllers_1.consultasControllers.insertarConsulta);
    }
}
const consultasRoutes = new ConsultasRoutes();
exports.default = consultasRoutes.router;
