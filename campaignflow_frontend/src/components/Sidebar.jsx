import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes';

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * App navigation links. Responsive collapse handled by MainLayout.
 */
export default function Sidebar() {
  const links = [
    { to: ROUTES.HOME, label: 'Home', icon: '🏠' },
    { to: ROUTES.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { to: ROUTES.CAMPAIGNS, label: 'Campaigns', icon: '🎯' },
    { to: ROUTES.TASKS, label: 'Tasks', icon: '✅' },
    { to: ROUTES.TEAM, label: 'Team', icon: '👥' },
    { to: ROUTES.SETTINGS, label: 'Settings', icon: '⚙️' },
  ];

  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? 'active' : ''}`
              }
              end={l.to === ROUTES.HOME}
            >
              <span style={{ marginRight: 8 }}>{l.icon}</span>
              {l.label}
            </NavLink>
          </li>
        ))}
        <li style={{ marginTop: 12, opacity: 0.7, fontSize: 12, color: 'var(--text-muted)' }}>
          {/* Placeholder separator */}
          Navigation
        </li>
      </ul>
    </nav>
  );
}
