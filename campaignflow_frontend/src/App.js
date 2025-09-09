import React from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { Header, Sidebar } from './components';
import { useTheme } from './hooks/useTheme';
import AppRoutes from './routes/AppRoutes';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component that wires theme handling and base layout.
 */
function App() {
  const { theme, toggleTheme } = useTheme('dark');

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <MainLayout header={<Header />} sidebar={<Sidebar />}>
        <AppRoutes />
      </MainLayout>
    </div>
  );
}

export default App;
