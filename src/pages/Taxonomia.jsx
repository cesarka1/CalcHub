import Card from "../components/Card";

function Taxonomia() {
  return (
   
      <div className="container mx-auto px-4">
        <header className="text-center py-12 bg-white shadow-lg rounded-b-xl">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            📊 Taxonomia dos Limites
          </h1>
          <p className="text-2xl text-gray-600">
            Entenda os Diferentes Tipos de Limites
          </p>
        </header>

        <section id="taxonomia" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-blue-700">
            🗂 Explore os Tipos de Limites
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <Card
              title="Limites Finitos"
              content="Limites que se aproximam de valores definidos em pontos
                específicos."
            >
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
              >
                Explorar
              </button>
            </Card>

            <Card
              title="Limites Infinitos"
              content="Limites onde o valor cresce ou decresce indefinidamente."
            >
              <button
                
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
              >
                Explorar
              </button>
            </Card>

            <Card
              title="Limites Trigonométricos"
              content="Limites envolvendo funções trigonométricas, como seno e cosseno."
            >
              <button
                
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
              >
                Explorar
              </button>
            </Card>

          </div>
        </section>
      </div>

  );
}

export default Taxonomia;
