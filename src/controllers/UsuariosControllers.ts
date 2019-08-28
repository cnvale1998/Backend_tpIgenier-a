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
    public async obtenerUsuario(req: Request, res: Response): Promise<void> {
        try{
            var datos = { EMAIL: String, CONTRASENIA: String };
            datos = req.body;
            const usuario = await pool.query("SELECT per.*  FROM USUARIOS as us,PERSONAS as per WHERE us.EMAIL = ? and us.CONTRASENIA=? and us.EMAIL=per.EMAIL", [datos.EMAIL,datos.CONTRASENIA]);
            res.json(usuario);
        }                        
        catch(e){
          res.json({ message: 'Ocurrio un error en usuariosController' });
        }
    }
    public async updatePass(req: Request,res: Response): Promise<void> {
        try{
          var datos = {CONTRASENIA:String, CONTRASENIA_ANT:String, EMAIL:String};
          datos = req.body;
           const result = await pool.query("UPDATE `usuarios` SET `CONTRASENIA` = ? WHERE `usuarios`.`EMAIL` = ? AND `usuarios`.`CONTRASENIA`= ?",[datos.CONTRASENIA,datos.EMAIL, datos.CONTRASENIA_ANT]);
          res.json({ message:  'Se cambio la contraseña exitosamente'  });}                        
        catch(e){
          res.json({ message: 'Ocurrio un error en usuariosController' });
        }
    }
    /*public async updateMail(req: Request,res: Response): Promise<void> {
        try{
          var datos = {EMAIL:String, DOC:String,EMAIL_ANT:String};
          datos = req.body;
          const result = await pool.query("UPDATE `personas` SET `EMAIL` = ? WHERE `persona`.`EMAIL` = ? and `persona`.`PERSONA_TIPO`='usuario' ",[datos.EMAIL,datos.EMAIL_ANT]);
          const result = await pool.query("UPDATE `usuarios` SET `EMAIL` = ? WHERE `usuarios`.`EMAIL` = ?",[datos.EMAIL,datos.EMAIL_ANT]);
          // res.json({ message:  'Se cambio el correo exitosamente'  });}  
             res.json(result);}                      
        catch(e){
          res.json({ message: 'Ocurrio un error en usuariosController' });
        }
    }*/
 
  
}
  



export const usuariosControllers =new UsuariosControllers();