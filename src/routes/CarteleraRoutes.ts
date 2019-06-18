import { Router } from 'express';
import {carteleraControllers} from '../controllers/CarteleraControllers';

 class CarteleraRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Cartelera/:fecha',carteleraControllers.get);
        
        
     }
 }
 const carteleraRoutes=new CarteleraRoutes();
 export default carteleraRoutes.router; 