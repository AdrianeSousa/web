import { useState } from "react";
import "../styles/BhaskaraForm.css";

const BhaskaraForm = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [resultadoX1, setResultadoX1] = useState();
  const [resultadoX2, setResultadoX2] = useState();
  const [erro, setErro] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setResultadoX1("");
    setResultadoX2("");
    if (!a || !b || !c) {
      setErro("Informe todos os coeficientes!");
    } else {
      let delta = b ** 2 - 4 * a * c;
      console.log(b);
      if (!(Math.sign(delta) === -1 || Math.sign(delta) === -0)) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        setResultadoX1(x1);
        setResultadoX2(x2);
      } else {
        setErro("não existem raízes reais pois o delta é negativo");
      }
    }
  };
  return (
    <div>
      <h2>Calculadora de Bhaskara</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Coeficiente A:
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Coeficiente B:
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Coeficiente C:
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
            ></input>
          </label>
        </div>
        <button type="submit">Calcular</button>
      </form>
      <div>
        <p>Raiz 1: {resultadoX1} </p>
        <p>Raiz 2: {resultadoX2} </p>
        <p className="erro">Erro: {erro} </p>
      </div>
    </div>
  );
};

export default BhaskaraForm;
