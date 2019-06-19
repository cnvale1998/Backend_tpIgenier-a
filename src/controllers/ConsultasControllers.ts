import {Request,Response} from 'express';
import pool from '../database';

class ConsultasControllers{


  public async put (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO CONSULTAS set ?', [req.body]);
          res.json({ message: 'Consulta guardada' });}
        catch(e){
          res.json({ message: 'Error' });
        }
      }


     
  
}
  



export const consultasControllers =new ConsultasControllers();