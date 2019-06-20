import { Router } from 'express';
import {consultasControllers} from '../controllers/ConsultasControllers';

 class ConsultasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
         this.router.post('/API/Consultas/', consultasControllers.insertarConsulta);
        
        
     }
 }
 const consultasRoutes=new ConsultasRoutes();
 export default consultasRoutes.router; 