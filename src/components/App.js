
import '../styles/App.css';
import Home from './Home';
import Boton from "./Boton";
import imagen from "../images/Kiss_Love_Gun_era.png"
import Formulario from './Formulario';
import Input from "./Input";

function App() {
  const name = 'Daniela';
  const students = ["cristian", "victor", "juan", "mar"]
  return (
    <div className="App">
      <h1>Esta es mi primera web</h1>
      <Formulario/>
      <Input/>
      

     <Boton estilo="azul" texto="reset"/> 
      {name}
      <Home>
        <p>lorem</p>
        <h6>bla bla</h6>
      </Home>

      <img src= {imagen} alt=""/>
      <ul>
        {
          students.map((eachStudent, i)=> <li key={i}>{eachStudent}</li>)
        }
      </ul>
    </div>
)
}

export default App;
