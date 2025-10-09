import elven from '../../../assets/elven_warrior.png'
import './RaceStep.css'
import human from '../../../assets/human_ranger.png'
import dwarf from '../../../assets/dwarf_paladin.png'
import { useState } from 'react'

// interface Imagens {
//   alt: string,
//   img: string
// }

export default function RaceStep() {

  const [listaImagens, setListaImagens] = useState([
    {
      alt: "humano",
      img: human,
    },
    {
      alt: "dwarf",
      img: dwarf
    },
    {
      alt: "elf",
      img: elven
    },
    {
      alt: "humano",
      img: human,
    },
    {
      alt: "dwarf",
      img: dwarf
    },
    {
      alt: "elf",
      img: elven
    },
    {
      alt: "humano",
      img: human,
    },
    {
      alt: "dwarf",
      img: dwarf
    },
    {
      alt: "elf",
      img: elven
    },

  ]);

  const [currentRace, setCurrentRace] = useState({
    alt: '',
    img: ''
  })

  // const sincronizaImagem = async (alt) => {
  //   const filtra = listaImagens.filter(item => item.alt === alt)
  //   setCurrentRace(filtra)
  // }

  return (
    <>

      <div className="component">

        <div className="image">
          <img src={elven} alt="elfo" />

          <div className="description-race">
            <p className="race-description">
              Com a sua graça sobrenatural e seus traços finos, os elfos parecem
              assustadoramente belos para os humanos e os membros de muitas
              outras raças. Elfos podem viver bem mais de 700 anos, isso dá a
              eles uma ampla perspectiva sobre eventos que possam perturbar
              profundamente raças que vivem uma vida mais curta. Eles são
              normalmente mais divertidos do que animados, e provavelmente mais
              curiosos do que gananciosos. A maioria dos elfos habita pequenas
              aldeias florestais escondidas entre as árvores.{' '}
            </p>
          </div>
        </div>

        <div className="description">
          <div className="race-info">

            <p className="race-atributes">
              <b>Aumento de Habilidade:</b> +2 Destreza.
              <br />
              <b>Idade:</b> Adulto aos 100 anos, vive até 750.
              <br />
              <b>Tendência:</b> Caótico e bondoso; drow tendem ao mal.
              <br />
              <b>Tamanho:</b> Médio (1,50-1,80 m, delgado).
              <br />
              <b>Deslocamento:</b> 9 m.
              <br />
              <b>Visão no Escuro:</b> 18 m, tons de cinza.
              <br />
              <b>Sentidos Aguçados:</b> Proficiência em Percepção.
              <br />
              <b>Ancestral Feérico:</b> Vantagem contra encantamentos e imune a
              sono mágico.
              <br />
              <b>Transe:</b> Medita 4 h (equivale a 8 h de sono).
              <br />
              <b>Idiomas:</b> Comum e Élfico.
              <br />
              <b>Sub-raças:</b> Alto elfo, Elfo da floresta, Drow.
            </p>
          </div>

          <div className="race-name">
            Selected Race:
            <br />
            <p className="selectec-race">Elf</p>
          </div>
        </div>



        <div className="all-races">
          <h4>Races</h4>

          <div className='scroll'>
            {listaImagens.map(item => (
              <div className='item'>
                <img src={item.img} alt={item.alt} 
                // onClick={sincronizaImagem(item.alt)} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
