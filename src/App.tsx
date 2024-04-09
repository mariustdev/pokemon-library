import './App.css'
import {Outlet} from "react-router-dom";
import {PokemonContextProvider} from "./utils/providers/PokemonProvider";


function App() {
  return (
    <>
        <PokemonContextProvider>
            <Outlet />
        </PokemonContextProvider>
    </>
  )
}

export default App
