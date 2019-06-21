import { Router } from 'express';
import {suscriptoresControllers} from '../controllers/SuscriptoresControllers';

 class SuscriptoresRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.put('/API/Suscriptores/', suscriptoresControllers.put);
        
        
     }
 }
 const suscriptoresRoutes=new SuscriptoresRoutes();
 export default suscriptoresRoutes.router; 