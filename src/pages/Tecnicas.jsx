function Tecnicas() {
    return (
      <section id="tecnicas" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-blue-700">
          🛠 Técnicas de Resolução
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Métodos de Cálculo
            </h3>
            <ul className="space-y-3 bg-blue-50 p-3 rounded">
              <li>✅ Substituição direta: Quando a função é contínua.</li>
              <li>✅ Fatoração: Elimina indeterminações como 0/0.</li>
              <li>✅ Racionalização: Útil para expressões com raízes.</li>
              <li>✅ Regra de L'Hôpital: Resolve indeterminações de forma precisa.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Tecnicas;
  