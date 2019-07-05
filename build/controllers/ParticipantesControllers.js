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
class ParticipantesControllers {
    getParticipante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const participadores = yield database_1.default.query('SELECT participantes.EMAIL FROM participantes');
            res.json(participadores);
        });
    }
    insertarParticipante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO participantes set ?', [req.body]);
                console.log("inserto particip");
				req.body.json({});
                res.json({ message: 'se ha guardado el participante' });
            }
            catch (e) {
                res.json({ message: 'ocurrio un error lala' });
            }
        });
    }
}
exports.participantesControllers = new ParticipantesControllers();
