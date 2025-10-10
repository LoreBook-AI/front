import elven from '../../../assets/elven_warrior.png'
import './RaceStep.css'
import human from '../../../assets/human_ranger.png'
import dwarf from '../../../assets/dwarf_paladin.png'
import { useState } from 'react'
import type { Imagens } from '../types/ListScroll'
import ImageDescription from '../components/reuse/ImageDescription'
import ImageScroll from '../components/reuse/ImageScroll'
import Description from '../components/reuse/Description'

export default function SubraceStep() {

    const [listaImagens, setListaImagens] = useState<Imagens[]>([
        {
            alt: "humano",
            img: human,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "dwarf",
            img: dwarf, 
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "elf",
            img: elven, 
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "humano",
            img: human,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "dwarf",
            img: dwarf, 
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "elf",
            img: elven,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "humano",
            img: human,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "dwarf",
            img: dwarf,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },
        {
            alt: "elf",
            img: elven,
            description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
        },

    ]);

    const [currentSubrace, setCurrentSubrace] = useState<Imagens>({
        alt: "humano",
        img: human,
        description: "Aumento de Habilidade: +2 Destreza.\nIdade: Adulto aos 100 anos, vive até 750.\nTendência: Caótico e bondoso; drow tendem ao mal.\nTamanho: Médio (1,50-1,80 m, delgado).\nDeslocamento: 9 m.\nVisão no Escuro: 18 m, tons de cinza.\nSentidos Aguçados: Proficiência em Percepção.\nAncestral Feérico: Vantagem contra encantamentos e imune a sono mágico.\nTranse: Medita 4 h (equivale a 8 h de sono).\nIdiomas: Comum e Élfico.\nSub-raças: Alto elfo, Elfo da floresta, Drow."
    })

    function sincronizaImagem(alt: string): void {
        const filtra = listaImagens.filter(item => item.alt === alt)
        setCurrentSubrace(filtra[0])
    }

    return (
        <>

            <div className="component">

                <ImageDescription img={currentSubrace.img} alt={currentSubrace.alt} />

                <Description description={currentSubrace.description ?? ''} text={currentSubrace.alt} tipo='Subrace'/>

                <ImageScroll listaImagens={listaImagens} current={currentSubrace} functionClick={sincronizaImagem} />

            </div>
        </>
    )
}
