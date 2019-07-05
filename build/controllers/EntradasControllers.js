"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EntradasControllers {
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var valores = { ID_PELICULA: Number, ID_BENEFICIO: Number, PRECIO: Number, FECHA: Date, TOTAL: Number, ID_COMBO: Number, EMAIL: String };
            valores = req.body;
            try {


                var ticket = yield database_1.default.query('INSERT INTO TICKETS(TOTAL, ID_COMBO, EMAIL) VALUES (?,?,?)', [valores.TOTAL, valores.ID_COMBO, valores.EMAIL]);
                var query_ticket = yield database_1.default.query('SELECT MAX(ID_TICKET) AS id FROM TICKETS');
                var id_ticket = JSON.parse(JSON.stringify(query_ticket));
                const result = yield database_1.default.query('INSERT INTO ENTRADAS(ID_PELICULA,PRECIO,ID_BENEFICIO, ID_TICKET, FECHA) VALUES  (?,?,?,?,?)', [valores.ID_PELICULA, valores.PRECIO, valores.ID_BENEFICIO, id_ticket[0].id, valores.FECHA]);

                res.json({ message: 'Entrada guardada' });
            }
            catch (e) {
                res.json({ message: 'Error' });
                console.log(e);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entradas = yield database_1.default.query('SELECT * FROM entradas');
            res.json(entradas);
        });
    }
}
exports.entradasControllers = new EntradasControllers();
