import { NavLink, Outlet } from 'react-router'
import './EgoffPage.css'

export default function EgoffPage() {
  return (
    <section className="egoff-page">
      <div className="egoff-sticky">
        <nav className="egoff-tabs" aria-label="영화제 소개">
          <NavLink to="/egoff" end>
            6th egoff
          </NavLink>
          <NavLink to="/egoff/identity">
            아이덴티티
          </NavLink>
          <NavLink to="/egoff/team">
            만드는 사람들
          </NavLink>
          <NavLink to="/archive">
            역대 영화제
          </NavLink>
        </nav>
      </div>

      <div className="egoff-body">
        <Outlet />
      </div>
    </section>
  )
}