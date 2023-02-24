import React, {useState} from 'react';
import axios from 'axios'
import { getAllChuck } from '../services/AxiosService';
const TareaChuck = () => {


    const [humor, setHumor] = useState([]);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
  

    const ChuckNorris = async()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=>{
            setHumor(response.data.value)
            console.log(response.data.value)
        })
    }

    

    return (
        <div>
            <h2>Chistes</h2>
            <button onClick={ChuckNorris}>Generar chiste</button>
            <p>{humor}</p>

            <button onClick={()=>setDislike(dislike + 1)}>No me gusta: {dislike}</button>
            

            <button onClick={()=>setLike(like + 1)}>Me gusta: {like}</button>
            

        </div>
    );
}

export default TareaChuck;
