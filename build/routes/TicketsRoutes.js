"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TicketsControllers_1 = require("../controllers/TicketsControllers");
class TicketsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/API/Entradas/', TicketsControllers_1.ticketsControllers.put);
    }
}
const ticketsRoutes = new TicketsRoutes();
exports.default = ticketsRoutes.router;
