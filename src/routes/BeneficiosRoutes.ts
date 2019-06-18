import { Router } from 'express';
import {beneficiosControllers} from '../controllers/BeneficiosControllers';

 class BeneficiosRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Beneficios/',beneficiosControllers.get);
        
        
     }
 }
 const beneficiosRoutes=new BeneficiosRoutes();
 export default beneficiosRoutes.router; 