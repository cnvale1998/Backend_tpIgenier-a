import {Request,Response} from 'express';
import pool from '../database';

class ProvinciasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
        const provincias = await pool.query("SELECT * FROM provincias");
        res.json(provincias);
}

     
  
}
  



export const provinciasControllers =new ProvinciasControllers();