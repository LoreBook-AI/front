import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterCreation from '../pages/CharacterCreation/CharacterCreation'
import HomeTeste from '../pages/Home/HomeTeste'
import Login from '../pages/Login/Login'
import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomeTeste />}>
            <Route path="characters">
              <Route path="create" element={<CharacterCreation />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
