import type { CredentialResponse } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/useAuth'
import { loginWithGoogle } from '../../../services/authService'

const useHandleLogin = () => {
  const { setAccessToken } = useAuth()
  const navigate = useNavigate()

  const handleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) return
    try {
      const data = await loginWithGoogle(response.credential, response.clientId)

      setAccessToken(data.AccessToken)

      navigate('/', { replace: true })
    } catch (err) {
      console.error('Erro no login:', err)
    }
  }

  return { handleSuccess, handleError: () => console.log('Erro no login') }
}

export default useHandleLogin
