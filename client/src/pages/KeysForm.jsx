
import {Form,Formik} from "formik"
import { useKeys } from "../context/KeysProvider";

function KeysForm() {
  
const {createKeys} = useKeys()
  return (
    <div>
     <Formik 
     initialValues={{
      environment: "",
     }}
     onSubmit={async (values, actions)  => {
        console.log(values);
         createKeys(values)
        actions.resetForm();
     }}
     >
      {({handleChange, handleSubmit, values, isSubmitting}) => (

<Form onSubmit={handleSubmit}>
<label>Ambiente de formación</label>
<input type="text" name="environment" placeholder="Nombre del ambiente" onChange={handleChange}  value={values.environment}/>

<button type="submit" disabled={isSubmitting}>{isSubmitting ? "Creando..." : "Crear"}</button>
</Form>

      )}
     </Formik>
    </div>
  )
}

export default KeysForm