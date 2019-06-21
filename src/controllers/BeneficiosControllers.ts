import {Request,Response} from 'express';
import pool from '../database';

class BeneficiosControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const beneficios = await pool.query("SELECT BENEFICIOS.ID_BENEFICIO,NOMBRE,TIPO,CONDGENERALES,DESDE,HASTA FROM BENEFICIOS,APLICAN WHERE CIUDAD='San Luis' GROUP BY NOMBRE;");
        res.json(beneficios);
}

     
  
}
  



export const beneficiosControllers =new BeneficiosControllers();