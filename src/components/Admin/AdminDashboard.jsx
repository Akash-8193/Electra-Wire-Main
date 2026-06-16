import React, { useState } from 'react';
import ProductsManager from './ProductsManager';
import ContentManager from './ContentManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="relative z-10 min-h-screen bg-[#FFF8E4] pt-[120px] pb-24">
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
                    ? 'bg-[#FFF8E4] text-[#c62828]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold transition-all ${
                  activeTab === 'content'
                    ? 'bg-[#FFF8E4] text-[#c62828]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Website Content
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'products' && <ProductsManager />}
            {activeTab === 'content' && <ContentManager />}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
