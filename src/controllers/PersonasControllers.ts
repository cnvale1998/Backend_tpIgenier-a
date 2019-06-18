import {Request,Response} from 'express';
import pool from '../database';

class PersonasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
         const { email } = req.params;
        const personas = await pool.query("SELECT * FROM PERSONAS WHERE EMAIL= ?",[email]);
        res.json(personas);
}

     
  
}
  



export const personasControllers =new PersonasControllers();