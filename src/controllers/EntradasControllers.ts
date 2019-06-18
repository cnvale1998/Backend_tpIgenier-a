import {Request,Response} from 'express';
import pool from '../database';

class EntradasControllers{


  public async put (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO ENTRADAS set ?', [req.body]);
          res.json({ message: 'Entrada guardada' });}
        catch(e){
          res.json({ message: 'Error' });
        }
      }
  public async get(req: Request, res: Response): Promise<void> {
        const entradas = await pool.query('SELECT * FROM entradas');
        res.json(entradas);
}

     
  
}
  



export const entradasControllers =new EntradasControllers();