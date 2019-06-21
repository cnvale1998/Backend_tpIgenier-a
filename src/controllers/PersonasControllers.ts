import {Request,Response} from 'express';
import pool from '../database';

class PersonasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
         const { email } = req.params;
        const personas = await pool.query("SELECT COUNT(EMAIL) FROM PERSONAS WHERE EMAIL= ?",[email]);
        res.json(personas);
}

public async put (req: Request,res: Response): Promise<void> {
  try{
    const result = await pool.query('INSERT INTO PERSONAS set ?', [req.body]);
    res.json({ message: 'Persona guardada' });}
  catch(e){
    res.json({ message: 'Error' });
  }
}

     
  
}
  



export const personasControllers =new PersonasControllers();