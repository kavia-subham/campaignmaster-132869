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
    <div className="header flex items-center gap-3" style={{ width: '100%' }}>
      <button
        className="header__menu-btn btn btn-ghost"
        aria-label="Toggle navigation"
        onClick={toggleSidebar}
        style={{
          width: 36,
          height: 36,
          padding: 0,
          borderRadius: 'var(--radius-md)'
        }}
      >
        ☰
      </button>
      <div className="header__brand font-bold">CampaignFlow</div>
      <div className="text-muted text-sm" style={{ marginLeft: 'auto' }}>
        {/* Placeholder for user/avatar/actions */}
      </div>
    </div>
  );
}
