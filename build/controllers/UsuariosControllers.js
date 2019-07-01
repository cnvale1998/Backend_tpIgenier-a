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
	obtenerUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
			var datos = { EMAIL: String, CONTRASENIA: String };
            datos = req.body;
            const usuario = yield database_1.default.query("SELECT per.*  FROM USUARIOS as us,PERSONAS as per WHERE us.EMAIL = ? and us.CONTRASENIA=? and us.EMAIL=per.EMAIL", [datos.EMAIL,datos.CONTRASENIA]);
            res.json(usuario);
        });
    }
	
		updatePass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
				var datos = {CONTRASENIA:String, CONTRASENIA_ANT:String, EMAIL:String};
			
			datos = req.body;
			const result = yield database_1.default.query("UPDATE `usuarios` SET `CONTRASENIA` = ? WHERE `usuarios`.`EMAIL` = ? AND `usuarios`.`CONTRASENIA`= ?",[datos.CONTRASENIA,datos.EMAIL, datos.CONTRASENIA_ANT]);
				
              res.json({ message: 'Se cambio la contraseña exitosamente' });
            }
            catch (e) {
                res.json({ message: 'Ocurrio un error en usuariosController' });
            }
        });}
		/*updateMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
				 var datos = {EMAIL:String, DOC:String,EMAIL_ANT:String};
			
			datos = req.body;
			 const result = yield database_1.default.query("UPDATE `usuarios` SET `usuarios`.`EMAIL`= ? WHERE `usuarios`.`EMAIL` = ?",[datos.EMAIL,datos.EMAIL_ANT]);
         	 //const result = yield database_1.default.query("UPDATE `personas` SET `personas`.`EMAIL` = ? WHERE `personas`.`EMAIL` = ? and `personas`.`PERSONA_TIPO`='usuario' ",[datos.EMAIL,datos.EMAIL_ANT]);
       	
		res.json({ message: 'Se cambio el correo exitosamente' });
            }
            catch (e) {
                res.json({ message: 'Ocurrio un error en usuariosController' });
            }
        });}*/
}
exports.usuariosControllers = new UsuariosControllers();