import Boton from "./Boton"
function Home ({children}) {
    return (
        <>
        <h2>Este es el Home</h2>
        <Boton styleBackground = 'rojo'
            texto= 'Registrar usuario'/>
            {children}
        </>
    )
} 
export default Home; 

