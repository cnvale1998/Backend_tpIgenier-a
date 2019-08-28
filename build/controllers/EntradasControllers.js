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
            var valores = { ID_PELICULA: Number, ID_BENEFICIO: Number, PRECIO: Number, FECHA: Date, TOTAL: Number, ID_COMBO: Number, EMAIL: String ,MODOPAGO: String,ID_CIUDAD:String ,BUTACAS:[] , CANT_COMBO: Number};
            valores = req.body;
            try {
				var combo;
				if(valores.ID_COMBO==0){
					combo=null;
				}
				else{
					combo=valores.ID_COMBO;
				}
                var ticket = yield database_1.default.query('INSERT INTO TICKETS(TOTAL, ID_COMBO,CANT_COMBO, EMAIL) VALUES (?,?,?,?)', [valores.TOTAL, combo, valores.CANT_COMBO, valores.EMAIL]);
                var query_ticket = yield database_1.default.query('SELECT MAX(ID_TICKET) AS id FROM TICKETS');
                var id_ticket = JSON.parse(JSON.stringify(query_ticket));
				
                const result = yield database_1.default.query("INSERT INTO ENTRADAS(ID_PELICULA,PRECIO,ID_BENEFICIO, ID_TICKET, FECHA, MODOPAGO,ID_CIUDAD) VALUES  (?,?,?,?,?,?,?)", [valores.ID_PELICULA,valores.PRECIO,valores.ID_BENEFICIO,id_ticket[0].id,valores.FECHA, valores.MODOPAGO,valores.ID_CIUDAD]);
				var query_entrada = yield database_1.default.query('SELECT MAX(ID_ENTRADA) AS id FROM ENTRADAS');
                var id_entrada = JSON.parse(JSON.stringify(query_entrada));
			   
				for(var i=0; i<valores.BUTACAS.length; i++){
					const result = yield database_1.default.query("INSERT INTO `butaca_entrada` (`ID`, `ID_ENTRADA`, `ID_BUTACA`) VALUES (NULL, ?,(SELECT ID FROM `butacas` WHERE HILERA=? and NUMERO=?));",[id_entrada[0].id , valores.BUTACAS[i]['fila'] , valores.BUTACAS[i]['butaca'] ]);
				
				}
			
				 res.json({ message: 'La Entrada  ha sido guardada' });
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
	
	getButacasEntrada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var  valores={ID_CIUDAD:String,FECHA:Date,ID_PELICULA:Number};
				
                valores = req.body;
				 const butacas = yield database_1.default.query("SELECT butacas.NUMERO,butacas.HILERA  FROM `butacas`,`ENTRADAS`,`BUTACA_ENTRADA` WHERE ( `butacas`.ID = BUTACA_ENTRADA.ID_BUTACA) and  BUTACA_ENTRADA.ID_ENTRADA = entradas.ID_ENTRADA and entradas.ID_CIUDAD =? AND ENTRADAS.FECHA=? AND ENTRADAS.ID_PELICULA=? ORDER BY butacas.ID",[valores.ID_CIUDAD, valores.FECHA , valores.ID_PELICULA ]);
                
              
                res.json(butacas);
            }
            catch (e) {
				res.json({ message: 'Ocurrio un error en entradasController getButacasEntrada' });
            }
        });
    }
}
exports.entradasControllers = new EntradasControllers();
