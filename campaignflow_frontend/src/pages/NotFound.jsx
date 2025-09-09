import React from 'react';

/**
 * PUBLIC_INTERFACE
 * NotFound
 * Fallback for unknown routes.
 */
export default function NotFound() {
  return (
    <section>
      <h1 className="title">Page not found</h1>
      <p className="description">The page you are looking for does not exist.</p>
    </section>
  );
}
