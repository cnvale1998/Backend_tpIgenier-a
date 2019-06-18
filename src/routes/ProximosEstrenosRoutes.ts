import { Router } from 'express';
import {proximosEstrenosControllers} from '../controllers/ProximosEstrenosControllers';

 class ProximosEstrenosRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/ProximosEstrenos/:fecha',proximosEstrenosControllers.get);
        
        
     }
 }
 const proximosEstrenosRoutes=new ProximosEstrenosRoutes();
 export default proximosEstrenosRoutes.router; 