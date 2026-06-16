import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageInteractions } from './usePageInteractions';
import { useDataContext } from '../context/DataContext';

const Products = () => {
    const { products } = useDataContext();
    const rootRef = useRef(null);
    usePageInteractions({ rootRef, carouselTitle: 'Our Customers Are Our Success', faqTitle: 'Your Questions, Answered' });
    return (
        <main ref={rootRef}>
            <div className="w-full" id="hero-section">
                <section className="w-full grid min-h-screen supports-[min-height:100cqh]:min-h-[100cqh] relative" style={{ marginTop: 'calc(-1 * 120px)', contain: 'layout style paint' }}>
                    <div className="relative min-h-screen flex flex-col" style={{ paddingTop: '120px', minHeight: 'calc(100vh + 120px)' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative w-full flex-1 flex flex-col-reverse gap-0 @desktop:flex-row @desktop:items-stretch" style={{ zIndex: '10' }}>
                            <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)' }} className="bg-(--bg-color) w-full p-6 @tablet:p-8 @desktop:w-1/2 @desktop:shrink-0 @desktop:px-14 @desktop:py-16 flex flex-col justify-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-start gap-4">
                                        <h1 id="products-main-title" className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) !text-black" style={{ '--typography-font-size': 'var(--typography-display-lg-font-size)', '--typography-font-weight': 'var(--typography-display-lg-font-weight)', '--typography-line-height': 'var(--typography-display-lg-line-height)', '--typography-letter-spacing': 'var(--typography-display-lg-letter-spacing)', '--typography-font-family': 'var(--typography-display-lg-font-family)' }}>
                                            High-Quality Electrical Wires & Cables for Every Application
                                        </h1>
                                        <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-xl-font-size)', '--typography-font-weight': 'var(--typography-body-xl-font-weight)', '--typography-line-height': 'var(--typography-body-xl-line-height)', '--typography-letter-spacing': 'var(--typography-body-xl-letter-spacing)', '--typography-font-family': 'var(--typography-body-xl-font-family)', color: '#1b1b16' }}>
                                            Explore our range of FR wires, industrial cables, and fire-resistant wiring solutions designed for safety, durability, and long-term performance.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                        <a data-slot="button" label="Explore Products" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" 
                                            href="#our-premium-range"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.getElementById('our-premium-range');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}>
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>Explore Products</span>
                                        </a>
                                        <Link data-slot="button" label="Request a Quote" style={{ '--bg-color': 'transparent', '--hover-bg-color': '#e0d9c8', '--border-color': '#000', '--hover-border-color': '#000', color: '#12120d', borderColor: '#000' }} className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=&#x27;size-&#x27;])]:size-4 border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="/contact">
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#12120d' }}>Request a Quote</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-4/3 w-full overflow-hidden @desktop:aspect-auto @desktop:w-1/2 @desktop:shrink-0">
                                <div className="relative h-full w-full overflow-hidden">
                                    <img alt="Electra Wires German Technology" fetchPriority="high" loading="eager" decoding="async" data-nimg="fill" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="(max-width: 1024px) 100vw, 50vw" src="/hero-product-new.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="our-premium-range">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-8 py-16 @tablet:py-24 @tablet:gap-14" style={{ zIndex: '10' }}>
                            <div className="flex flex-col gap-8 @desktop:flex-row @desktop:items-end @desktop:justify-between">
                                <div className="flex flex-col gap-4 @tablet:max-w-2/3 @desktop:max-w-1/2">
                                    <div className="flex items-baseline gap-1">
                                        <div className="flex items-center">
                                            <div className="h-0 w-4 border-t" style={{ borderColor: '#1b1b16' }}></div>
                                        </div>
                                        <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>Our Premium Electrical Wire Range</span>
                                    </div>
                                    <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                        Reliable Electrical Wires Engineered for Safety & Performance
                                    </h2>
                                </div>
                                <div className="gap-3 hidden @tablet:flex">
                                    <Link data-slot="button" label="Consult Our Experts" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-black hover:border-black gap-2 px-6 py-3 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-3 rounded-full" to="/contact">
                                        <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-em-font-size)', '--typography-font-weight': 'var(--typography-body-md-em-font-weight)', '--typography-line-height': 'var(--typography-body-md-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-em-font-family)', color: '#fff' }}>Consult Our Experts</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:grid-cols-3 gap-6 w-full">
                                    {products.map((product) => (
                                        <div key={product.id} className="group outline-none h-full">
                                            <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col gap-5 p-6 rounded-[32px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden">
                                                <Link to={`/product/${product.slug}`} className="absolute inset-0 z-0 rounded-[32px]" aria-label={`View ${product.title}`}></Link>
                                                
                                                <div className="overflow-hidden rounded-[28px] bg-[#f4efe2] relative z-10 pointer-events-none" style={{ aspectRatio: '1535 / 1024' }}>
                                                    <img alt={product.title} fetchPriority="auto" loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} sizes="(max-width: 768px) 85vw, (max-width: 1280px) 55vw, 42vw" src={product.image} />
                                                </div>
                                                
                                                <div className="flex flex-col gap-3 px-1 grow relative z-10 pointer-events-none">
                                                    <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) group-hover:text-[#c62828] transition-colors duration-300" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>{product.title}</h3>
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>{product.shortDescription}</p>
                                                </div>

                                                <div className="flex flex-col @tablet:flex-row items-center gap-3 mt-auto pt-2 relative z-20 w-full">
                                                    <Link data-slot="button" to={`/product/${product.slug}`} style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white w-full flex-1 inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) border border-black hover:border-black gap-2 px-4 py-3 rounded-full font-semibold hover:shadow-md hover:-translate-y-0.5 text-sm">
                                                        <span>View Product</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                    </Link>
                                                    <Link data-slot="button" to="/contact" style={{ '--bg-color': 'transparent', '--hover-bg-color': 'rgba(27, 27, 22, 0.05)', '--border-color': '#000', '--hover-border-color': '#000', color: '#1b1b16', borderColor: '#000' }} className="w-full flex-1 inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) border border-black hover:border-black gap-2 px-4 py-3 rounded-full font-semibold hover:shadow-md hover:-translate-y-0.5 text-sm">
                                                        <span>Contact for Price</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-3 @tablet:hidden">
                                    <button type="button" disabled="" aria-label="Previous" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clipRule="evenodd"></path></svg></button>
                                    <button type="button" disabled="" aria-label="Next" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0" clipRule="evenodd"></path></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="call-to-action">
                <section className="w-full relative" style={{ contain: 'layout style paint' }}>
                    <div className="relative" style={{ paddingBottom: '488px' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: 'linear-gradient(180deg, transparent 0%, transparent 100%), #0F0F0079' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-4 py-16 @tablet:py-24 items-center justify-center text-center" style={{ zIndex: '10' }}>
                            <div className="flex flex-col max-w-2xl items-center">
                                <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-md-font-size)', '--typography-font-weight': 'var(--typography-display-md-font-weight)', '--typography-line-height': 'var(--typography-display-md-line-height)', '--typography-letter-spacing': 'var(--typography-display-md-letter-spacing)', '--typography-font-family': 'var(--typography-display-md-font-family)', color: '#f9f9f2' }}>
                                    Get Reliable Electrical Wiring Solutions Today
                                </h2>
                            </div>
                            <div className="flex flex-col max-w-2xl gap-8">
                                <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#e5e6de' }}>
                                    Partner with Electra Wires for high-quality electrical wires, FR cables, and industrial solutions tailored to your needs.
                                </p>
                                <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-center @tablet:justify-center">
                                    <Link data-slot="button" label="Get in Touch" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=&#x27;size-&#x27;])]:size-4 border border-black hover:border-black gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="/contact">
                                        <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-bold tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': '600', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff', fontWeight: '600' }}>Get in Touch</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Products;
