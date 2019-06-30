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
class PeliculasControllers {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            const pelicula = yield database_1.default.query("SELECT PELICULAS.ID_PELICULA,PELICULAS.NOMBRE,FECHAESTRENO,CLASIFICACION,GENERO,PROTAGONISTAS,RESENIA,NACIONALIDAD,DURACION,DISPONIBLE,TRAILER,DIRECTORES.NOMBRE as NOMBRE2,DIRECTORES.APELLIDO,HORARIOS FROM PELICULAS,DIRECTORES,TRANSMITEN WHERE PELICULAS.ID_PELICULA=? AND ID_DIR1=DIRECTORES.ID_DIRECTOR GROUP BY PELICULAS.ID_PELICULA", [id]);
            res.json(pelicula);
        });
    }
}
exports.peliculasControllers = new PeliculasControllers();
