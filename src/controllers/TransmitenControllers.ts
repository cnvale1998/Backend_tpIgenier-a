import {Request,Response} from 'express';
import pool from '../database';

class TransmitenControllers{


  
  public async verTransmision(req: Request, res: Response): Promise<any> {
    const { idPelicula } = req.params;

        const transmision = await pool.query("SELECT * FROM transmiten WHERE ID_PELICULA = ? ",[idPelicula]);
        if(transmision.length>0){
          return res.json(transmision[0]);
        }

        res.status(404).json({text: "no hay transmisiones para esa pelicula"});
      
}

     
  
}
  



export const transmitenControllers =new TransmitenControllers();