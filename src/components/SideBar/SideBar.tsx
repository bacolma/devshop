import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getMenu } from "../../services/menuService";
import type { MenuItem } from "../../types/menu.types";

export function SideBar() {
  const [menu, setMenu] = useState<MenuItem[]>([]); // ✅ menu definido
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md transition ${
      isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-700"
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
    <aside className="w-64 border-r border-slate-800 p-4">
      <nav className="space-y-3">
        {menu.map((item) => (
          <div key={item.label}>
            {/* ✅ MENÚ PADRE */}
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  className="w-full text-left px-3 py-2 text-slate-300 hover:bg-slate-700 rounded-md flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  <span>{openMenu === item.label ? "▲" : "▼"}</span>
                </button>

                {openMenu === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.route}
                        to={child.route!}
                        className={linkClass}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* ✅ ITEM SIMPLE */
              <NavLink to={item.route!} className={linkClass}>
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
