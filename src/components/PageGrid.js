import React from 'react'
import Educacao from './Educacao'
import Experiencia from './Experiencia'
import Habilidades from './Habilidades'
import Ingles from './Ingles'
import Contato from './Contato'
import Rodape from './Rodape'
import './PageGrid.scss'
import Curiosidades from './Curiosidades'

const PageGrid = () => (
  <div className='page-grid'>
    <Contato></Contato>
    <Experiencia></Experiencia>
    <Habilidades></Habilidades>
    <Educacao></Educacao>
    <Ingles></Ingles>
    <Curiosidades></Curiosidades>
    <Rodape></Rodape>
  </div>
)

export default PageGrid
