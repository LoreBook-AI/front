import type { JSX } from "@emotion/react/jsx-runtime"
import type { Imagens } from "../../types/ListScroll"
import '../../steps/RaceStep.css'

export interface ImageScrollProps {
    listaImagens: Imagens[],
    current: Imagens, 
    functionClick: (alt: string) => void,
}

function ImageScroll({listaImagens, current, functionClick}: ImageScrollProps): JSX.Element {


    return (
        <div className="all-races">
            <div className='scroll'>
                {listaImagens.map(item => (
                    <div className={`item ${current.alt === item.alt ? 'selecionada' : ''}`}>
                        <img src={item.img} alt={item.alt} onClick={() => functionClick(item.alt)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageScroll
