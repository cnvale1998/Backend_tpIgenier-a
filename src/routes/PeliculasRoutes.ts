import { Router } from 'express';
import {peliculasControllers} from '../controllers/PeliculasControllers';

 class PeliculasRoutes{
    router: Router =Router();
    
     constructor(){
        this.config();


     }

     config(){
        this.router.get('/API/Peliculas/:id',peliculasControllers.get);
        
        
     }
 }
 const peliculasRoutes=new PeliculasRoutes();
 export default peliculasRoutes.router; 