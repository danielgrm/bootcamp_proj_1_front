import React, {useState} from 'react'
import imgbanner from './kino-1.jpg'

import Header from './header'
import Footer from './footer'
// import Cadastra from './cadastra'
// import Geralista from './geralista'
// import Login from './login'
import Nav from './nav'
import routes from './routes'




const App = () => {

  const [page, setPage]=useState('Login')
  const rotaselecionada = routes[page]
  const Componenteselecionado = rotaselecionada.component
  


  const Menu = (rotas) => rotas.showMenu 
  ? <Nav pagina={rotas} mudaPagina={setPage} /> 
  : ""





 return (
    <React.Fragment>
      <Header />
      {Menu(rotaselecionada)}
      <main>
      <Componenteselecionado mudaPagina={setPage}/>
        <div className="banner">
          <img src={imgbanner} />
        </div>
      
        
      </main>

    <Footer/>

    </React.Fragment>
  );
}

export default App;



