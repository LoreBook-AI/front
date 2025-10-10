import { useState } from 'react'
import dragonborn from '../../../assets/dragonborn_wizard.png'
import dwarf from '../../../assets/dwarf_paladin.png'
import elven from '../../../assets/elven_warrior.png'
import gnome from '../../../assets/gnome_druid.png'
import half_elf from '../../../assets/half_elf_cleric.png'
import halfling from '../../../assets/halfling_bard.png'
import human from '../../../assets/human_ranger.png'
import orc from '../../../assets/orc_barbarian.png'
import tiefling from '../../../assets/tiefling_warlock.png'
import Description from '../components/reuse/Description'
import ImageDescription from '../components/reuse/ImageDescription'
import ImageScroll from '../components/reuse/ImageScroll'
import type { Imagens } from '../types/ListScroll'
import './RaceStep.css'

export default function RaceStep() {
  const [listaImagens, setListaImagens] = useState<Imagens[]>([
    {
      alt: 'humano',
      img: human,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'dwarf',
      img: dwarf,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'elf',
      img: elven,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'gnome',
      img: gnome,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'dragonborn',
      img: dragonborn,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'half_elf',
      img: half_elf,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'halfling',
      img: halfling,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'orc',
      img: orc,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
    {
      alt: 'tiefling',
      img: tiefling,
      description:
        'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
    },
  ])

  const [currentRace, setCurrentRace] = useState<Imagens>({
    alt: 'humano',
    img: human,
    description:
      'Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow.',
  })

  function sincronizaImagem(alt: string): void {
    const filtra = listaImagens.filter((item) => item.alt === alt)
    setCurrentRace(filtra[0])
  }

  return (
    <>
      <div className="component">
        <ImageDescription img={currentRace.img} alt={currentRace.alt} />

        <Description description={currentRace.description ?? ''} />

        <ImageScroll
          listaImagens={listaImagens}
          current={currentRace}
          functionClick={sincronizaImagem}
        />
      </div>
    </>
  )
}
