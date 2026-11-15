import { useState } from "react";
import { Link, NavLink } from "react-router";
import "./BottomNav.css";

const menus = [
  { to: "/egoff", label: "egoff" },

  { to: "/shop", label: "상점" },
  { to: "/board", label: "게시판" },
  { to: "/calendar", label: "달력" },
  { to: "/faq", label: "FAQ" },
  { to: "/support", label: "후원하기" },
];

export default function BottomNav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="bottom-bar">
      <button
        type="button"
        className="bottom-menu-button"
        aria-expanded={isOpen}
        aria-controls="bottom-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "닫기" : "메뉴"}
      </button>

      <nav
        id="bottom-navigation"
        className={`bottom-navigation ${isOpen ? "is-open" : ""}`}
        data-mobile-menu
        data-open={isOpen}
        aria-label="주 메뉴"
      >
        {menus.map((menu) => (
          <NavLink key={menu.to} to={menu.to} onClick={closeMenu}>
            {menu.label}
          </NavLink>
        ))}
      </nav>

      <Link className="bottom-home" to="/" onClick={closeMenu}>
        EGOFF
      </Link>
    </div>
  );
}
