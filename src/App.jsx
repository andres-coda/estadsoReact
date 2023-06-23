import { useState } from 'react'
import './App.css'
import Boton from './componente/boton';
import Titulo from './componente/Titulo';

function App() {
  
  const ANIMAL_IMAGES = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
  };
  const [Imagen, setImagen] = useState(ANIMAL_IMAGES.img1);

  const img =(e)=>{
    let caso = e.target.id;
    switch (caso){
      case "uno":
        setImagen(ANIMAL_IMAGES.img1);
      break;
      case "dos":
        setImagen(ANIMAL_IMAGES.img2);
      break;
      case "tres":
        setImagen(ANIMAL_IMAGES.img3);
      break;
      default:
        setImagen(ANIMAL_IMAGES.img3);
      break;
    }

  }

  return (
    <>
     <Titulo/>
     <img src={Imagen}/>
     <div>
      <Boton img = {img} id={'uno'} texto={"IMAGEN UNO"}/>
      <Boton img = {img} id={'dos'} texto={"IMAGEN DOS"}/>
      <Boton img = {img} id={'tres'} texto={"IMAGEN TRES"}/>
     </div>
    </>
  )
}

export default App;
