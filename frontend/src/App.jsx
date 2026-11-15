import { Route, Routes, useLocation } from "react-router";
import TeamPage from './pages/TeamPage'
import UniversePage from "./pages/UniversePage";
import ArchiveFilmsPage from "./pages/ArchiveFilmsPage";
import SiteHeader from "./components/SiteHeader.jsx";
import SixthEgoffPage from "./pages/SixthEgoffPage.jsx";
import EgoffPage from "./pages/EgoffPage.jsx";
import BottomNav from "./components/BottomNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import BoardPage from "./pages/BoardPage.jsx";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <SiteHeader />}
      <main className={isHome ? "home-content" : "page-content"}>
        {!isHome && (
            <div className="page-earth-background" aria-hidden="true">
              <img src="/images/earth.png" alt="" />
            </div>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/egoff" element={<EgoffPage />}>
            <Route index element={<SixthEgoffPage />} />
            <Route path="identity" element={<UniversePage />} />
            <Route path="team" element={<TeamPage />} />
          </Route>
          <Route path="/archive" element={<h1>역대 영화제</h1>} />
          <Route path="/archive/films" element={<ArchiveFilmsPage />} />
          <Route path="/shop" element={<h1>상점</h1>} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/calendar" element={<h1>달력</h1>} />
          <Route path="/faq" element={<h1>자주 묻는 질문</h1>} />
          <Route path="/support" element={<h1>후원</h1>} />
          <Route path="*" element={<h1>페이지를 찾을 수 없습니다.</h1>} />
        </Routes>
      </main>

      <BottomNav key={pathname} />
    </>
  );
}
