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
        this.router.post('/API/USUARIOS/getUser/', usuariosControllers.obtenerUsuario);
     }
 }

 const usuariosRoutes=new UsuariosRoutes();
 export default usuariosRoutes.router; 