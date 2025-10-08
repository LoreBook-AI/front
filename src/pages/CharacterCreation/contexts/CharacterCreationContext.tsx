import { createContext } from 'react'
import type { CharacterFormData } from '../types/CharacterFormData'

export type CharacterCreationContextType = {
  step: number
  setStep: (step: number) => void
  formData: CharacterFormData
  setFormData: (data: CharacterFormData) => void
}

export const CharacterCreationContext = createContext<
  CharacterCreationContextType | undefined
>(undefined)
