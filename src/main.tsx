import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./pages/404/PageNotFound";
import PokemonDetailPage from "./pages/pokemon/detail/PokemonDetailPage";
import PokemonListPage from "./pages/pokemon/list/PokemonListPage";

// Router configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            { index: true, element: <PokemonListPage /> },
            {
                path: "pokemon/:pokemonId",
                element: <PokemonDetailPage />,
                errorElement: <PageNotFound />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
