"use client";
import React, { useState } from "react";
import { analizar } from "@/module/generador";
import { translate } from "@/module/generatorT";
import CodeMirror from "@uiw/react-codemirror";
import { quietlight } from "@uiw/codemirror-theme-quietlight";

const Page = () => {
  const [expressions, setExpressions] = useState("");
  const [result, setResult] = useState("");

  const inputChange = (e) => {
    const input = e.target.value;

    setExpressions(input);
  };
  const changeText = (e)=>{
    e.preventDefault();
    const read = new FileReader();
    read.readAsText(e.target.files[0]);
    read.onload = (e) =>{
      const file =e.target.result;
      setExpressions(file)
    }
  }

  const analizador = () => {
    const inputWithOutComments = expressions.replace(
      /(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g,
      ""
    );
    const inputLines = inputWithOutComments.split("\n"); // Dividir el input en líneas
    const validLines = inputLines.filter((line) => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join("\n"); // Unir las líneas limpias nuevamente
    const calculadedResult = analizar(cleanInput);
    };
  const clearArea = () => {
    setExpressions("");
    setResult("");
  };

  const traductor=()=>{
    const inputWithOutComments = expressions.replace(
      /(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g,
      ""
    );
    const inputLines = inputWithOutComments.split("\n"); // Dividir el input en líneas
    const validLines = inputLines.filter((line) => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join("\n"); // Unir las líneas limpias nuevamente
    const calculadedResult = translate(cleanInput);
  };
  return (
    <main className="justify-between items-center max-h-screen bg-lime-100">
      <div className="flex flex-col">
        <img src="./logo-matcha.png" className="mt-2 mb-8" />
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-8">
            <section className="bg-white rounded-lg shadow-md p-8 mb-8 m max-w-96 max-h-full">
              <h2 className="text-2xl font-bold mb-4 text-lime-900">
                Ingresa tu código
              </h2>
              <button
                    className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700" id="load-button"
                    onClick={'analizador'}>
                    <input id="carga" type="file" accept=".txt, .c" onChange={e => changeText(e)} />
                </button>
              <p className="text-lg text-center text-lime-700 mb-4">
                Codifica aquí
              </p>
              <div className="">
                <div class="codemirror">
                  <CodeMirror
                    value={expressions}
                    theme={quietlight}
                    height="8rem"
                    width="100%"
                    options={{
                      lineNumbers: true,
                      tabSize: 6,
                    }}
                    style={{
                      borderRadius: "0.375rem",
                      width: "100%",
                      fontSize: "1rem",
                      fontWeight: "400",
                      
                    }}
                    onChange={(e) => setExpressions(e)}
                    className=""
                  />
                </div>
                
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700"
                    onClick={traductor}//Cambar para que traduzca
                  >
                    Traducir
                  </button>
                  <button
                    className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700"
                    onClick={clearArea}
                  >
                    Borrar código
                  </button>
                </div>
              </div>
            </section>
    
            <section className="relative bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-lime-900">
                Traducción
              </h2>
              <p className="text-lg text-center text-lime-700 mb-4">
                Tu nuevo código es:
              </p>
              <div className="">
                <div class="codemirror">
                  <CodeMirror
                    value={result}
                    theme={quietlight}
                    height="8rem"
                    width="100%"
                    options={{
                      lineNumbers: true,
                      tabSize: 6,
                    }}
                    style={{
                      borderRadius: "0.375rem",
                      width: "100%",
                      fontSize: "1rem",
                      fontWeight: "400",
                      
                    }}
                    onChange={(e) => setResult(e)}
                    className=""
                  />
                </div>
                
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-lime-900 text-white rounded-md px-6 py-3 shadow-lg hover:bg-lime-700"
                    onClick={analizador}
                  >
                    Compilar
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      
    <div>
      <section className="bg-white rounded-lg shadow-md p-8 mt-4 mb-2 self-end mx-8">
          <h2 className="text-2xl font-bold mb-4 text-lime-900">Consola</h2>
          <textarea
            className="block w-full px-8 py-2 resize-none border border-lime-300 text-lime-700" // Estilos de color rojo
            id="consola"
            rows="8"
            // Mostrar mensajes de consola
            style={{ height: "auto", minHeight: "80px" }}
          />
        </section>
    </div>
      
     </div>
  </main>
  
  );
};

export default Page;
