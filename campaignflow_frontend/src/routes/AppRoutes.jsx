import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './index';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Campaigns from '../pages/Campaigns';
import Tasks from '../pages/Tasks';
import Team from '../pages/Team';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { useAppState } from '../store';

/**
 * PUBLIC_INTERFACE
 * ProtectedRoute
 * Minimal auth gate. In a future step, replace with real auth logic.
 */
function ProtectedRoute({ children }) {
  const { user } = useAppState();
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
}

/**
 * PUBLIC_INTERFACE
 * AppRoutes
 * Centralized SPA routes configuration.
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Unprotected */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />

      {/* Protected examples */}
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.CAMPAIGNS}
        element={
          <ProtectedRoute>
            <Campaigns />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.TASKS}
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.TEAM}
        element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.SETTINGS}
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
