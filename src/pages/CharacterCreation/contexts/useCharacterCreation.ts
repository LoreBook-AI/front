import { useContext } from 'react'
import { CharacterCreationContext } from './CharacterCreationContext'

export function useCharacterCreation() {
  const context = useContext(CharacterCreationContext)
  if (!context) {
    throw new Error(
      'useCharacterCreation must be used within a CharacterCreationProvider'
    )
  }
  return context
}
