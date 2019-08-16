import { Router } from 'express';
import {beneficiosControllers} from '../controllers/BeneficiosControllers';

 class BeneficiosRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Beneficios/',beneficiosControllers.get);
	this.router.post('/API/Beneficios/getBenefEntrada/',beneficiosControllers.getBenefEntrada);
        
        
     }
 }
 const beneficiosRoutes=new BeneficiosRoutes();
 export default beneficiosRoutes.router; 