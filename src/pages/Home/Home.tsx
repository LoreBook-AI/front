import { Outlet } from 'react-router-dom'
import './Home.css'
import logo from '/logo.png'

function Home() {
  return (
    <>
      <div className="topbar">
        <div className="list-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img src={logo} className="logo lorebook" alt="Lorebook logo" />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Home
