import { Router } from 'express';
import {personasControllers} from '../controllers/PersonasControllers';

 class PersonasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){

    
        this.router.post('/API/Personas/', consultasControllers.insertarPersona);

        this.router.get('/API/Personas/:email',personasControllers.get);
        this.router.put('/API/Personas/',personasControllers.put);

        
     }
 }

 const personasRoutes=new PersonasRoutes();
 export default personasRoutesRoutes.router; 