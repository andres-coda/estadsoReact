function Boton({img, id, texto}){
    
    return (
        <button onClick={img} id={id}>{texto}</button>
    )
}

export default Boton;