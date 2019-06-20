import { Router } from 'express';
import {transmitenControllers} from '../controllers/TransmitenControllers';

 class TransmitenRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Transmiten/:id_pelicula',transmitenControllers.get);
        
        
     }
 }
 const transmitenRoutes=new TransmitenRoutes();
 export default transmitenRoutes.router; 