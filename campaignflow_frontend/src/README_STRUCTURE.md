# Frontend Structure

This project uses a scalable SPA structure with clear separation of concerns:

- layouts/: App-wide layout shells (e.g., MainLayout)
- pages/: Route-level pages (e.g., Home, Dashboard)
- components/: Reusable UI components (Header, Sidebar)
- routes/: Centralized route constants and (later) router configuration
- hooks/: Custom hooks (e.g., useTheme)
- services/: API clients and service functions
- store/: Minimal context store, scalable to state libraries if needed
- types/: Shared type hints (TS declarations)

Dark theme is enabled by default via [data-theme="dark"] and CSS variables in src/index.css.
Use the useTheme hook to toggle themes without external dependencies.
