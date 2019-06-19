import {Request,Response} from 'express';
import pool from '../database';

class PeliculasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const {id}=req.params;
    console.log(req.params);
    const pelicula = await pool.query("SELECT * FROM PELICULAS WHERE ID_PELICULA=?",[id]);
        res.json(pelicula);
}

     
  
}
  



export const peliculasControllers =new PeliculasControllers();