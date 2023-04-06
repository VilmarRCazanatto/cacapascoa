import { useState } from "react";
import img1 from "./assets/1.png";
import img4 from "./assets/4.png";
import img11 from "./assets/11.png";
import img12 from "./assets/12.png";
import "./App.css";

function App() {
  const [introPage, setIntroPage] = useState(0);

  return (
    <div className="body">
      <div className="container">
        <div className="backview">
          <div className="intro">
            <div
              className="page"
              style={{ marginLeft: 8 + introPage * -100 + "vw" }}
            >
              <h2 className="">Caça Pascoa</h2>
              <img src={img1} alt="" />
              <div className="page_footer">
                <p>
                  Bem vinda a caçada dos ovos de pascoa. Só pra te divertir um
                  pouquinho.
                </p>
                <p>E pq eu te amo. ❤️❤️❤️</p>
                <p>Vamos começar?</p>
                <button
                  className="next"
                  onClick={() => setIntroPage(introPage + 1)}
                >
                  Começar
                </button>
              </div>
            </div>
            <div className="page">
              <span></span>
              <img src={img4} />
              <div className="page_footer">
                <p>
                  Alguns ovinho de pascoa foram escondidos pela casa. Nos mais
                  variados pequenos lugares.
                </p>
                <button
                  className="prev"
                  onClick={() => setIntroPage(introPage - 1)}
                >
                  Voltar
                </button>
                <button
                  className="next"
                  onClick={() => setIntroPage(introPage + 1)}
                >
                  Proximo
                </button>
              </div>
            </div>
            <div className="page">
              <span></span>
              <img src={img11} />
              <div className="page_footer">
                <p>
                  Foram deixadas algumas dicas para você encontra-los. Algumas
                  meio obvias outras nem tanto.
                </p>
                <p>
                  Caso haja dificuldade você pode usar 3 dicas para liberar
                  novas pistas.
                </p>
                <button
                  className="prev"
                  onClick={() => setIntroPage(introPage - 1)}
                >
                  Voltar
                </button>
                <button
                  className="next"
                  onClick={() => setIntroPage(introPage + 1)}
                >
                  Proximo
                </button>
              </div>
            </div>
            <div className="page">
              <span></span>
              <img src={img12} />
              <div className="page_footer">
                <p>
                  Ao encontrar o ovinho, confirme que encontrou com o codigo de
                  2 letras encontrados no ovinho.
                </p>
                <p>
                  Caso encontre um ovinho sem dica vc pode confirme numa das
                  dicas ou guarde para as que sobrarem no final.
                </p>
                <button
                  className="prev"
                  onClick={() => setIntroPage(introPage - 1)}
                >
                  Voltar
                </button>
                <button
                  className="next"
                  onClick={() => setIntroPage(introPage + 1)}
                >
                  Proximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
