
import Boton from "./Boton";

function Formulario(placeholder, labelValue) {
    return (
<form action="">
            <input placeholder="Nombre" labelValue="nombre"/>
            <input placeholder="E-mail" labelValue="email"/>
            <Boton texto="Enviar"/>
          
     </form>   
    )
}

export default Formulario;