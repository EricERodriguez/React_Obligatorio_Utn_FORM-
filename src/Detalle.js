import { useEffect, useState } from 'react';
import './App.css';
// import Sku from './sku';

//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css';




function Detalle() {

  const [datosDetalle, setDatosDetalle] = useState([]);

    useEffect(
      () => {
        fetch('https://api.mercadolibre.com/products/MLA15149568')
      .then(res => res.json())
      .then(MLA => {
        (setDatosDetalle(MLA))
    })
    },
    []
    )

    const [price, setPrice] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://api.mercadolibre.com/products/MLA15149568';
        fetch(apiUrl)
            .then((res) => res.json())
            .then(result=>{
              console.log(result.buy_box_winner.price)

            if(result.buy_box_winner.price){
              setPrice(result.buy_box_winner.price);
                console.log(result.buy_box_winner.price)
            }
            })
            .catch(function() {
            console.log("error");
        });
        }, []);



    console.log(price + 'aca')



  var [boolean, setBoolean] = useState(0);
  let gracias = ""
  if (boolean === true)  {
    gracias = "Gracias por su comprar"
  }

  var [det, setDet] = useState(0);

  return (
    <div classDescription="App">
      <header classDescription="App-header">
        <p class="col-md-5 mx-auto m-3 d-flex align-items-center">
          <img src="https://http2.mlstatic.com/D_NQ_NP_796892-MLA46114829828_052021-O.webp" alt="Girl in a jacket" width="500" height="100%" class="col-md-5 mx-auto my-8"/>
        </p>
        <a href="/buy">
          <button type="button" class="btn btn-primary col-md-5 mx-auto my-5" onClick={() => setBoolean(boolean = true )}>Comprar</button>
        </a>
        <p>{gracias} </p>


        <div class="card bg-dark mb-3" >
        <button type="button" class="btn btn-primary col-md-5 mx-auto my-8" onClick={() => setDet(det = true || false )}>Detalle</button>
            <div class="card-body  mx-auto my-8">
              <h5 class="card-title colorFont">{datosDetalle.name}</h5>
              <h3 class="card-text colorFont">{datosDetalle.domain_id}</h3>
                <h6 class="colorFont">{datosDetalle.family_name}
                </h6>
                <h2 class="colorFont">  Precio: </h2>
                <ol class="list-group list-group-numbered">
                <h1 class="colorFont">${price}</h1>
                </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Detalle;