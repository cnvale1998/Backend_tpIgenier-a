"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PersonasControllers_1 = require("../controllers/PersonasControllers");
class PersonasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Personas/:fecha', PersonasControllers_1.personasControllers.get);
    }
}
const personasRoutes = new PersonasRoutes();
exports.default = personasRoutes.router;
