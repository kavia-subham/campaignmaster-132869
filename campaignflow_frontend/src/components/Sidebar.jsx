import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * Placeholder for navigation. Routes will be wired later.
 */
export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">Dashboard</li>
        <li className="sidebar__item">Campaigns</li>
        <li className="sidebar__item">Tasks</li>
        <li className="sidebar__item">Team</li>
        <li className="sidebar__item">Settings</li>
      </ul>
    </nav>
  );
}
