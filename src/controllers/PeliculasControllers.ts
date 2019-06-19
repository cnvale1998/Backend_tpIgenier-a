import {Request,Response} from 'express';
import pool from '../database';

class PeliculasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const {id}=req.params;
    console.log(req.params);
    const pelicula = await pool.query("SELECT PELICULAS.ID_PELICULA,PELICULAS.NOMBRE,FECHAESTRENO,CLASIFICACION,GENERO,PROTAGONISTAS,RESENIA,NACIONALIDAD,DURACION,DISPONIBLE,TRAILER,DIRECTORES.NOMBRE,DIRECTORES.APELLIDO,DISTRIBUIDORAS.NOMBRE,HORARIOS FROM PELICULAS,DIRECTORES,DISTRIBUIDORAS,TRANSMITEN WHERE PELICULAS.ID_PELICULA=? AND ID_DIR1=DIRECTORES.ID_DIRECTOR GROUP BY PELICULAS.ID_PELICULA",[id]);
        res.json(pelicula);
}

     
  
}
  



export const peliculasControllers =new PeliculasControllers();