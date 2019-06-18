import {Request,Response} from 'express';
import pool from '../database';

class MarketingControllers{


  public async insertarEmpresa (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO EMPRESAS set ?', [req.body]);
          res.json({ message: 'se ha guardado la consulta de marketing' });}
        catch(e){
          res.json({ message: 'ocurrio un error lala' });
        }
      }
  public async getEmpresa(req: Request, res: Response): Promise<void> {
        const empresas = await pool.query('SELECT * FROM EMPRESAS');
        res.json(empresas);
}

     
  
}
  



export const marketingControllers =new MarketingControllers();