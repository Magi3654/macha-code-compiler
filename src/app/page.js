'use client'
import React, { useState } from 'react';
import { analizar } from '@/module/generador';
import CodeMirror from '@uiw/react-codemirror';
import {quietlight} from '@uiw/codemirror-theme-quietlight';





const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input = e.target.value;

    setExpressions(input);
    };


  const analizador = () => {
    const inputWithOutComments = expressions.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
    const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
    const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
    //console.log(cleanInput);

    //try {
      const calculadedResult = analizar(cleanInput);
      /*setResult(calculadedResult.toString());
      setConsola(''); // Limpiar mensajes de consola en caso de éxito
    } catch (error) {
      setConsola(`Error de sintaxis: ${error.message}`); // Actualizar mensajes de consola en caso de error
    }*/
  };
  const clearArea= ()=>{
    setExpressions('');
    setResult('');
  };



  

  return (
    <main className="justify-between items-center h-screen bg-lime-100">
      <div className="flex flex-col items-center">  
        <img src='./logo-matcha.png' className='mb-8 mt-8 scale-75'/>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8">
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-lime-900">Ingresa tu código</h2>
            <p className="text-lg text-center text-lime-700 mb-4">Codifica aquí</p>
            <CodeMirror 
            value={expressions}
            theme={quietlight}
            options={{
              lineNumbers: true,
              tabSize: 6,}}
              style={{
                borderRadius:'0.375rem',
                width:'100%',
                fontSize:'1rem',
                fontWeight:'400',
              }}
              onChange={(e)=>setExpressions(e)}
                className='overflow-y-auto max-h-[calc(100%-2rem)]'/>
            <div className='flex justify-between mt-4'>
              <button className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700" onClick={analizador}>
                Traducir
              </button>
              <button className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700" onClick={clearArea}>
                Borrar código
              </button>
            </div>
          </section>

          <section className="relative bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-lime-900">Traducción</h2>
            <p className="text-lg text-center text-lime-700 mb-4">Tu nuevo código es:</p>
            {result && (
              <>
                <div className="relative border border-lime-300 rounded-md">
                  <div className="absolute inset-y-0 left-0 px-2 py-2 text-sm text-gray-500 border-r border-lime-300 rounded-l-md">
                    {result.split('\n').map((line, index) => (
                      <div key={index} className="mb-1">{index + 1}</div>
                    ))}
                  </div>
                  <textarea className="block w-full h-20 px-8 py-2 resize-none" id="traduccion" value={result} readOnly placeholder="Resultado" />
                </div>
              </>
            )}
          </section>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow-md p-8 mt-6 mb-2 self-end mx-8">
        <h2 className="text-2xl font-bold mb-4 text-lime-900">Consola</h2>
        <textarea
          className="block w-full px-8 py-2 resize-none border border-lime-300 text-red-500" // Estilos de color rojo
          id="consola"
          rows="8"
          // Mostrar mensajes de consola
          style={{ height: 'auto', minHeight: '80px' }}
        />
      </section>
    </main>
  
  );
};

export default Page;
