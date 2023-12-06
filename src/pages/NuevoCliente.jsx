import { useNavigate,Form } from "react-router-dom"
import Formulario from "../components/Formulario";

export async function action({request}){
    const formData = await request.formData();

    // console.log([...formData]);

    const datos = Object.fromEntries(formData);
    console.log(datos);
    return datos;

   
}

function NuevoCliente() {
    const navigate  = useNavigate();
  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Nuevos Clientes</h1>
      <p className="mt-3">Llena todos los campos requeridos</p>

      <div className="flex justify-end">
        <button onClick={() => navigate(-1)} className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
            volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx:auto px-5 py-10">
        <Form
        method="POST"
        
        >
            <Formulario
            cliente={{}}
            cargando={false}
            
            />
            <input type="submit"  className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
            disabled={false}
            />
        </Form>

      </div>
    </>
  )
}

export default NuevoCliente