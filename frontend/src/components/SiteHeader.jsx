import { Link } from 'react-router'
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link
        className="header-title-link"
        to="/"
        style={{
          display: 'block',
          width: 'max-content',
          maxWidth: 'none',
          flexShrink: 0,
          whiteSpace: 'pre',
          writingMode: 'horizontal-tb',
          textDecoration: 'none',
        }}
      >
        지 구 를 떠 도 는 유 령 영 화 제
      </Link>
    </header>
  )
}