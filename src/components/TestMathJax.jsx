import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function TestMathJax() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(\\lim_{x \\to \\infty} f(x) = L\\)`}</MathJax>
    </MathJaxContext>
  );
}
