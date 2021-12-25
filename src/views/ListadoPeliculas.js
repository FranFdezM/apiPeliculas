import React, { useState, useEffect } from 'react';
import PageWrapper from './PageWrapper';
import Pelicula from './pelicula';
import Paginacion from './paginacion';


function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_PAGINA = 4

  useEffect(() => {
    buscarPeliculas();
  }, []);

  

  const buscarPeliculas = async () => {
    let url = "https://lucasmoy.dev/data/react/peliculas.json";

    try {
      const response = await fetch(url);
      //console.log(response.status);
      if(response.status === 200)
        setPeliculas(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice((paginaActual - 1) * TOTAL_PAGINA, paginaActual * TOTAL_PAGINA);


  return (
    <PageWrapper>
        
        {peliculasPorPagina.map(pelicula => 
          <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
        
            {pelicula.descripcion}

          </Pelicula>
        )}

        <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
          setPaginaActual(pagina);
        }}></Paginacion>

    </PageWrapper>
  );      
}

export default ListadoPeliculas; 

