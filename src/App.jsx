import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fundamentos from "./pages/Fundamentos";
import Tecnicas from "./pages/Tecnicas";
import Taxonomia from "./pages/Taxonomia";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "fundamentos":
        return <Fundamentos />;
      case "tecnicas":
        return <Tecnicas />;
      case "taxonomia":
        return <Taxonomia />;
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold text-center">
              Bem-vindo à CalcHub
            </h1>
            <p className="text-center">
              Selecione uma seção no menu acima para explorar.
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
