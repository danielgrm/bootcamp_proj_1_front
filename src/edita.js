import React, {useState} from 'react'
import axios from 'axios'
// ainda falta implementar:
// 1. la no geralista, o botao edit precisa enviar para ca, 
// 2. pegar os dados do usuario que se deseja editar 
// 3. povoar os campos de input com os dados desse usuario

const Edita = () => {  


  const [form, setform] = useState({})
const handleChange = (event) => {
  setform({
    ...form,
    [event.target.name]: event.target.value,
  })
  return;
}
const submete = async () => {
    await axios.patch('http://localhost:3002/user',  form )
    setform({})
    alert("Dados enviados")
  }

return(
<div className="form">
          <h3>Edita filme cadastrado</h3>
          <form>
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" id="titulo" name="titulo"  onChange={handleChange} value={form.titulo || ""}  />
            <br />
            <label htmlFor="ano">Ano:</label>
            <input type="number" id="ano" name="ano"  onChange={handleChange} value={form.ano || ""}  />
            <br />
            <label htmlFor="genero">Genero:</label>
            <input type="text" id="genero" name="genero"  onChange={handleChange} value={form.genero || ""}  />
            <br />
            <label htmlFor="duracao">duracao:</label>
            <input type="number" id="duracao" name="duracao"  onChange={handleChange}value={form.duracao || ""}  />
            <br />
            <label htmlFor="diretor">diretor:</label>
            <input type="text" id="diretor" name="diretor"  onChange={handleChange}value={form.diretor || ""}  />
            <br />
            </form>
            <button onClick={ submete } value="Reset" > Submit </button>
        </div>
)
}
export default Edita