"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ParticipantesControllers_1 = require("../controllers/ParticipantesControllers");
class ParticipantesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/API/Participantes/', ParticipantesControllers_1.participantesControllers.insertarParticipante);
        this.router.get('/API/Participantes/', ParticipantesControllers_1.participantesControllers.getParticipante);
    }
}
const participantesRoutes = new ParticipantesRoutes();
exports.default = participantesRoutes.router;
