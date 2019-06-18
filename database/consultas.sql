use cinemacenter;
/**ObtenerCartelera(fechaInicio)**/
SELECT *
FROM PELICULAS
WHERE ID_PELICULA IN (SELECT TIENEN.ID_PELICULA
						FROM TIENEN
						WHERE FECHA_INICIO<'2019-06-06' AND
						FECHA_FIN>'2019-06-06');
/**BuscarSolicitante(email)**/
SELECT *
FROM SOLICITANTES
WHERE EMAIL='manuelnc@gmail.com';

/** AgregarSolicitante(Solicitante)
INSERT SOLICITANTE() VALUES (); **/


/** BuscarProximosEstrenos(Fecha) **/
SELECT *
FROM PELICULAS
WHERE ID_PELICULA IN (SELECT TIENEN.ID_PELICULA
						FROM TIENEN
						WHERE FECHA_INICIO>'2019-06-06');
/**BuscarCombosDisponibles(ciudad)**/
SELECT *
FROM COMBOS
WHERE ID_COMBO IN (SELECT ID_COMBO
					FROM VALIDOS
                    WHERE CIUDAD='San Luis');
	
/**BuscarPersona(email)**/
SELECT *
FROM PERSONAS
WHERE EMAIL='manuelnc53@gmail.com';


/**AgregarPersonayConsulta(persona,consulta)
INSERT () VALUES ()
**/

/**BuscarBeneficiosDisponibles()**/
SELECT *
FROM BENEFICIOS;
