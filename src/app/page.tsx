'use client'

import { processosData } from "@/data/Estacoes";
import { ProcessosItens } from "./components/ProcessosItens";



const Page = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mx-auto" >
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">
          Controle de Processos
        </h1>
        <ProcessosItens processos={processosData} />
      </div>
    </div>
  );
};

export default Page;