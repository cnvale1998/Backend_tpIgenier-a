import {Request,Response} from 'express';
import pool from '../database';

class SolicitantesControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const { email } = req.params;

        const solicitantes = await pool.query("SELECT * FROM SOLICITANTES WHERE EMAIL= ?",[email]);
        res.json(solicitantes);
}
  
}
  



export const solicitantesControllers =new SolicitantesControllers();