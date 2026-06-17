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
      <div className="relative z-10 min-h-screen bg-[#FFF8E4] flex flex-col justify-center items-center px-6" style={{ paddingTop: '120px' }}>
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter password to access the dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            
            <button 
              type="submit"
              className="w-full py-3 rounded-full text-white font-bold transition-all mt-2"
              style={{ backgroundColor: '#c62828', hover: { backgroundColor: '#a00000'} }}
            >
              Login
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
