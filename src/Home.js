import { useEffect, useState } from 'react';
import './App.css';
import ChargeImg from './componentImage/chargeimge';
import ChargeImgR from './componentImage/chargeimgeR';
import ChargeImgT from './componentImage/chargeimgeT';

function Home() {
    const [datos, setDatos] = useState([]); //Usamos hooks de estados porque primero se renderiza y luego llama a la API

    useEffect(
      () => {
       fetch('https://api.mercadolibre.com/products/MLA10025564') // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(MLA => {
       (setDatos(MLA)) // cuando hayamos terminado (then) actualizamos el estado nombre
    })
    },
    []//Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
    )
    // console.log(datos)

    const [datosT, setDatosT] = useState([]);

    useEffect(
      () => {
        fetch('https://api.mercadolibre.com/products/MLA17487229')
      .then(res => res.json())
      .then(MLA => {
        (setDatosT(MLA))
    })
    },
    []
    )

    const [datosR, setDatosR] = useState([]);

    useEffect(
      () => {
        fetch('https://api.mercadolibre.com/products/MLA18100795')
      .then(res => res.json())
      .then(MLA => {
        (setDatosR(MLA))
    })
    },
    []
    )



    console.log(datosT)
  return (
    <div class="color">
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal" >{datos.name}</h1>
                    <ChargeImg/>
                    <p class="lead font-weight-normal">{datos.domain_id}:   {datos.family_name}</p>
                    <a class="btn btn-outline-secondary" href="/">Coming soon</a>
                </div>
                <div class="product-device box-shadow d-none d-md-block"></div>
                <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
            </div>
            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                    <h2 class="display-5">{datosT.name}</h2>
                    <ChargeImgT/>
                    <p class="lead">{datosT.domain_id}:   {datosT.family_name}</p>
                    </div>
                    <div class="bg-light box-shadow mx-auto" ></div>
                </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                    <h2 class="display-5">{datosR.name}</h2>
                    <ChargeImgR/>
                    <p class="lead">{datosR.domain_id}:   {datosR.family_name}</p>
                    </div>
                    <div class="bg-dark box-shadow mx-auto" ></div>
                </div>
            </div>
    </div>
  );
}

export default Home;