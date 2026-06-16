import React, { useState, useEffect } from 'react';
import { useDataContext } from '../../context/DataContext';

const ContentManager = () => {
  const { content, updateContent } = useDataContext();
  const [formData, setFormData] = useState(content);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(content);
  }, [content]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) => {
      updateContent(key, formData[key]);
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Manage Website Content</h2>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <form onSubmit={handleSave} className="flex flex-col gap-8">
          
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Home Page</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Hero Title</label>
              <input
                type="text"
                name="homeHeroTitle"
                value={formData.homeHeroTitle || ''}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Hero Subtitle</label>
              <textarea
                name="homeHeroSubtitle"
                rows={3}
                value={formData.homeHeroSubtitle || ''}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">About Us Section</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">About Title</label>
              <input
                type="text"
                name="aboutUsTitle"
                value={formData.aboutUsTitle || ''}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">About Description</label>
              <textarea
                name="aboutUsText"
                rows={4}
                value={formData.aboutUsText || ''}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              type="submit"
              className="rounded-3xl bg-[#c62828] px-8 py-3 font-semibold text-white transition-all hover:bg-[#a00000] shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
            {isSaved && <span className="text-green-600 font-medium">Changes saved successfully!</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentManager;
