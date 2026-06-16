import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePageInteractions } from './usePageInteractions';
import { useDataContext } from '../context/DataContext';

const ProductDetails = () => {
    const { products } = useDataContext();
    const { slug } = useParams();
    const rootRef = useRef(null);
    usePageInteractions({ rootRef });

    // Scroll to top when slug changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const product = products.find(p => p.slug === slug);

    if (!product) {
        return (
            <main ref={rootRef} className="w-full flex items-center justify-center min-h-[60vh]" style={{ background: '#FFF8E4' }}>
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#060603] mb-4">Product Not Found</h1>
                    <Link to="/products" className="text-[#c62828] hover:underline font-medium">Return to Products</Link>
                </div>
            </main>
        );
    }

    // Get 3 related products (just picking the next 3 in the array, wrapping around)
    const currentIndex = products.findIndex(p => p.slug === slug);
    const relatedProducts = [];
    for (let i = 1; i <= 3; i++) {
        relatedProducts.push(products[(currentIndex + i) % products.length]);
    }

    return (
        <main ref={rootRef}>
            <div className="w-full" id="product-details">
                <section className="w-full" style={{ marginTop: 'calc(-1 * 96px)', contain: 'layout style paint' }}>
                    <div className="relative" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        
                        <div className="relative mx-auto max-w-[1536px] px-6 py-12" style={{ zIndex: '10' }}>
                            {/* Breadcrumb */}
                            <div className="mb-8">
                                <Link to="/products" className="text-[#c62828] hover:underline font-medium flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                    Back to Products
                                </Link>
                            </div>

                            <div className="flex flex-col @desktop:flex-row gap-12 @desktop:gap-20">
                                {/* Left Side: Image with Zoom Effect */}
                                <div className="w-full @desktop:w-1/2 flex-shrink-0">
                                    <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border p-6 rounded-[32px] group overflow-hidden">
                                        <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '4/3' }}>
                                            <img 
                                                alt={product.title} 
                                                className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-125" 
                                                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} 
                                                src={product.image} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="w-full @desktop:w-1/2 flex flex-col justify-center">
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <div className="h-0 w-6 border-t" style={{ borderColor: '#c62828', borderWidth: '2px' }}></div>
                                        <span className="font-semibold tracking-wider uppercase text-sm" style={{ color: '#c62828' }}>Premium Selection</span>
                                    </div>
                                    
                                    <h1 className="text-4xl @desktop:text-5xl font-bold mb-6" style={{ color: '#060603', lineHeight: '1.2' }}>
                                        {product.title}
                                    </h1>
                                    
                                    <p className="text-xl font-medium mb-8" style={{ color: '#374151' }}>
                                        {product.shortDescription}
                                    </p>
                                    
                                    <div className="w-full h-px bg-gray-300 mb-8"></div>
                                    
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#060603' }}>Description</h3>
                                        <p className="whitespace-pre-line text-lg leading-relaxed" style={{ color: '#1b1b16' }}>
                                            {product.fullDescription}
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <Link to="/contact" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) transition-all outline-none hover:bg-(--hover-bg-color) border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                                            <span className="font-bold text-lg" style={{ color: '#fff' }}>Inquire Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Related Products Section */}
            <div className="w-full relative z-20 py-16 @tablet:py-24 border-t border-gray-200" style={{ background: '#FFF8E4' }}>
                <div className="mx-auto max-w-[1536px] px-6">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="text-3xl @desktop:text-4xl font-bold mb-4" style={{ color: '#060603' }}>Related Products</h2>
                        <div className="h-1 w-20 bg-[#c62828] rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:grid-cols-3 gap-6 w-full">
                        {relatedProducts.map((relProduct) => (
                            <Link to={`/product/${relProduct.slug}`} key={relProduct.id} className="group outline-none">
                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col gap-5 p-6 rounded-[32px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                    <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '1535 / 1024' }}>
                                        <img alt={relProduct.title} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} src={relProduct.image} />
                                    </div>
                                    <div className="flex flex-col gap-3 px-1">
                                        <h3 className="text-xl font-bold group-hover:text-[#c62828] transition-colors" style={{ color: '#060603' }}>{relProduct.title}</h3>
                                        <p className="line-clamp-2" style={{ color: '#1b1b16' }}>{relProduct.shortDescription}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;
