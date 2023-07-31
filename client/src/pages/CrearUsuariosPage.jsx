import {Form,Formik} from "formik"

 import { useKeys } from "../context/KeysProvider";

function CrearUsuariosPage() {
   const  {createUser} = useKeys()
  return (
    <div>
     <Formik 
     initialValues={{
      name: "",
      last_name: "",
      dni: "",
      type_dni: "",
      mail: "",
      password: "",
      role: "",
     }}
     onSubmit={ async(values, actions) => {
        console.log(values);
        createUser(values)
        actions.resetForm();

     }}
     >
      {({handleChange, handleSubmit, values, isSubmitting}) => (

<Form onSubmit={handleSubmit}>
<label>nombre</label>
<input type="text" name="name" placeholder="Nombre usuario" onChange={handleChange} value={values.name

}/>
<input type="text" name="last_name" placeholder="Apellido usuario" onChange={handleChange} value={values.last_name}/>
<input type="number" name="dni" placeholder=" # docmuento" onChange={handleChange} value={values.dni}/>

<select id="dni" name="type_dni" value={values.type_dni} onChange={handleChange}>
  <option value="4">C.C</option>
  <option value="5">T.I</option>
  <option value="6">C.E</option>
</select>

<input type="mail" placeholder="example@mail.com"
name="mail" onChange={handleChange} value={values.mail}/>

<input type="password" name="password"   placeholder="escribe una contraseña" onChange={handleChange} value={values.password}/>

<select id="role" name="role" value={values.role} onChange={handleChange}>
  <option value="1" >Admin</option>
  <option value="2" >Prestamista</option>
  <option value="3" >Instructor</option>
</select>

<button type="submit" disabled={isSubmitting}>{isSubmitting ? "Creando..." : "Guardar"}</button>
</Form>

      )}
     </Formik>
    </div>
  )
}

export default CrearUsuariosPage