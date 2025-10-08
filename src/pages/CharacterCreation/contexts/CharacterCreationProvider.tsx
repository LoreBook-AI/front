import { useState } from 'react'
import type { CharacterFormData } from '../types/CharacterFormData'
import { CharacterCreationContext } from './CharacterCreationContext'

export function CharacterCreationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<CharacterFormData>({
    race: null,
    subrace: null,
    class: null,
    background: null,
  })

  return (
    <CharacterCreationContext.Provider
      value={{ step, setStep, formData, setFormData }}
    >
      {children}
    </CharacterCreationContext.Provider>
  )
}
