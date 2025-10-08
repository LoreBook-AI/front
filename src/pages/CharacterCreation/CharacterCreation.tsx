import './CharacterCreation.css'
import Stepper from './components/Stepper'
import StepSummary from './components/StepSummary'

export default function CharacterCreation() {
  return (
    <>
      <div className="parent">
        <div className="main">
          <Stepper />
        </div>
        <div className="summary">
          <StepSummary />
        </div>
      </div>
    </>
  )
}
