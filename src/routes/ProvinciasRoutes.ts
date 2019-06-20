import { Router } from 'express';
import {provinciasControllers} from '../controllers/ProvinciasControllers';

 class ProvinciasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Provincias/',provinciasControllers.get);
        
        
     }
 }
 const provinciasRoutes=new ProvinciasRoutes();
 export default provinciasRoutes.router; 