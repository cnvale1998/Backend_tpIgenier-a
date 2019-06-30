import { Router } from 'express';
import {personasControllers} from '../controllers/PersonasControllers';

 class PersonasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){

    
        this.router.post('/API/Personas/', personasControllers.insertarPersona);

        this.router.get('/API/Personas/:email',personasControllers.get);
        this.router.put('/API/Personas/',personasControllers.put);
        this.router.delete('/API/Personas/:email', personasControllers.delete);
        
     }
 }

 const personasRoutes=new PersonasRoutes();
 export default personasRoutes.router; 