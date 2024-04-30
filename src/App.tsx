import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {

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
      Name: {personagem.name} <br />
      Bith Year: {personagem.birth_year} <br />
      Height: {personagem.height} inches <br />
    </div>
  )
}

export default App
