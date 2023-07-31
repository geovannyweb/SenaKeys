import { useEffect } from "react";
import UsersTable from "../components/UsersTable";
import { useKeys } from "../context/KeysProvider";

function UsersPage() {
 const {users, loadUsers}  = useKeys()  

  useEffect(() => {
    loadUsers();
  }, []);
  
   function renderMain() {
    if (users.length === 0) return <tr><td>Para ver informació  aquí, crea un registro</td></tr>
      return users.map((users) => (
        <UsersTable users={users} key={users.id}/>
       ))
   
    
      
   
   }

    return (
  <div>
    <h1>Usuarios</h1>
    <table>
    <thead>
      <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th># documento</th>
      <th>Tipo documento</th>
      <th>Correo</th>
      <th>Rol</th>
      <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
     {renderMain()}
   </tbody>
   </table>
  </div>
  );
}

export default UsersPage