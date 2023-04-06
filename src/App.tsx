import { useEffect, useLayoutEffect, useState } from "react";
import img1 from "./assets/1.png";
import img4 from "./assets/4.png";
import img11 from "./assets/11.png";
import img12 from "./assets/12.png";
import img13 from "./assets/13.png";
import img14 from "./assets/14.png";
import img15 from "./assets/15.png";
import img16 from "./assets/16.png";
import img17 from "./assets/17.png";
import "./App.css";

function App() {
  const [introPage, setIntroPage] = useState(0);
  const [wasSeenIntro, setWasSeenIntro] = useState(false);
  const [ovosEncontradosCod, setOvosEncontradosCod] = useState<string[]>([]);

  const posImg = [
    [0, 0],
    [-46, 0],
    [-94, 0],
    [0, -62],
    [-46, -62],
    [-94, -62],
  ];

  const listaOvos = [
    { dica: "Cabeça de planta.", cod: "KJ" },
    { dica: "Cabeça de planta.", cod: "KL" },
  ];

  useLayoutEffect(() => {
    setWasSeenIntro(
      JSON.parse(localStorage.getItem("wasSeenIntro") ?? "false")
    );
  }, []);
  return (
    <div className="body">
      <div className="container">
        <div className="backview">
          <div
            className="intro"
            style={{
              marginTop: wasSeenIntro ? "-100vh" : 0,
            }}
          >
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
            <div className="page">
              <span></span>
              <div className="coeinha">
                <img src={img14} alt="" className="ears" />
                <img src={img13} alt="" className="bebe" />
              </div>
              <div className="page_footer">
                <p>Animada?</p>
                <button
                  className="next"
                  onClick={() => {
                    localStorage.setItem("wasSeenIntro", "true");
                    setWasSeenIntro(true);
                  }}
                >
                  COMEÇAR
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="ovos_perdidos">
              {listaOvos.map((ovoPerdido, i) => (
                <div
                  key={ovoPerdido.cod}
                  className="item_ovo"
                  onClick={() => prompt("Codigo de validação:")}
                >
                  <div
                    className="icone_ovo"
                    style={{
                      backgroundPosition: `${posImg[i % 6][0]}px ${
                        posImg[i % 6][1]
                      }px`,
                    }}
                  />
                  <p>{ovoPerdido.dica}</p>
                </div>
              ))}
              <div
                className="item_ovo"
                onClick={() =>
                  alert("Encontre todos os ovos para liberar a pista.")
                }
              >
                <img src={img17} className="icone_key" />
                <p>
                  {listaOvos.every((ovo) =>
                    ovosEncontradosCod.includes(ovo.cod)
                  )
                    ? "Reflete sua beleza."
                    : "?????"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
