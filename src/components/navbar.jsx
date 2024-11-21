function NavBar(){
    return (
        <nav className="bg-blue-200 rounded-lg my-8 p-4 shadow-md">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li><a href="#fundamentos" className="text-blue-800 hover:text-blue-600 font-bold">🎯 Fundamentos</a></li>
          <li><a href="#taxonomia" className="text-blue-800 hover:text-blue-600 font-bold">📊 Taxonomia</a></li>
          <li><a href="#tecnicas" className="text-blue-800 hover:text-blue-600 font-bold">🛠 Técnicas</a></li>
          <li><a href="#exemplos" className="text-blue-800 hover:text-blue-600 font-bold">📝 Exemplos</a></li>
        </ul>
      </nav>  
    )
};

export default NavBar;