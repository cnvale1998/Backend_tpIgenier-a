"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarteleraControllers_1 = require("../controllers/CarteleraControllers");
class CarteleraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/API/Cartelera/:fecha', CarteleraControllers_1.carteleraControllers.get);
    }
}
const carteleraRoutes = new CarteleraRoutes();
exports.default = carteleraRoutes.router;
