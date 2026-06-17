import React, { useState, useEffect } from 'react';
import ProductsManager from './ProductsManager';
import ContentManager from './ContentManager';
import InquiriesManager from './InquiriesManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in for this session
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6" style={{ paddingTop: '120px', minHeight: 'calc(100vh + 120px)' }}>
        <div 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.85)', 
            backdropFilter: 'blur(16px)', 
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)', 
            border: '1px solid rgba(255,255,255,0.6)',
            padding: '48px 40px',
            width: '100%',
            maxWidth: '440px',
            textAlign: 'center'
          }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div style={{ 
              width: '64px', height: '64px', backgroundColor: '#fef2f2', borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
              border: '1px solid #fee2e2'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111827', margin: '0 0 8px 0', fontFamily: 'var(--typography-font-family, inherit)' }}>Admin Access</h1>
            <p style={{ fontSize: '15px', color: '#4b5563', margin: '0' }}>Please enter your password to continue</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Secure Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ 
                  width: '100%', padding: '14px 20px', borderRadius: '12px', 
                  border: '2px solid #e5e7eb', outline: 'none', fontSize: '16px',
                  backgroundColor: '#ffffff', transition: 'all 0.2s ease', boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#c62828'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                placeholder="••••••••"
                required
              />
            </div>
            
            {error && (
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '12px', borderRadius: '8px' }}>
                <p style={{ color: '#dc2626', fontSize: '14px', fontWeight: '500', margin: '0' }}>{error}</p>
              </div>
            )}
            
            <button 
              type="submit"
              style={{ 
                width: '100%', padding: '14px', borderRadius: '100px', 
                backgroundColor: '#c62828', color: '#ffffff', fontWeight: '700', 
                fontSize: '16px', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(198, 40, 40, 0.25)',
                transition: 'all 0.2s ease', marginTop: '8px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#a00000'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#c62828'}
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen bg-[#FFF8E4] pb-24" style={{ paddingTop: '160px' }}>
      <div className="mx-auto max-w-[1536px] px-6 relative z-20">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your website content and products.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="rounded-3xl bg-white p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-all ${
                  activeTab === 'products'
                    ? 'bg-[#c62828] text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#c62828]'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-all ${
                  activeTab === 'content'
                    ? 'bg-[#c62828] text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#c62828]'
                }`}
              >
                Website Content
              </button>
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-all ${
                  activeTab === 'inquiries'
                    ? 'bg-[#c62828] text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#c62828]'
                }`}
              >
                Inquiries & Messages
              </button>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-left font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-all border border-red-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'products' && <ProductsManager />}
            {activeTab === 'content' && <ContentManager />}
            {activeTab === 'inquiries' && <InquiriesManager />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
