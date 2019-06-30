"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosControllers_1 = require("../controllers/UsuariosControllers");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/API/Usuarios/', UsuariosControllers_1.usuariosControllers.insertarUsuario);
        this.router.get('/API/Usuarios/:email', UsuariosControllers_1.usuariosControllers.usuarioExiste);
        this.router.post('/API/USUARIOS/getUser/', UsuariosControllers_1.usuariosControllers.obtenerUsuario);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
