import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MainLayout
 * A simple application layout that provides a header, sidebar placeholder, and content area.
 * This acts as the base layout for the app. It applies theme styles via CSS variables.
 */
export default function MainLayout({ header, sidebar, children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        {header}
      </header>
      <div className="layout__body">
        <aside className="layout__sidebar">
          {sidebar}
        </aside>
        <main className="layout__content">
          {children}
        </main>
      </div>
    </div>
  );
}
