import { Router } from 'express';
import {usuariosControllers} from '../controllers/UsuariosControllers';

 class UsuariosRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.post('/API/Usuarios/', usuariosControllers.insertarUsuario);
        this.router.get('/API/Usuarios/:email',usuariosControllers.usuarioExiste);

        this.router.post('/API/USUARIOS/getUser/', UsuariosControllers_1.usuariosControllers.obtenerUsuario);
        this.router.post('/API/USUARIOS/updatePass/', UsuariosControllers_1.usuariosControllers.updatePass);
        //this.router.post('/API/USUARIOS/updateMail/', UsuariosControllers_1.usuariosControllers.updateMail);

     }
 }

 const usuariosRoutes=new UsuariosRoutes();
 export default usuariosRoutes.router; 