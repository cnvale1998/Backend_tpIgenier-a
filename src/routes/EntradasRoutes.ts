import { Router } from 'express';
import {entradasControllers} from '../controllers/EntradasControllers';

 class EntradasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.put('/API/Entradas/',entradasControllers.put);
        this.router.post('/API/Entradas/getButacasEntrada/',entradasControllers.getButacasEntrada);
        
        
     }
 }
 const entradasRoutes=new EntradasRoutes();
 export default entradasRoutes.router; 