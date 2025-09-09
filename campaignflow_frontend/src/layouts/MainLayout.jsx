import React, { useEffect, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * MainLayout
 * Application layout with header, collapsible sidebar, and content area.
 * Listens for a custom 'toggle-sidebar' event dispatched by Header to open/close on small screens.
 */
export default function MainLayout({ header, sidebar, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handler = () => setSidebarOpen((s) => !s);
    window.addEventListener('toggle-sidebar', handler);
    // Auto-collapse on first load for small screens
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
      setSidebarOpen(false);
    }
    return () => window.removeEventListener('toggle-sidebar', handler);
  }, []);

  return (
    <div className="layout">
      <header className="layout__header">
        {header}
      </header>
      <div className={`layout__body ${sidebarOpen ? 'with-sidebar' : 'sidebar-collapsed'}`}>
        <aside className={`layout__sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          {sidebar}
        </aside>
        <main className="layout__content">
          {children}
        </main>
      </div>
    </div>
  );
}
