import React, { useState, useEffect } from 'react';

const InquiriesManager = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Contact?select=*&order=id.desc`, {
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data);
    } catch (err) {
      console.error('Error fetching inquiries:', err);
      setError('Could not load messages. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/Contact?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete inquiry');
      }

      setInquiries(inquiries.filter(inq => inq.id !== id));
    } catch (err) {
      console.error('Error deleting inquiry:', err);
      alert('Failed to delete message.');
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Contact Messages & Inquiries</h2>
        <button 
          onClick={fetchInquiries}
          className="admin-red-btn px-6 py-2.5 text-sm"
        >
          Refresh Messages
        </button>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100 min-h-[400px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-full py-20 text-gray-500">
            Loading messages...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : inquiries.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No messages found.
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="border border-gray-100 rounded-2xl p-6 bg-gray-50/30 hover:bg-white transition-colors hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{inquiry.name}</h3>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1">📧 {inquiry.email}</span>
                      <span className="flex items-center gap-1">📱 {inquiry.phone || 'N/A'}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteInquiry(inquiry.id)}
                    className="admin-red-btn" style={{ padding: '6px 16px', fontSize: '12px' }}
                  >
                    Delete
                  </button>
                </div>
                
                <div className="flex gap-2 mb-4">
                  {inquiry.product_interest && (
                    <span className="bg-[#FFF8E4] text-[#c62828] text-xs font-bold px-3 py-1 rounded-full border border-[#c62828]/20">
                      Product: {inquiry.product_interest}
                    </span>
                  )}
                  {inquiry.application_type && (
                    <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
                      App: {inquiry.application_type}
                    </span>
                  )}
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <p className="text-gray-800 text-sm whitespace-pre-line">{inquiry.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiriesManager;
