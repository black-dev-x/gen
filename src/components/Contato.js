import React from 'react'
import './Contato.scss'

const Contato = () => (
  <section className='contato'>
    <div className='info'>
      <h1>Thiago Rodrigues</h1>
      <h2>Desenvolvedor de Software</h2>
    </div>
    <div className='adicionais'>
      <p>Email: thiago.dev.x@gmail.com</p>
      <p>
        <a href='https://github.com/black-dev-x' target='_blank' rel='noreferrer'>
          Github - github.com/black-dev-x
        </a>
      </p>
      <p>Brasilia - DF</p>
    </div>
  </section>
)

export default Contato
