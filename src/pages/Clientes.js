import React from 'react'
import { Link } from 'react-router-dom'

function AssignValues() {
  localStorage.setItem("nome", document.form1.nome.value);
  localStorage.setItem("endereco", document.form1.endereco.value);
  localStorage.setItem("telefone", document.form1.telefone.value);
  localStorage.setItem("email", document.form1.email.value);
}

export default function Clientes() {
  return (
    <div>

      <h1> Cadastro de clientes </h1>
      <form name='form1' action='/'>
        <div className='formulario'>
          <label htmlFor='name'>Nome</label>
          <input type="text" name='nome' />
          <label htmlFor='endereco'>Endereço</label>
          <input type="text" name='endereco' />
          <label htmlFor='telefone'>Telefone</label>
          <input type="text" name='telefone' />
          <label htmlFor='email'>E-mail</label>
          <input type="email" name='email' />
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