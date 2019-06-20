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
class UsuariosControllers {
    
	insertarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO USUARIOS set ?', [req.body]);
                res.json({ message: 'Se ha registrado un nuevo usuario' });
            }
            catch (e) {
                res.json({ message: 'Ocurrio un error en usuariosController' });
            }
        });
    }
	usuarioExiste(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const usuarios = yield database_1.default.query("SELECT COUNT(EMAIL) as contador FROM USUARIOS WHERE EMAIL = ?", [email]);
            res.json(usuarios);
        });
    }
}
exports.usuariosControllers = new UsuariosControllers();
