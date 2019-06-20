import {Request,Response} from 'express';
import pool from '../database';

class UsuariosControllers{

    public async insertarUsuario(req: Request,res: Response): Promise<void> {
        try{
          const result = await pool.query('INSERT INTO USUARIOS set ?', [req.body]);
          res.json({ message: 'Se ha registrado un nuevo usuario' });}                        
        catch(e){
          res.json({ message: 'Ocurrio un error en usuariosController' });
        }
    }
    public async usuarioExiste(req: Request, res: Response): Promise<void> {
        const { email } = req.params;
        const usuario = await pool.query("SELECT COUNT(EMAIL) as contador FROM USUARIOS WHERE EMAIL = ?",[email]);
        res.json(usuario);
    }

  
}
  



export const usuariosControllers =new UsuariosControllers();