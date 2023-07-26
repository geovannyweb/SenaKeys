

function UsersTable({users}) {
  return (
  
    
    
    
    <tr>
     <td>{users.name}</td>
     <td>{users.last_name}</td>
     <td>{users.dni}</td>
     <td>{users.type_dni}</td>
     <td>{users.mail}</td>
     <td>{users.role}</td>
     
      <td>
        <button>Eliminar</button>
        <button>Editar</button>
      </td>
      </tr>
   
  
  
  )
}

export default UsersTable