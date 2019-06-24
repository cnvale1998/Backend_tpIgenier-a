import {Request,Response} from 'express';
import pool from '../database';

class ParticipantesControllers{


  public async insertarParticipante (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO participantes set ?', [req.body]);
          res.json({ message: 'se ha guardado el participante' });}
        catch(e){
          res.json({ message: 'ocurrio un error lala' });
        }
      }
      /*
  public async getEmpresa(req: Request, res: Response): Promise<void> {
        const empresas = await pool.query('SELECT * FROM EMPRESAS');
        res.json(empresas);
}*/

     
  
}
  


export const participantesControllers =new ParticipantesControllers();