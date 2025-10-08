import elven from '../../../assets/elven_warrior.png'
import './RaceStep.css'

export default function RaceStep() {
  return (
    <>
      <div className="component">
        <div className="image">
          <img src={elven} alt="" />
        </div>
        <div className="description">
          <div className="race-info">
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
        <div className="scroll">
          <h4>Hello worldie</h4>
        </div>
      </div>
    </>
  )
}
