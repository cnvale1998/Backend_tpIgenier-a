import { Router } from 'express';
import {participantesControllers} from '../controllers/ParticipantesControllers';

 class ParticipantesRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();

     }

     config(){
        this.router.post('/API/Participantes/', participantesControllers.insertarParticipante);
           
         
     }
 }
 const participantesRoutes=new ParticipantesRoutes();
 export default participantesRoutes.router; 