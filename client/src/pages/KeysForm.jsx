import { createKeysRequest } from "../api/keys.api";

import {Form,Formik} from "formik"
function KeysForm() {
  return (
    <div>
     <Formik 
     initialValues={{
      environment: "",
     }}
     onSubmit={async (values, actions)  => {
        console.log(values);
         try {
          const response = await createKeysRequest(values)
          console.log(response);
          actions.resetForm();
         } catch (error) {
          console.error(error);
         }
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