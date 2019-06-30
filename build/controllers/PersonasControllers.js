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
class PersonasControllers {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const personas = yield database_1.default.query("SELECT COUNT(EMAIL) FROM PERSONAS WHERE EMAIL= ?", [email]);
            res.json(personas);
        });
    }
    insertarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT IGNORE INTO PERSONAS set ?', [req.body]); //si existe no lo ingresa, toma en cuenta
                res.json({ message: 'se ha guardado la persona' });
            } // que no se repitan las claves primarias(EMAIL,TIPO_PERSONA)
            catch (e) {
                res.json({ message: 'ocurrio un error en personasController' });
            }
        });
    }
    //INSERT IGNORE INTO  `personas` (`DOC`, `TIPO_DOC`, `NOMBRE`, `APELLIDO`, `EMAIL`, `FECHA_NAC`, `TELEFONO`, `PERSONA_TIPO`) VALUES ('44444444', 'DNI', 'mama', 'mama', 'inaleng25@gmail.com', '2019-06-11', '22222', 'CONTACTO');
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO PERSONAS set ?', [req.body]);
                res.json({ message: 'Persona guardada' });
            }
            catch (e) {
                res.json({ message: 'Error' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const resultado = yield database_1.default.query("DELETE FROM PERSONAS WHERE EMAIL= ?", [email]);
            res.json(resultado);
        });
    }
}
exports.personasControllers = new PersonasControllers();
