import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getMenu } from "../../services/menuService";
import type { MenuItem } from "../../types/menu.types";

export function SideBar() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md transition ${
      isActive
        ? "bg-slate-800 text-white"
        : "text-slate-300 hover:bg-slate-700"
    }`;

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const result = await getMenu();
        setMenu(result);
      } catch (error) {
        console.error("Error cargando menú:", error);
      }
    };

    loadMenu();
  }, []);

  return (
    <>
      {/* OVERLAY MOBILE */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-64
          bg-slate-900 border-r border-slate-800 p-4
          transform transition-transform duration-300
          md:static md:translate-x-0
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* BOTÓN CERRAR (solo mobile) */}
        <button
          className="md:hidden mb-4 text-slate-400"
          onClick={() => setIsMobileOpen(false)}
        >
          ✕ Cerrar
        </button>

        <nav className="space-y-3">
          {menu.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  {/* MENÚ PADRE */}
                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === item.label ? null : item.label
                      )
                    }
                    className="w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 rounded-md flex justify-between items-center"
                  >
                    <span>{item.label}</span>
                    <span>{openMenu === item.label ? "▲" : "▼"}</span>
                  </button>

                  {/* SUBMENÚ */}
                  {openMenu === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.route}
                          to={child.route!}
                          onClick={() => setIsMobileOpen(false)}
                          className={linkClass}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* ITEM SIMPLE */
                <NavLink
                  to={item.route!}
                  onClick={() => setIsMobileOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* BOTÓN HAMBURGUESA (normalmente va en el Header) */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-slate-800 text-white rounded"
        onClick={() => setIsMobileOpen(true)}
      >
        ☰
      </button>
    </>
  );
}