import React, { useState, useEffect } from 'react';
import { Server, Cpu, Layers, Globe, Shield, RefreshCw } from 'lucide-react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pingCount, setPingCount] = useState(0);

  const fetchBackendData = async () => {
    setLoading(true);
    try {
      const msgRes = await fetch('./api/message');
      const msgData = await msgRes.json();
      setBackendMessage(msgData.text);

      const healthRes = await fetch('./api/health');
      const healthData = await healthRes.json();
      setHealthStatus(healthData);
      setPingCount((prev) => prev + 1);
    } catch (err) {
      console.error('Failed to communicate with backend server:', err);
      setBackendMessage('Error: Could not connect to Express backend.');
      setHealthStatus({ status: 'error', message: 'Backend is offline or unreachable.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBackendData();
  }, []);

  return (
    <div className="app-container">
      {/* Background decoration elements */}
      <div className="glow-circle top-right"></div>
      <div className="glow-circle bottom-left"></div>

      <header className="hero-header">
        <div className="badge animate-fade-in">React + Express Boilerplate</div>
        <h1 className="hero-title">
          Modern Full-Stack <span className="gradient-text">Starter Template</span>
        </h1>
        <p className="hero-subtitle">
          My name is aman kashyap
        </p>
      </header>

      <main className="dashboard-grid">
        {/* Status Card */}
        <section className="card status-card">
          <div className="card-header">
            <Server className="icon primary" />
            <h2>Backend Integration</h2>
          </div>
          <div className="status-container">
            <div className="status-indicator">
              <span className={`status-dot ${healthStatus?.status === 'ok' ? 'online' : 'offline'}`}></span>
              <span className="status-text">
                API Status: {healthStatus?.status === 'ok' ? 'ONLINE' : 'OFFLINE'}
              </span>
            </div>
            
            <div className="message-box">
              <p className="message-title">Server Response:</p>
              <p className="message-content">{backendMessage || 'Waiting for response...'}</p>
            </div>

            <button 
              className={`btn primary ${loading ? 'loading' : ''}`}
              onClick={fetchBackendData}
              disabled={loading}
            >
              <RefreshCw className="btn-icon" />
              {loading ? 'Pinging Server...' : 'Ping API Server'}
            </button>
            
            {pingCount > 0 && (
              <span className="ping-counter">
                Pings performed: {pingCount}
              </span>
            )}
          </div>
        </section>

        {/* Features/Tech Stack Card */}
        <section className="card tech-card">
          <div className="card-header">
            <Cpu className="icon secondary" />
            <h2>Tech Stack & Specs</h2>
          </div>
          <ul className="spec-list">
            <li>
              <div className="spec-icon-wrapper blue">⚛️</div>
              <div className="spec-details">
                <h3>Vite + React 18</h3>
                <p>Ultra-fast hot module replacement (HMR)</p>
              </div>
            </li>
            <li>
              <div className="spec-icon-wrapper green">🟢</div>
              <div className="spec-details">
                <h3>Node.js + Express</h3>
                <p>Scalable, middleware-driven REST API server</p>
              </div>
            </li>
            <li>
              <div className="spec-icon-wrapper purple">🚀</div>
              <div className="spec-details">
                <h3>Vite Proxy Config</h3>
                <p>Seamless `/api` request redirection to bypass CORS</p>
              </div>
            </li>
            <li>
              <div className="spec-icon-wrapper yellow">⚡</div>
              <div className="spec-details">
                <h3>Concurrent Dev Server</h3>
                <p>Run both frontend and backend in one shell script</p>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <section className="features-grid">
        <div className="feature-item">
          <Layers className="feat-icon" />
          <h3>Modular Structure</h3>
          <p>Divided cleanly into frontend and backend workspaces for frictionless development.</p>
        </div>
        <div className="feature-item">
          <Globe className="feat-icon" />
          <h3>Environment Isolation</h3>
          <p>Configured using `.env` files for easy parameter tuning and deployment.</p>
        </div>
        <div className="feature-item">
          <Shield className="feat-icon" />
          <h3>Production-Ready</h3>
          <p>Statically served builds compatible with any major web host (Render, Fly.io, Vercel).</p>
        </div>
      </section>

      <footer className="app-footer">
        <p>Built with ❤️ for rapid prototyping. Clone, run, and start coding.</p>
      </footer>
    </div>
  );
}

export default App;
