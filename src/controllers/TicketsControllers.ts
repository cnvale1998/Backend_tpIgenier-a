import {Request,Response} from 'express';
import pool from '../database';

class TicketsControllers{


  public async put (req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO TICKETS set ?', [req.body]);
          res.json({ message: 'Entrada guardada' });}
        catch(e){
          res.json({ message: 'Error' });
        }
      }
  public async get(req: Request, res: Response): Promise<void> {
        const tickets = await pool.query('SELECT * FROM TICKETS');
        res.json(tickets);
}

     
  
}
  



export const ticketsControllers =new TicketsControllers();