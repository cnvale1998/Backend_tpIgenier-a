import {Request,Response} from 'express';
import pool from '../database';

class ProximosEstrenosControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const { fecha } = req.params;

        const proximosEstrenos = await pool.query("SELECT * FROM PELICULAS WHERE ID_PELICULA IN (SELECT TIENEN.ID_PELICULA FROM TIENEN WHERE FECHA_INICIO>?)",[fecha]);
        res.json(proximosEstrenos);
}
     
  
}
  



export const proximosEstrenosControllers =new ProximosEstrenosControllers();