import {Request,Response} from 'express';
import pool from '../database';

class PersonasControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
         const { email } = req.params;
        const personas = await pool.query("SELECT COUNT(EMAIL) FROM PERSONAS WHERE EMAIL= ?",[email]);
        res.json(personas);
}
public async insertarPersona(req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT IGNORE INTO PERSONAS set ?', [req.body]);//si existe no lo ingresa, toma en cuenta
          res.json({ message: 'se ha guardado la persona' });}                           // que no se repitan las claves primarias(EMAIL,TIPO_PERSONA)
        catch(e){
          res.json({ message: 'ocurrio un error en personasController' });
        }
      }

//INSERT IGNORE INTO  `personas` (`DOC`, `TIPO_DOC`, `NOMBRE`, `APELLIDO`, `EMAIL`, `FECHA_NAC`, `TELEFONO`, `PERSONA_TIPO`) VALUES ('44444444', 'DNI', 'mama', 'mama', 'inaleng25@gmail.com', '2019-06-11', '22222', 'CONTACTO');

public async put (req: Request,res: Response): Promise<void> {
  try{
    const result = await pool.query('INSERT INTO PERSONAS set ?', [req.body]);
    res.json({ message: 'Persona guardada' });}
  catch(e){
    res.json({ message: 'Error' });
  }
}

public async delete(req: Request, res: Response): Promise<void> {
  const { email } = req.params;
  const resultado = await pool.query("DELETE FROM PERSONAS WHERE EMAIL= ?",[email]);
  res.json(resultado);
}



     
  
}
  



export const personasControllers =new PersonasControllers();