import {Request,Response} from 'express';
import pool from '../database';

class BeneficiosControllers{


  
  public async get(req: Request, res: Response): Promise<void> {
    const beneficios = await pool.query("SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,TIPO,CONDGENERALES,DESDE,HASTA FROM BENEFICIOS,APLICAN WHERE CIUDAD='San Luis' AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO");
        res.json(beneficios);
}
  public async getBenefEntrada(req: Request, res: Response): Promise<void> {
       var datos = { TIPO: Number, CIUDAD: String };//faltaria comprobar la fecha del beneficio(desde.hasta), si todavia es valido
        datos = req.body;
        var cadena;
        if((datos.TIPO)==2){
                cadena="SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,SUBSTR(BENEFICIOS.COSTO,1,LOCATE('-',BENEFICIOS.COSTO)-1) `COSTO` FROM BENEFICIOS,APLICAN WHERE (CIUDAD=? AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO) OR BENEFICIOS.ID_BENEFICIO=0";

        }
        else{
                cadena="SELECT DISTINCT BENEFICIOS.ID_BENEFICIO,NOMBRE,SUBSTR(BENEFICIOS.COSTO,LOCATE('-',BENEFICIOS.COSTO)+1) `COSTO` FROM BENEFICIOS,APLICAN WHERE (CIUDAD=? AND BENEFICIOS.ID_BENEFICIO=APLICAN.ID_BENEFICIO) OR BENEFICIOS.ID_BENEFICIO=0 ";
        }
        const beneficios = await pool.query(cadena,[datos.CIUDAD]);
        res.json(beneficios);
 }
  
}
  



export const beneficiosControllers =new BeneficiosControllers();