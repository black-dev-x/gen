import React from 'react'
import Educacao from './Educacao'
import Experiencia from './Experiencia'
import Habilidades from './Habilidades'
import Ingles from './Ingles'
import Contato from './Contato'

const PageGrid = () => (
  <div className='page-grid'>
    <Contato></Contato>
    <Experiencia></Experiencia>
    <Habilidades></Habilidades>
    <Educacao></Educacao>
    <Ingles></Ingles>
  </div>
)

export default PageGrid
