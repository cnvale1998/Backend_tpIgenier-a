import { Router } from 'express';
import {entradasControllers} from '../controllers/EntradasControllers';

 class EntradasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.put('/API/Entradas/',entradasControllers.put);
        
        
     }
 }
 const entradasRoutes=new EntradasRoutes();
 export default entradasRoutes.router; 