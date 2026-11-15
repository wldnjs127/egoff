import { NavLink } from 'react-router'
import './ArchiveFilmsPage.css'

export default function ArchiveFilmsPage() {
  return (
    <section className="archive-films-page">
      <nav className="archive-menu" aria-label="아카이브">
        <NavLink to="/archive" end>
          역대 영화제
        </NavLink>
        <NavLink to="/archive/films">
          역대 상영작
        </NavLink>
      </nav>

      <h1>역대 상영작</h1>

      <div className="archive-filters" aria-label="영화제 회차">
        <button type="button" aria-pressed="true">
          전체
        </button>
      </div>

      <p className="archive-empty">
        상영작 정보를 준비하고 있습니다.
      </p>
    </section>
  )
}