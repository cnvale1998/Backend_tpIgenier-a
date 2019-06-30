import {Request,Response} from 'express';
import pool from '../database';

class SuscriptoresControllers{


    public async post (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO SUSCRIPTORES set ?', [req.body]);
          res.json({ message: 'Suscriptor guardado' });}
        catch(e){
          res.json({ message: 'Error' });
        }
      }
      public async get(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        const suscriptores = await pool.query("SELECT COUNT(EMAIL) FROM SUSCRIPTORES WHERE EMAIL= ?",[email]);
        console.log(suscriptores);
        res.json(suscriptores);
}

public async delete(req: Request, res: Response): Promise<void> {
  const { email } = req.params;
  const suscriptores = await pool.query("DELETE FROM SUSCRIPTORES WHERE EMAIL= ?",[email]);
  res.json(suscriptores);
}
     
  
}
  



export const suscriptoresControllers =new SuscriptoresControllers();