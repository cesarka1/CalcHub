import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import Card from "../components/Card";

function Fundamentos() {
  return (
    <section id="fundamentos" className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-blue-700">
        🎯 Fundamentos de Limites
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Definição Matemática"
          content="Limite representa o comportamento de uma função quando x se aproxima
        de um valor específico."
        >
          <div className="mt-4 bg-blue-50 p-3 rounded">
            <BlockMath  math="\lim_{x \to a} f(x) = L" />
          </div>
        </Card>
        <Card title="Notação">
          <ul className="space-y-3">
            <li className="tooltip">
              → Aproximação
              <span className="tooltiptext">
                Indica a direção de convergência
              </span>
            </li>
            <li className="tooltip">
              lim Limite
              <span className="tooltiptext">
                Representa o valor que a função se aproxima
              </span>
            </li>
            <li className="tooltip">
              ∞ Infinito
              <span className="tooltiptext">
                Representa crescimento ou decrescimento sem fim
              </span>
            </li>
          </ul>
        </Card>
        <Card
          title=" 🧠 Dica Mental"
          content="  Limite é como chegar perto sem necessariamente tocar. É a viagem,
          não o destino final!"
        ></Card>
      </div>
    </section>
  );
}

export default Fundamentos;
