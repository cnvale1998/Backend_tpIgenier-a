import {Request,Response} from 'express';
import pool from '../database';

class CombosControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
        const { ciudad } = req.params;
        const combos = await pool.query("SELECT * FROM COMBOS WHERE ID_COMBO IN (SELECT ID_COMBO FROM VALIDOS WHERE CIUDAD= ?)", [ciudad]);
        res.json(combos);
}

     
  
}
  



export const combosControllers =new CombosControllers();