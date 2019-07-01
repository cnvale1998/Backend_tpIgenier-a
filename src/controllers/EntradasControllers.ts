import {Request,Response} from 'express';
import pool from '../database';

class EntradasControllers{


  public async put (req: Request,res: Response): Promise<void> {
    var  valores={ID_PELICULA:Number,ID_BENEFICIO: Number, PRECIO: Number, FECHA:Date, TOTAL:Number, ID_COMBO:Number, EMAIL: String }; 
    valores= req.body;
    
        try{
          var ticket=await pool.query('INSERT INTO TICKETS(TOTAL, ID_COMBO, EMAIL) VALUES (?,?,?)',[valores.TOTAL,valores.ID_COMBO, valores.EMAIL]);
          var query_ticket = await pool.query('SELECT MAX(ID_TICKET) AS id FROM TICKETS');
          var id_ticket = JSON.parse(JSON.stringify(query_ticket));

          const result = await pool.query('INSERT INTO ENTRADAS(ID_PELICULA,PRECIO,ID_BENEFICIO, ID_TICKET, FECHA) VALUES  (?,?,?,?,?)', [valores.ID_PELICULA,valores.PRECIO,valores.ID_BENEFICIO,id_ticket[0].id,valores.FECHA]);

          res.json({ message: 'Entrada guardada' });}
        catch(e){
          res.json({ message: 'Error' });
          console.log(e);
        }
      }
  public async get(req: Request, res: Response): Promise<void> {
        const entradas = await pool.query('SELECT * FROM entradas');
        res.json(entradas);
}

     
  
}
  



export const entradasControllers =new EntradasControllers();