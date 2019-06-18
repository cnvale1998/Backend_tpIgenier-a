import { Router } from 'express';
import {marketingControllers} from '../controllers/MarketingControllers';

 class MarketingRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.post('/API/Empresas/', marketingControllers.insertarEmpresa);
        
        
     }
 }
 const marketingRoutes=new MarketingRoutes();
 export default marketingRoutes.router; 