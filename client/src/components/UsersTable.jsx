import { deleteUsersRequest } from "../api/users.api";

function UsersTable({users}) {
   
  const handleDelete = async(id) => {
    try {
     const response = await deleteUsersRequest(id);
     console.log(response);
    } catch (error) {
     console.error(error);
    }
   }
   
  return (
  

    
    
    <tr>
     <td>{users.name}</td>
     <td>{users.last_name}</td>
     <td>{users.dni}</td>
     <td>{users.type_dni}</td>
     <td>{users.mail}</td>
     <td>{users.role}</td>
     
      <td>
        <button onClick={() => handleDelete(users.id)}>Eliminar</button>
        <button>Editar</button>
      </td>
      </tr>
   
  
  
  )
}

export default UsersTable