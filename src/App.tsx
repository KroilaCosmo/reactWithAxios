import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

interface Advice{
  id: number;
  advice: string;
}

function App() {

  const [nome, setNome] = useState<String>();
  const [personagem, setPersonagem] = useState<any>({});

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/4')
    .then(function (response) {
     console.log(response.data);
     setPersonagem(response.data);
     
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
      <h1>{personagem && personagem.name}</h1>
      <h4>Basic informations: </h4>
      <p>O personagem {personagem.name} está presente nos filmes:<br/>
      1- {personagem.films.map ((filme:any) => {return <strong> {filme}</strong>} )} <br/>
      </p>

    </div>
  )
}

export default App
