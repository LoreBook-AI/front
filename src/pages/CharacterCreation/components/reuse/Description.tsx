import type { JSX } from '@emotion/react/jsx-runtime'
import '../../steps/RaceStep.css'
import type { DescriptionProps } from '../../types/ListScroll'


function Description({ description }: DescriptionProps): JSX.Element {
    return (
        <div className="description">
            <div className="race-info">
                <p className="race-atributes" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }}></p>
            </div>

            <div className="race-name">
                Selected Race:
                <br />
                <p className="selectec-race">Elf</p>
            </div>
        </div>
    )
}

export default Description
