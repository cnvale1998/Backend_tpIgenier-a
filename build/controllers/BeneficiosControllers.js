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
class BeneficiosControllers {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficios = yield database_1.default.query("SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,TIPO,CONDGENERALES,DESDE,HASTA FROM BENEFICIOS,APLICAN WHERE CIUDAD='San Luis' AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO");
            res.json(beneficios);
        });
    }
	 getBenefEntrada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
			const { tipo } = req.params;
			
			var cadena;
			if(tipo==2){
				cadena="SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,SUBSTR(BENEFICIOS.COSTO,1,LOCATE('-',BENEFICIOS.COSTO)-1) `COSTO` FROM BENEFICIOS,APLICAN WHERE (CIUDAD='San Luis' AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO) OR BENEFICIOS.ID_BENEFICIO=0";
			}
			else{
				cadena="SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,SUBSTR(BENEFICIOS.COSTO,LOCATE('-',BENEFICIOS.COSTO)+1) `COSTO` FROM BENEFICIOS,APLICAN WHERE (CIUDAD='San Luis' AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO) OR BENEFICIOS.ID_BENEFICIO=0";
			}
			const beneficios = yield database_1.default.query(cadena);
			res.json(beneficios);
        });
    }
}
exports.beneficiosControllers = new BeneficiosControllers();
