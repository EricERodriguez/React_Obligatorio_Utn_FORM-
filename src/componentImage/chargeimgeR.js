import { useEffect, useState } from 'react';
import '../App.css';

function ChargeImgR() {


    const [picture, setPicture] = useState([]);
    useEffect(() => {
        const apiUrl = 'https://api.mercadolibre.com/products/MLA18100795';
        fetch(apiUrl)
            .then((res) => res.json())
            .then(result=>{

            if(result.pictures){
                setPicture(result.pictures[0].url);
            }
            })
            .catch(function() {
            console.log("error");
        });
        }, []);
        // console.log(picture)

    return (<input  type="image" src={picture} alt="description of image" className="imageMl" />);
}

export default ChargeImgR