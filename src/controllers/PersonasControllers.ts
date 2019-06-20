import {Request,Response} from 'express';
import pool from '../database';

class PersonasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
         const { email } = req.params;
        const personas = await pool.query("SELECT * FROM PERSONAS WHERE EMAIL= ?",[email]);
        res.json(personas);
}
public async insertarPersona (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT IGNORE INTO PERSONAS set ?', [req.body]);
          res.json({ message: 'se ha guardado la persona' });}
        catch(e){
          res.json({ message: 'ocurrio un error personasController' });
        }
      }
//INSERT IGNORE INTO  `personas` (`DOC`, `TIPO_DOC`, `NOMBRE`, `APELLIDO`, `EMAIL`, `FECHA_NAC`, `TELEFONO`, `PERSONA_TIPO`) VALUES ('44444444', 'DNI', 'mama', 'mama', 'inaleng25@gmail.com', '2019-06-11', '22222', 'CONTACTO');

     
  
}
  



export const personasControllers =new PersonasControllers();