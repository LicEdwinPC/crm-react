
function Cliente({cliente}) {
    const {nombre, empresa, email, telefono,id} = cliente;
  return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p className="mt-2 ">{empresa}</p>
            </td>   
            <td className="p-6 space-y-2 ">
                <p className="text-2xl text-gray-600"> <span className="text-gray-800 font-bold uppercase">Correo electrónico: </span>{email}</p>
                <p className="text-2xl text-gray-600"> <span className="text-gray-800 font-bold uppercase">Teléfono: </span>{telefono}</p>
            </td>   
            <td className="p-6 flex gap-3">
                <button type="button" className="text-blue-600 hover:text-blue-800 uppercase font-bold text:xs">Editar</button>
                <button type="button" className="text-red-600 hover:text-red-800 uppercase font-bold text:xs">Elimiar</button>
            </td>      
        </tr>
  )
}

export default Cliente