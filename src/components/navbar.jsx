/* eslint-disable react/prop-types */
function NavBar({ setPage }) {
    return (
      <nav className="bg-blue-200 rounded-lg my-8 p-4 shadow-md">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => setPage("fundamentos")}
              className="text-blue-800 hover:text-blue-600 font-bold"
            >
              🎯 Fundamentos
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("taxonomia")}
              className="text-blue-800 hover:text-blue-600 font-bold"
            >
              📊 Taxonomia
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("tecnicas")}
              className="text-blue-800 hover:text-blue-600 font-bold"
            >
              🛠 Técnicas
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("exemplos")}
              className="text-blue-800 hover:text-blue-600 font-bold"
            >
              📝 Exemplos
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  