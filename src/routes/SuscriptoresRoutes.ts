import { Router } from 'express';
import {suscriptoresControllers} from '../controllers/SuscriptoresControllers';

 class SuscriptoresRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.post('/API/Suscriptores/', suscriptoresControllers.post);
        this.router.get('/API/Suscriptores/:email', suscriptoresControllers.get);
        this.router.delete('/API/Suscriptores/:email', suscriptoresControllers.delete);
        
        
     }
 }
 const suscriptoresRoutes=new SuscriptoresRoutes();
 export default suscriptoresRoutes.router; 