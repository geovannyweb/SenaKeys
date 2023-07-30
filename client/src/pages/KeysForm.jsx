
import {Form,Formik} from "formik"
import { useKeys } from "../context/KeysProvider";
import {useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";

function KeysForm() {
  
const {createKeys, getKey, updateKey} = useKeys()
const [keys, setkeys] = useState({
  environment: "",
})
const params = useParams()
const navigate = useNavigate()
useEffect(() => {
const loadKeys = async () => {
  if(params.id) {
    const keys = await getKey(params.id);
    
    setkeys({
      environment: keys.environment,
    })
   }
}
loadKeys()
}, [])
  return (
    <div>
      
      <h1>{params.id ? "Editar Llave/Ambiente" : "Crear Llave/Ambiente"}</h1>

     <Formik 
     initialValues={keys}
     enableReinitialize={true}
     onSubmit={async (values)  => {
        console.log(values);
        if (params.id) {
          await updateKey(params.id, values)
          navigate("/")
        } else{
          await createKeys(values)
        }
         
       setkeys({
        environment: "",
       })
     }}
     >
      {({handleChange, handleSubmit, values, isSubmitting}) => (

<Form onSubmit={handleSubmit}>
<label>Ambiente de formación</label>
<input type="text" name="environment" placeholder="Nombre del ambiente" onChange={handleChange}  value={values.environment}/>

<button type="submit" disabled={isSubmitting}>{isSubmitting ? "Creando..." : "Guardar"}</button>
</Form>

      )}
     </Formik>
    </div>
  )
}

export default KeysForm