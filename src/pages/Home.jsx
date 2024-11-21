import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      <header className="text-center py-12 bg-white shadow-lg rounded-b-xl">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          🧮 Resumo Visual de Cálculo
        </h1>
        <p className="text-2xl text-gray-600">
          Explore Limites e Continuidade com Clareza
        </p>
      </header>
      <Navbar />
      <main className="bg-white p-6 rounded-xl shadow-lg">
        <p className="text-center text-gray-600">
          Selecione uma seção no menu acima para começar a explorar o conteúdo!
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
