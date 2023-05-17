import React from "react";

function Solicitar() {
  return (
    <div className="h-full items-center flex justify-center w-full">
      <form class="w-2/4 ">
        <div className="mb-16 text-center font-sans font-semibold text-gray-500">GERAR SOLICITAÇÃO</div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold text-start  ml-11  mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Obra
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class=" placeholder-gray-500 placeholder-opacity-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
              placeholder="ASFALTA MANAUS"
              id="inline-full-name"
              type="text"
            ></input>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold text-start ml-11 mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Produto
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="placeholder-gray-500 placeholder-opacity-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
              placeholder="MASSA ASFALTICA"
              id="inline-full-name"
              type="text"
            ></input>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class=" block text-gray-500 font-bold text-start ml-11 mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Quantidade
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="placeholder-gray-500 placeholder-opacity-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
              placeholder="QUANTIDADE EM TONELADAS"
              id="inline-full-name"
              type="number"
            ></input>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold text-start ml-11 mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Destino
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="placeholder-gray-500 placeholder-opacity-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
              placeholder="AV. CONSTANTINO NERY"
              id="inline-full-name"
              type="text"
            ></input>
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold text-start ml-11 mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Horario
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="placeholder-gray-500 placeholder-opacity-50 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
              id="inline-full-name"
              type="time"
            ></input>
          </div>
        </div>

        <div class="md:flex md:items-center mt-10">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-sky-700 hover:bg-sky-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Solicitar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Solicitar;
