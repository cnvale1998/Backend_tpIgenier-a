import {Request,Response} from 'express';
import pool from '../database';

class BeneficiosControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
        const beneficios = await pool.query("SELECT * FROM BENEFICIOS");
        res.json(beneficios);
}

     
  
}
  



export const beneficiosControllers =new BeneficiosControllers();