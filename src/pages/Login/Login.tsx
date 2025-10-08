import { GoogleLogin } from '@react-oauth/google'
import logo from '../../assets/logo.png'
import useHandleLogin from './hooks/UseHandleLogin'
import './Login.css'

function Login() {
  const { handleError, handleSuccess } = useHandleLogin()
  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Lorebook logo" className="login-logo" />
        <div className="login-button">
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>
        <h2 className="login-title">Bem-vindo, aventureiro</h2>
        <p className="login-subtitle">Entre para continuar sua jornada</p>
      </div>
    </div>
  )
}

export default Login
