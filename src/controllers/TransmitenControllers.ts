import {Request,Response} from 'express';
import pool from '../database';

class TransmitenControllers{


  
  public async get(req: Request, res: Response): Promise<any> {
    const { id_pelicula } = req.params;

        const transmision = await pool.query("SELECT * FROM transmiten WHERE ID_PELICULA = ?; ",[id_pelicula]);
        console.log(req.params);
        return res.json(transmision);
       
      
}

     
  
}
  



export const transmitenControllers =new TransmitenControllers();