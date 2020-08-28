import Geralista from './geralista'
import Cadastra from './cadastra'
import Login from './login'
import Edita from './edita'


const routes = {
    'Geralista': {
        component: Geralista,
        showMenu: true,
        actions: {
            name: 'Adicionar Filme',
            to: 'Cadastra'
        }
    },
    'Cadastra': {
        component: Cadastra,
        showMenu: true,
        actions: {
            name: 'Ver Lista',
            to: 'Geralista'
        }
    },
    'Login': {
        component: Login,
        showMenu: false,
    },
    'Edita': {
        component: Edita,
        showMenu: true,
        actions:{
            name: 'Editar filme',
            to: 'Geralista'
        }
    }
  }
  export default routes;