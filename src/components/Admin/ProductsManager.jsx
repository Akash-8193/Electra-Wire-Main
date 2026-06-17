import React, { useState } from 'react';
import { useDataContext } from '../../context/DataContext';

const ProductsManager = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useDataContext();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    fullDescription: '',
    image: '',
  });

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', slug: '', shortDescription: '', fullDescription: '', image: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId && editingId !== 'new') {
      updateProduct({ ...formData, id: editingId });
    } else {
      addProduct({
        ...formData,
        slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      });
    }
    handleCancel();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Manage Products</h2>
        {!editingId && (
          <button
            onClick={() => setEditingId('new')}
            className="admin-red-btn px-6 py-2.5 text-sm"
          >
            + Add New Product
          </button>
        )}
      </div>

      {editingId ? (
        <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
          <h3 className="mb-6 text-xl font-semibold">{editingId === 'new' ? 'Add New Product' : 'Edit Product'}</h3>
          <form onSubmit={handleSave} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Product Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                  placeholder="e.g., Premium FR House Wires"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">URL Slug (optional)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                  placeholder="e.g., fr-house-wires"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="image"
                required
                value={formData.image}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                placeholder="e.g., /images/product1.png or https://example.com/image.jpg"
              />
              {formData.image && (
                <div className="mt-2 h-24 w-24 overflow-hidden rounded-xl border border-gray-200">
                  <img src={formData.image} alt="Preview" className="h-full w-full object-cover" />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Short Description</label>
              <textarea
                name="shortDescription"
                required
                rows={2}
                value={formData.shortDescription}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                placeholder="Brief summary for the product card..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Full Description</label>
              <textarea
                name="fullDescription"
                required
                rows={5}
                value={formData.fullDescription}
                onChange={handleChange}
                className="rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[#c62828] focus:ring-1 focus:ring-[#c62828]"
                placeholder="Detailed description for the product page..."
              />
            </div>

            <div className="mt-4 flex gap-4">
              <button
                type="submit"
                className="admin-red-btn px-8 py-3 text-sm"
              >
                Save Product
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="admin-red-btn px-8 py-3 text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/50 text-xs uppercase text-gray-500 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold">Product</th>
                <th className="px-6 py-4 font-semibold">Short Description</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="font-medium text-gray-900">{product.title}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md truncate">{product.shortDescription}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(product)}
                      className="admin-red-btn" style={{ padding: '6px 16px', fontSize: '12px', marginRight: '8px' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this product?')) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="admin-red-btn" style={{ padding: '6px 16px', fontSize: '12px' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                    No products found. Add your first product!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsManager;
