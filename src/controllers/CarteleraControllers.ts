import {Request,Response} from 'express';
import pool from '../database';

class CarteleraControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const { fecha } = req.params;

        const cartelera = await pool.query("SELECT * FROM PELICULAS WHERE ID_PELICULA IN (SELECT TIENEN.ID_PELICULA FROM TIENEN WHERE FECHA_INICIO< ? AND FECHA_FIN> ?)",[fecha, fecha]);
        res.json(cartelera);
}

     
  
}
  



export const carteleraControllers =new CarteleraControllers();