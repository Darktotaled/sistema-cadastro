import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
export default function Home() {
  return (
    <div>
      <h1>Sistema de Cadastramento</h1>
      <Link to='produtos'><button>
        Cadastro de produtos
      </button></Link>
      <Link to='clientes'><button>
        Cadastro de clientes
      </button></Link>

    </div>
  )
}