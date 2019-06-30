import { Router } from 'express';
import {personasControllers} from '../controllers/PersonasControllers';

 class PersonasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Personas/:fecha',personasControllers.get);
        this.router.post('/API/Personas/',personasControllers
        .insertarPersona);
        
     }
 }
 const personasRoutes=new PersonasRoutes();
 export default personasRoutes.router; 