import { Router } from 'express';
import {consultasControllers} from '../controllers/ConsultasControllers';

 class ConsultasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.put('/API/Consultas/',consultasControllers.put);
        
        
     }
 }
 const consultasRoutes=new ConsultasRoutes();
 export default consultasRoutes.router; 