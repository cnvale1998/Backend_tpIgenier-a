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
     }
 }

 const usuariosRoutes=new UsuariosRoutes();
 export default usuariosRoutesRoutes.router; 