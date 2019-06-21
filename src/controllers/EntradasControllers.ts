import {Request,Response} from 'express';
import pool from '../database';

class EntradasControllers{


  public async put (req: Request,res: Response): Promise<void> {
    var  valores={ID_PELICULA:Number,ID_BENEFICIO: Number, PRECIO: Number }; 
    valores= req.body;
    
        try{
          var query_ticket = await pool.query('SELECT MAX(ID_TICKET) AS id FROM TICKETS');
          var id_ticket = JSON.parse(JSON.stringify(query_ticket));
          const result = await pool.query('INSERT INTO ENTRADAS(ID_PELICULA,PRECIO,ID_BENEFICIO, ID_TICKET) VALUES  (?,?,?,?)', [valores.ID_PELICULA,valores.PRECIO,valores.ID_BENEFICIO,id_ticket[0].id]);
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