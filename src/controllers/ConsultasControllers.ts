import {Request,Response} from 'express';
import pool from '../database';

class ConsultasControllers{


public async insertarConsulta(req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO CONSULTAS set ?', [req.body]);
          res.json({ message: 'se ha guardado la consulta' });}
        catch(e){
          res.json({ message: 'ocurrio un error EN consultasController' });
        }
      }


     
  
}
  



export const consultasControllers =new ConsultasControllers();