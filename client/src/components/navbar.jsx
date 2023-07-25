import {Link} from 'react-router-dom'
function navbar() {
  return (
    <div>
        <h1>SenaKeys</h1>

        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='Crear-Usuarios'>Crear Usuario</Link></li>
            <li><Link to='Historial'>Historico</Link></li>
            <li><Link to='Crear-Ambiente'>Crear Llave</Link></li>
            <li><Link to='Llaves'>Llaves</Link></li>
            <li><Link to='Prestamos'>Prestamos</Link></li>
            <li><Link to='Solicitar-Prestamo'>Prestar llave</Link></li>
        </ul>
    </div>
  )
}

export default navbar