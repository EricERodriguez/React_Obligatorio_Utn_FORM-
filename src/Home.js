import { useEffect, useState } from 'react';
import './App.css';

function Home() {
    const [name, setName] = useState(null);

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto') // hacemos la petición get
    //    fetch('https://api.mercadolibre.com/categories/MLA1743/classifieds_promotion_packs') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(res => setName(res.name)); // cuando hayamos terminado (then) actualizamos el estado nombre
    }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
    
  return (
    <div class="color">
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal" >{name}</h1>
                    <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <a class="btn btn-outline-secondary" href="/">Coming soon</a>
                </div>
                <div class="product-device box-shadow d-none d-md-block"></div>
                <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light box-shadow mx-auto" ></div>
                </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark box-shadow mx-auto" ></div>
                </div>
            </div>
    </div>
  );
}

export default Home;