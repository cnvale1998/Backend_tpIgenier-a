import { Router } from 'express';
import {solicitantesControllers} from '../controllers/SolicitantesControllers';

 class SolicitantesRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Solicitantes/:email',solicitantesControllers.get);
        
        
     }
 }
 const solicitantesRoutes=new SolicitantesRoutes();
 export default solicitantesRoutes.router; 