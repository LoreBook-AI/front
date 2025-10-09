import type { JSX } from "@emotion/react/jsx-runtime"
import type { Imagens } from "../../types/ListScroll"
import '../../steps/RaceStep.css'

function ImageDescription({img, alt}: Imagens): JSX.Element {

    return (
        <div className="image">
            <img src={img} alt={alt} />

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
    )
}

export default ImageDescription
