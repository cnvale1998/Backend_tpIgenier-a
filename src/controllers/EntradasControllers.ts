import {Request,Response} from 'express';
import pool from '../database';

class EntradasControllers{


  public async put (req: Request,res: Response): Promise<void> {
    var valores = { ID_PELICULA:Number, ID_BENEFICIO: Number, PRECIO: Number, FECHA: Date, TOTAL: Number, ID_COMBO: Number, EMAIL: String ,MODOPAGO: String,ID_CIUDAD:String ,BUTACAS:[] , CANT_COMBO: Number};
	valores= req.body;
        
        try{
            var combo;
            if(valores.ID_COMBO==0){
                    combo=null;
            }
            else{
                    combo=valores.ID_COMBO;
            }
           var ticket = await pool.query('INSERT INTO TICKETS(TOTAL, ID_COMBO,CANT_COMBO, EMAIL) VALUES (?,?,?,?)', [valores.TOTAL, combo,valores.CANT_COMBO, valores.EMAIL]);
            var query_ticket = await pool.query('SELECT MAX(ID_TICKET) AS id FROM TICKETS');
            var id_ticket = JSON.parse(JSON.stringify(query_ticket));

            const result =  await pool.query("INSERT INTO ENTRADAS(ID_PELICULA,PRECIO,ID_BENEFICIO, ID_TICKET, FECHA, MODOPAGO,ID_CIUDAD) VALUES  (?,?,?,?,?,?,?)", [valores.ID_PELICULA,valores.PRECIO,valores.ID_BENEFICIO,id_ticket[0].id,valores.FECHA, valores.MODOPAGO,valores.ID_CIUDAD]);
            var query_entrada = await pool.query('SELECT MAX(ID_ENTRADA) AS id FROM ENTRADAS');
            var id_entrada = JSON.parse(JSON.stringify(query_entrada));

			
            for(var i=0; i<valores.BUTACAS.length; i++){
                    const result =  await pool.query("INSERT INTO `butaca_entrada` (`ID`, `ID_ENTRADA`, `ID_BUTACA`) VALUES (NULL, ?,(SELECT ID FROM `butacas` WHERE HILERA=? and NUMERO=?));",[id_entrada[0].id , valores.BUTACAS[i]['fila'] , valores.BUTACAS[i]['butaca'] ]);

            }
          
           res.json({ message: 'Entrada guardada' });
        }catch(e){
          res.json({ message: 'Error' });
          console.log(e);
        }
      }
public async get(req: Request, res: Response): Promise<void> {
        const entradas = await pool.query('SELECT * FROM entradas');
        res.json(entradas);
}

 public async getButacasEntrada(req: Request, res: Response): Promise<void> {
       
         try{
           var  valores={ID_CIUDAD:String,FECHA:Date,ID_PELICULA:Number};
            valores= req.body;
            const butacas = await pool.query("SELECT butacas.NUMERO,butacas.HILERA  FROM `butacas`,`ENTRADAS`,`BUTACA_ENTRADA` WHERE ( `butacas`.ID = BUTACA_ENTRADA.ID_BUTACA) and  BUTACA_ENTRADA.ID_ENTRADA = entradas.ID_ENTRADA and entradas.ID_CIUDAD =? AND ENTRADAS.FECHA=? AND ENTRADAS.ID_PELICULA=? ORDER BY butacas.ID",[valores.ID_CIUDAD, valores.FECHA , valores.ID_PELICULA ]);
            res.json(butacas);
        }                        
        catch(e){
          res.json({ message: 'Ocurrio un error en entradasController getButacasEntrada' });
        }
}
     
  
}
  



export const entradasControllers =new EntradasControllers();