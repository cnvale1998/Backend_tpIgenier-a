import { Router } from 'express';
import {ticketsControllers} from '../controllers/TicketsControllers';

 class TicketsRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.put('/API/Entradas/',ticketsControllers.put);
        
        
     }
 }
 const ticketsRoutes=new TicketsRoutes();
 export default ticketsRoutes.router; 