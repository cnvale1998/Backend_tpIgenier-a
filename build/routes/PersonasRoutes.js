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
        this.router.post('/API/Personas/', PersonasControllers_1.personasControllers.insertarPersona);
        this.router.get('/API/Personas/:email', PersonasControllers_1.personasControllers.get);
        this.router.put('/API/Personas/', PersonasControllers_1.personasControllers.put);
        this.router.delete('/API/Personas/:email', PersonasControllers_1.personasControllers.delete);
    }
}
const personasRoutes = new PersonasRoutes();
exports.default = personasRoutes.router;
