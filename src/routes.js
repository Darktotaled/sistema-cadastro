import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Clientes from '../src/pages/Clientes'
import Produtos from '../src/pages/Produtos'
import Home from '../src/pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/clientes' component={Clientes} />
        <Route path='/produtos' component={Produtos} />
      </Switch>
    </BrowserRouter>
  )
}