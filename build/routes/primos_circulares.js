"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const primos_circularesControllers_1 = require("../controllers/primos_circularesControllers");
const database_1 = __importDefault(require("../database"));
class Primos_circulares {
    constructor() {
        this.router = express_1.Router();
        this.primos_circulares = [1, 2.3, 5, 7];
        this.matriz = [[0, 0, 0, 0, 0, 0],
            [1, 10, 100, 1000, 10000, 100000],
            [3, 30, 300, 3000, 30000, 300000],
            [7, 70, 700, 7000, 70000, 700000],
            [9, 90, 900, 9000, 90000, 900000]];
        this.filas = [4, 0, 0, 0, 0, 0];
        this.config();
        this.crear_primos_circulares();
    }
    crear_primos_circulares() {
        database_1.default.query('INSERT INTO valores VALUES (?)', 1);
        database_1.default.query('INSERT INTO valores VALUES (?)', 2);
        database_1.default.query('INSERT INTO valores VALUES (?)', 3);
        database_1.default.query('INSERT INTO valores VALUES (?)', 5);
        database_1.default.query('INSERT INTO valores VALUES (?)', 7);
        let valor = 0;
        while (valor < 999997) {
            valor = 0;
            let i = 0;
            this.filas[i]++;
            while (this.filas[i] > 4) {
                this.filas[i] = 1;
                i++;
                this.filas[i]++;
            }
            for (let j = 0; j < 6; j++) {
                valor += this.matriz[this.filas[j]][j];
            }
            if (valor % 3 != 0) {
                database_1.default.query('INSERT INTO valores VALUES (?)', valor);
            }
        }
    }
    config() {
        this.router.get('/', primos_circularesControllers_1.primos_circularesControllers.get);
        this.router.delete('/', primos_circularesControllers_1.primos_circularesControllers.delete);
    }
}
const primos_circulares = new Primos_circulares();
exports.default = primos_circulares.router;
