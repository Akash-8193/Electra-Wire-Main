import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageInteractions } from './usePageInteractions';

import videoHero from '../assets/animate (3).mp4';
import videoCard1 from '../assets/electric-video.mp4.mp4';
import videoCard2 from '../assets/animate (2).mp4';
import videoCard3 from '../assets/animate (1).mp4';

const BlogCard = ({ videoSrc, date, title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
    const shouldTruncate = content.length > maxLength;
    const displayText = isExpanded || !shouldTruncate ? content : content.slice(0, maxLength).trim() + '...';

    return (
        <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '1535 / 1024' }}>
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-contain"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%' }}
                />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <span className="text-sm font-semibold text-[#da990f]">{date}</span>
                <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>
                    {title}
                </h3>
                <div className="flex flex-col items-start">
                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                        {displayText}
                    </p>
                    {shouldTruncate && (
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-3 inline-flex shrink-0 cursor-pointer items-center justify-center !bg-[#c62828] !text-white border border-black hover:!bg-[#a00000] hover:!text-white transition-all outline-none px-4 py-1.5 rounded-3xl text-sm font-bold shadow-sm"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Blogs = () => {
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
                                        <h1 id="blogs-main-title" className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-lg-font-size)', '--typography-font-weight': 'var(--typography-display-lg-font-weight)', '--typography-line-height': 'var(--typography-display-lg-line-height)', '--typography-letter-spacing': 'var(--typography-display-lg-letter-spacing)', '--typography-font-family': 'var(--typography-display-lg-font-family)', color: '#000000 !important', opacity: 1, visibility: 'visible' }}>
                                            Electrical Wire Insights & Industry Updates
                                        </h1>
                                        <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-xl-font-size)', '--typography-font-weight': 'var(--typography-body-xl-font-weight)', '--typography-line-height': 'var(--typography-body-xl-line-height)', '--typography-letter-spacing': 'var(--typography-body-xl-letter-spacing)', '--typography-font-family': 'var(--typography-body-xl-font-family)', color: '#000000', opacity: 1, visibility: 'visible' }}>
                                            Stay updated with expert insights on electrical wires, FR cables, industrial wiring solutions, and the latest safety standards in the industry.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                        <Link data-slot="button" label="Explore Articles" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 rounded-3xl" to="#latest-articles">
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>
                                                Explore Articles
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-4/3 w-full overflow-hidden @desktop:aspect-auto @desktop:w-1/2 @desktop:shrink-0">
                                <div className="relative h-full w-full overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', transformOrigin: '50% 50%', transform: 'scale(1)' }}
                                    >
                                        <source src={videoHero} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full" id="latest-articles">
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
                                        <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>
                                            Our Blog
                                        </span>
                                    </div>
                                    <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                        Latest Insights on Electrical Wires & Cables
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:grid-cols-3 gap-6 w-full">
                                    {/* Blog Card 1 */}
                                    <BlogCard 
                                        videoSrc={videoCard1}
                                        date="Electrical Safety • May 15, 2026"
                                        title="Why Fire-Resistant (FR) Wires Are Essential for Home Safety"
                                        content="Understand the importance of FR wires in preventing fire hazards. Learn how fire-resistant electrical wires enhance safety and protect homes during emergencies."
                                    />
                                    {/* Blog Card 2 */}
                                    <BlogCard 
                                        videoSrc={videoCard2}
                                        date="Industrial Solutions • April 28, 2026"
                                        title="Understanding Industrial Power Loads & Heavy-Duty Cables"
                                        content="Learn how industrial cables are designed to handle high voltage loads and demanding environments. Discover the right cable solutions for reliable industrial performance."
                                    />
                                    {/* Blog Card 3 */}
                                    <BlogCard 
                                        videoSrc={videoCard3}
                                        date="Solar & Energy • March 12, 2026"
                                        title="Solar Wiring Solutions: The Role of UV-Resistant Electrical Cables"
                                        content="Explore how UV-resistant wires and cables improve solar system efficiency and durability. Essential for long-term performance in outdoor environments."
                                    />
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
                                    Stay Updated with Electrical Industry Insights
                                </h2>
                            </div>
                            <div className="flex max-w-2xl flex-col gap-8">
                                <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#e5e6de' }}>
                                    Subscribe to receive expert tips, product updates, and the latest trends in electrical wires, FR cables, and industrial wiring solutions.
                                </p>
                                <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-center @tablet:justify-center">
                                    <Link data-slot="button" label="Subscribe Now" style={{ '--bg-color': '#c62828', '--hover-bg-color': '#a00000', color: '#fff' }} className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 rounded-3xl" to="/contact">
                                        <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#fff' }}>
                                            Subscribe Now
                                        </span>
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

export default Blogs;
