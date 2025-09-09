import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header
 * Minimal header with brand and a hamburger to toggle sidebar on small screens.
 */
export default function Header() {
  const toggleSidebar = () => {
    // Dispatch a custom event listened by MainLayout
    window.dispatchEvent(new Event('toggle-sidebar'));
  };

  return (
    <div className="header" style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
      <button
        className="header__menu-btn"
        aria-label="Toggle navigation"
        onClick={toggleSidebar}
        style={{
          background: 'transparent',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        ☰
      </button>
      <div className="header__brand" style={{ fontWeight: 700 }}>CampaignFlow</div>
      <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: 14 }}>
        {/* Placeholder for user/avatar/actions */}
      </div>
    </div>
  );
}
