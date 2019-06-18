import { Router } from 'express';
import {combosControllers} from '../controllers/CombosControllers';

 class CombosRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Combos/:ciudad',combosControllers.get);
        
        
     }
 }
 const combosRoutes=new CombosRoutes();
 export default combosRoutes.router; 