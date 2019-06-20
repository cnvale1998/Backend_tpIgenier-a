import { Router } from 'express';
import {ciudadesControllers} from '../controllers/CiudadesControllers';

 class CiudadesRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Ciudades/',ciudadesControllers.get);
        
        
     }
 }
 const ciudadesRoutes=new CiudadesRoutes();
 export default ciudadesRoutes.router; 