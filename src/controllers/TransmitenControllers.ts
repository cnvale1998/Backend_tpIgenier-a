import {Request,Response} from 'express';
import pool from '../database';

class TransmitenControllers{


  
  public async verTransmision(req: Request, res: Response): Promise<any> {
    const { id_pelicula } = req.params;

        const transmision = await pool.query("SELECT * FROM transmiten WHERE ID_PELICULA = ?; ",[id_pelicula]);
        console.log(req.params);
        //CON ESTO EVITAMOS QUE NOS DEVUELVA UN ARREGLO CON 1 SOLO ELEMENTO [{ELEMENTO}]
        //Y ASEGURAMOS QUE DEVUELVA {ELEMENTO} QUE NO ES ARREGLO EQUIVALENTE A LA INTERFACE USADA.
        if(transmision.length >0){
          return res.json(transmision[0]);
        }
        
        res.status(404).json({text: "no hay transmisiones para esa pelicula"});

       
      
}

     
  
}
  



export const transmitenControllers =new TransmitenControllers();