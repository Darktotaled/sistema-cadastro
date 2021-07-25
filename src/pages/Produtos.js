import React from 'react'

import { Link } from 'react-router-dom'

function AssignValues() {
  localStorage.setItem("id", document.form1.id.value);
  localStorage.setItem("name", document.form1.name.value);
  localStorage.setItem("price", document.form1.price.value);
  localStorage.setItem("description", document.form1.description.value);
}

export default function Produtos() {
  return (
    <div>

      <h1> Cadastro de produtos </h1>
      <form name='form1' action='/'>
        <div className='formulario'>
          <label htmlFor='id'>Id</label>
          <input type="text" name='id' />
          <label htmlFor='name'>Nome</label>
          <input type="text" name='name' />
          <label htmlFor='price'>Preço</label>
          <input type="text" name='price' />
          <label htmlFor='description'>Descrição</label>
          <input type="email" name='description' />
        </div>
      </form>
      <div>
        <input type="button" value="Cadastrar" onClick={AssignValues} />
      </div>
      <div>
        <Link to="/"><button>Voltar</button></Link>
      </div>
    </div>

  )
}