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
import imghelp from "./assets/help.png";
import "./App.css";

function App() {
  const [introPage, setIntroPage] = useState(0);
  const [wasSeenIntro, setWasSeenIntro] = useState(false);
  const [ovosEncontradosCod, setOvosEncontradosCod] = useState<string[]>([]);
  const [usadoDicas, setUsadoDicas] = useState<string[]>([]);
  const remainingDicas =
    3 - usadoDicas.length + Math.floor(ovosEncontradosCod.length / 4);

  const posImg = [
    [0, 0],
    [-46, 0],
    [-94, 0],
    [0, -62],
    [-46, -62],
    [-94, -62],
  ];

  const listaOvos = [
    {
      dica: ["Todas histórias são verdadeiras", "Cidade dos ossos"],
      cod: "IT",
    },
    { dica: ["Cabeça de planta", "Nixo"], cod: "JP" },
    { dica: ["Roupa com meu nome", "E bandeira do Brasil"], cod: "HE" },
    { dica: ["UFO", "Presente de outro planeta"], cod: "EG" },
    { dica: ["Caixa de animais voadores", "Livro"], cod: "GO" },
    { dica: ["Ar quente", "Frita"], cod: "UW" },
    { dica: ["Dinheiro pesado", "Pringles"], cod: "QK" },
    { dica: ["Say my name!", "Roupa cristal azul"], cod: "GU" },
    { dica: ["Pequeno bolo", "Forma"], cod: "OO" },
    { dica: ["Saco com bico", "Confeite"], cod: "ME" },
    { dica: ["Branco macio nasce numa planta", "Lata vermelha"], cod: "DU" },
    { dica: ["Inicio de nossa relação", "Croasonho"], cod: "CJ" },
  ];

  useLayoutEffect(() => {
    setWasSeenIntro(
      JSON.parse(localStorage.getItem("wasSeenIntro") ?? "false")
    );
    setUsadoDicas(JSON.parse(localStorage.getItem("usadoDicas") ?? "[]"));
    setOvosEncontradosCod(
      JSON.parse(localStorage.getItem("ovosEncontradosCod") ?? "[]")
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
          <div className="main_container">
            <div className="header">
              <div className="dicas_count">
                <span>Dicas</span>
                <div>
                  {remainingDicas}
                  <img src={imghelp} />
                </div>
              </div>
              <div className="ovos_counter">
                <div>
                  <span className="qtd_ovos_encontrados">
                    {ovosEncontradosCod.length}
                  </span>
                  <span>/{listaOvos.length}</span>
                </div>
                <div className="progress_bar">
                  <div
                    style={{
                      width: `${
                        (ovosEncontradosCod.length * 100) / listaOvos.length
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="ovos_perdidos">
              {listaOvos.map((ovoPerdido, i) => (
                <div
                  key={ovoPerdido.cod}
                  className="item_ovo"
                  onClick={() => {
                    if (ovosEncontradosCod.includes(ovoPerdido.cod)) {
                      alert("Ovo já encontrado");
                      return;
                    }
                    for (
                      let anwser = prompt("Codigo de validação:");
                      anwser !== null;
                      anwser = prompt("Codigo de validação:")
                    ) {
                      if (anwser.trim().toUpperCase() === ovoPerdido.cod) {
                        setOvosEncontradosCod([
                          ...ovosEncontradosCod,
                          ovoPerdido.cod,
                        ]);
                        localStorage.setItem(
                          "ovosEncontradosCod",
                          JSON.stringify([
                            ...ovosEncontradosCod,
                            ovoPerdido.cod,
                          ])
                        );
                        return;
                      } else alert("Codigo invalido");
                    }
                  }}
                >
                  {ovosEncontradosCod.includes(ovoPerdido.cod) ? (
                    <img src={img15} className="ovo_encontro_icone" />
                  ) : (
                    <div
                      className="icone_ovo"
                      style={{
                        backgroundPosition: `${posImg[i % 6][0]}px ${
                          posImg[i % 6][1]
                        }px`,
                      }}
                    />
                  )}
                  <p className="ove_dica">
                    {ovoPerdido.dica
                      .slice(0, usadoDicas.includes(ovoPerdido.cod) ? 2 : 1)
                      .map((dica, i) => (
                        <span key={i}>{dica}</span>
                      ))}
                  </p>
                  <div className="help_button">
                    {!usadoDicas.includes(ovoPerdido.cod) &&
                      !ovosEncontradosCod.includes(ovoPerdido.cod) && (
                        <img
                          src={imghelp}
                          alt=""
                          onClick={(ev) => {
                            ev.stopPropagation();
                            if (remainingDicas <= 0)
                              alert(
                                "Você não tem mais dicas. Ache alguns ovos para ganhar mais."
                              );
                            else {
                              setUsadoDicas([...usadoDicas, ovoPerdido.cod]);

                              localStorage.setItem(
                                "usadoDicas",
                                JSON.stringify([...usadoDicas, ovoPerdido.cod])
                              );
                            }
                          }}
                        />
                      )}
                  </div>
                </div>
              ))}
              <div
                className="item_ovo"
                onClick={() => {
                  if (
                    !listaOvos.every((ovo) =>
                      ovosEncontradosCod.includes(ovo.cod)
                    )
                  )
                    alert("Encontre todos os ovos para liberar a pista.");
                }}
              >
                <img src={img17} className="icone_key" />
                <p className="ove_dica">
                  {listaOvos.every((ovo) =>
                    ovosEncontradosCod.includes(ovo.cod)
                  )
                    ? "Reflete sua beleza minha gostosinha."
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
