

type Props = {
  listaCarros: { vin: string; processo: string; operacao: string }[];
  vin: string
  onclick: ()=>void;
}

export const ListaFacilit =({listaCarros, onclick}:Props)=>{
  return(
    <div>
      {listaCarros.length > 0 ? (
        <table className="table-auto text-black w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">VIN</th>
              <th className="border border-gray-400 px-4 py-2">Processo</th>
              <th className="border border-gray-400 px-4 py-2">Operação</th>
            </tr>
          </thead>
          <tbody>
            {listaCarros.map((item, key) => (
              <tr key={key}>
                <td className="border border-gray-400 px-4 py-2">{item.vin}</td>
                <td className="border border-gray-400 px-4 py-2">{item.processo}</td>
                <td className="border border-gray-400 px-4 py-2">{item.operacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-black">Nenhuma operação registrada.</p>
      )}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded mt-4"
        onClick={onclick}
      >
        Voltar
      </button>
    </div>
  )
}