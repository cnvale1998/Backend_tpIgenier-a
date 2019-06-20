import {Request,Response} from 'express';
import pool from '../database';

class CiudadesControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
        const ciudades = await pool.query("SELECT * FROM CIUDADES");
        res.json(ciudades);
}

     
  
}
  



export const ciudadesControllers =new CiudadesControllers();