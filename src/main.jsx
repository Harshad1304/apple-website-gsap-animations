import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: "https://4d0172e6b9868b80948f30df89132545@o4508744061419520.ingest.us.sentry.io/4508744062992384",
  integrations: [
    new BrowserTracing({
      // This replaces the previous Sentry.browserTracingIntegration()
    }),
    Sentry.replayIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    })
  ],
  // Tracing
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% for session replay
  replaysOnErrorSampleRate: 1.0, // 100% for errors
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
