"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PeliculasControllers_1 = require("../controllers/PeliculasControllers");
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Peliculas/:id', PeliculasControllers_1.peliculasControllers.get);
    }
}
const peliculasRoutes = new PeliculasRoutes();
exports.default = peliculasRoutes.router;
