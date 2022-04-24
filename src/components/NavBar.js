<<<<<<< HEAD
import React from 'react'
import CartWidget from "./CartWidget";

const NavBar = () => {

   /* const estilos = {
        border: "solid red 1px",
        color: "blue"
    }*/

  return (
    <div>
        {/* <li style={estilos}>Inicio</li>
        <li style={estilos}>Catalogo</li>
        <li style={estilos}>Tips Especiales</li>
        <li style={estilos}>Maquinaria</li> */
        
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Vitamina Sea</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Inicio
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Catalogo
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Tips
            </a>
          </div>
          <CartWidget/>
        </div>
      </nav>

        }

    </div>
  )
}

export default NavBar

=======
import React from 'react'
import CartWidget from "./CartWidget";

const NavBar = () => {

   /* const estilos = {
        border: "solid red 1px",
        color: "blue"
    }*/

  return (
    <div>
        {/* <li style={estilos}>Inicio</li>
        <li style={estilos}>Catalogo</li>
        <li style={estilos}>Tips Especiales</li>
        <li style={estilos}>Maquinaria</li> */
        
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Vitamina Sea</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Inicio
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Catalogo
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Tips
            </a>
          </div>
          <CartWidget/>
        </div>
      </nav>

        }

    </div>
  )
}

export default NavBar

>>>>>>> 126c9cf9f61094747ed8309c32626e9e24741165
