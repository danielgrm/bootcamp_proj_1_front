import React, { useEffect, useState } from 'react'
import axios from 'axios'


    const Geralista = () => {
        const [users, setUsers] = useState([])
   
        const getList = async () => {
            try {
                const users = await axios.get('http://localhost:3002/user')
                setUsers(users.data)
                console.log(users)
            } catch (error) {
                console.log('error', error)
            }
        }
    
       const editUser = (user) => {
           alert("voce pediu para editar, mas não sou obrigada...")
       }
    
       const deleteUser = async (titulo) => {
            try{
               if (window.confirm('Está certo disso?'))
                await axios.delete(`http://localhost:3002/user/${titulo}`, {titulo})
               getList()
           }catch (err){
            console.log (err)
           }
    }
    
        const montarUsuarios = () => users.map((user, index) => (
            <tr key={index}>
                <td>{user.titulo}</td>
                <td>{user.ano}</td>
                <td>{user.genero}</td>
                <td>{user.duracao}</td>
                <td>{user.diretor}</td>
                <td>
                    <span onClick={() => editUser(user.titulo)} style={{color: "blue"}}>Editar</span> |
                    <span onClick={() => deleteUser(user.titulo)} style={{color: "red"}}>Excluir </span> 
                </td>
            </tr>
         
        ))
        useEffect(() => {
            getList()
        },[])

        //render
        return (
            
            <section>

                <div className="list_user">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Ano</th>
                                <th>Genero</th>
                                <th>Duracao</th>
                                <th>Diretor</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {montarUsuarios () }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    
        


}
export default Geralista 