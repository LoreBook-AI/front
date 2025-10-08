import type { ReactNode } from 'react'
import { useState } from 'react'
import RaceStep from '../steps/RaceStep'
import './Stepper.css'

type StepComponent = {
  id: string
  component: ReactNode
}

type Step = {
  id: string
  components: StepComponent[]
}

type StepItem =
  | (Step & { isMain: true; stepIndex: number })
  | (StepComponent & { isMain: false; stepIndex: number; subIndex: number })

const steps: Step[] = [
  {
    id: 'race',
    components: [
      { id: 'race', component: <RaceStep /> },
      { id: 'subrace', component: 'oii2' },
      { id: 'race_options', component: 'oii3' },
    ],
  },
  {
    id: 'background',
    components: [
      { id: 'background', component: 'oii4' },
      { id: 'background_options', component: 'oii5' },
    ],
  },
  {
    id: 'class',
    components: [
      { id: 'class', component: 'oii6' },
      { id: 'subclass', component: 'oii7' },
      { id: 'subclass_options', component: 'oii8' },
    ],
  },
  {
    id: 'stats',
    components: [{ id: 'stats', component: 'oii9' }],
  },
  {
    id: 'skills',
    components: [{ id: 'skills', component: 'oii10' }],
  },
]

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState(0)

  function proceed() {
    const step = steps[currentStep]
    if (currentSubStep < step.components.length - 1) {
      setCurrentSubStep((s) => s + 1)
    } else if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1)
      setCurrentSubStep(0)
    }
  }

  function goBack() {
    if (currentSubStep > 0) {
      setCurrentSubStep((s) => s - 1)
    } else if (currentStep > 0) {
      const prevStep = steps[currentStep - 1]
      setCurrentStep((s) => s - 1)
      setCurrentSubStep(prevStep.components.length - 1)
    }
  }

  const stepItems: StepItem[] = steps.flatMap((step, stepIndex) => {
    const allSteps: StepItem[] = [{ ...step, isMain: true, stepIndex }]
    if (stepIndex === currentStep) {
      const subs = step.components.slice(1).map((sub, subIndex) => ({
        ...sub,
        isMain: false as const,
        stepIndex,
        subIndex,
      }))
      allSteps.push(...subs)
    }
    return allSteps
  })

  return (
    <div className="panel">
      <div className="stepper">
        {stepItems.map((item) => {
          const label = item.isMain ? item.id : item.id.replace('_', ' ')
          const number = item.isMain
            ? item.stepIndex + 1
            : `${item.stepIndex + 1}.${item.subIndex + 1}`

          const isActive = item.isMain
            ? item.stepIndex === currentStep
            : item.subIndex + 1 === currentSubStep

          return (
            <div
              key={item.id}
              className={`step-box ${item.isMain ? '' : 'substep'} ${
                isActive ? 'active' : ''
              }`}
            >
              <div className="circle-with-border">{number}</div>
              {label}
            </div>
          )
        })}
      </div>

      <div className="step">
        {steps[currentStep].components[currentSubStep].component}
      </div>
      <div className="step-buttons">
        <button onClick={goBack}>Go back</button>
        <button onClick={proceed}>Proceed</button>
      </div>
    </div>
  )
}
