import api, { setApiAccessToken } from './api'

export const loginWithGoogle = async (
  googleToken: string,
  clientId: string | undefined
) => {
  const res = await api.post('/auth/google', {
    credential: googleToken,
    clientId,
  })
  setApiAccessToken(res.data.accessToken)
  return res.data
}
