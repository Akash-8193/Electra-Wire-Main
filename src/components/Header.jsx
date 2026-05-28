import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // The hero section is ~100vh tall. We turn the text black once the user
      // scrolls past the hero section (minus header height ~80px).
      const threshold = window.innerHeight - 80;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = '#000';
  const bgColor = isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.85)';
  const shadow = isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.05)';

  return (
    <header
      className="w-full relative z-50 transition-all duration-500"
      style={{ position: 'fixed', top: '0', left: '0', width: '100%' }}
    >
      <div className="relative">
        <div
          className="relative mx-auto max-w-[1536px] px-6"
          style={{ zIndex: '10' }}
        >
          <div className="relative mt-4 p-1 rounded-3xl @desktop:pl-4 transition-all duration-500">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl backdrop-blur-lg transition-all duration-500 hidden @tablet:block"
              style={{ backgroundColor: bgColor, boxShadow: shadow }}
            />
            <div className="flex w-full items-center gap-4 relative">
              <div className="flex h-full shrink-0 items-center gap-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  data-slot="button"
                  aria-label="Open navigation menu"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                  className="nav-hamburger-override nav-icon-button inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap transition-all duration-300 outline-none hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50 p-3 rounded-full @desktop:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    width="24"
                    height="24"
                    className="size-6 transition-colors duration-500"
                    style={{ color: textColor }}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <Link className="hidden @tablet:flex items-center" aria-label="Home" to="/">
                  <img
                    src="/images/electra-wires-logo.png"
                    alt="Electra Wires"
                    className="h-10 w-auto max-w-[180px] object-contain shrink-0 @tablet:h-11 @desktop:h-12"
                  />
                </Link>
              </div>
              <div className="nav-desktop-override hidden items-center gap-x-6 contain-layout @desktop:flex w-full justify-start">
                <Link to="/">
                  <span
                    className="py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                    style={{
                      '--typography-font-size': 'var(--typography-body-sm-font-size)',
                      '--typography-font-weight': '600',
                      '--typography-line-height': 'var(--typography-body-sm-line-height)',
                      '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
                      '--typography-font-family': 'var(--typography-body-sm-font-family)',
                      color: textColor,
                    }}
                  >
                    HOME
                  </span>
                </Link>
                <Link to="/about">
                  <span
                    className="py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                    style={{
                      '--typography-font-size': 'var(--typography-body-sm-font-size)',
                      '--typography-font-weight': '600',
                      '--typography-line-height': 'var(--typography-body-sm-line-height)',
                      '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
                      '--typography-font-family': 'var(--typography-body-sm-font-family)',
                      color: textColor,
                    }}
                  >
                    ABOUT US
                  </span>
                </Link>
                <Link to="/products">
                  <span
                    className="py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                    style={{
                      '--typography-font-size': 'var(--typography-body-sm-font-size)',
                      '--typography-font-weight': '600',
                      '--typography-line-height': 'var(--typography-body-sm-line-height)',
                      '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
                      '--typography-font-family': 'var(--typography-body-sm-font-family)',
                      color: textColor,
                    }}
                  >
                    PRODUCTS
                  </span>
                </Link>
                <Link to="/contact">
                  <span
                    className="py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                    style={{
                      '--typography-font-size': 'var(--typography-body-sm-font-size)',
                      '--typography-font-weight': '600',
                      '--typography-line-height': 'var(--typography-body-sm-line-height)',
                      '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
                      '--typography-font-family': 'var(--typography-body-sm-font-family)',
                      color: textColor,
                    }}
                  >
                    CONTACT
                  </span>
                </Link>
                <Link to="/blogs">
                  <span
                    className="py-2 transition-colors duration-500 hover:text-[#c62828] [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                    style={{
                      '--typography-font-size': 'var(--typography-body-sm-font-size)',
                      '--typography-font-weight': '600',
                      '--typography-line-height': 'var(--typography-body-sm-line-height)',
                      '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)',
                      '--typography-font-family': 'var(--typography-body-sm-font-family)',
                      color: textColor,
                    }}
                  >
                    BLOGS
                  </span>
                </Link>
              </div>
              <div className="nav-desktop-override hidden shrink-0 items-center justify-end gap-4 @desktop:flex">
                <div className="nav-desktop-override items-center gap-3 @desktop:flex hidden">
                  <a
                    aria-label="Facebook पर हमें फॉलो करें"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook."
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="size-5 @tablet:size-3 transition-colors duration-500 hover:text-[#c62828]"
                      style={{ color: textColor }}
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M10.438 21.878C5.659 21.128 2 16.988 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.988-3.66 9.127-8.437 9.878v-6.987h2.33L16.336 12h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V12h-2.54v2.89h2.54z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="hidden @tablet:flex items-center gap-3">
                  <a
                    data-slot="button"
                    label="Call Us Now"
                    style={{
                      '--bg-color': '#c62828',
                      '--hover-bg-color': '#a00000',
                      color: '#fff',
                      padding: '12px 24px',
                    }}
                    className="btn-text-white inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) hover:-translate-y-0.5 hover:shadow-lg focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=&#x27;size-&#x27;])]:size-4 border border-(--bg-color) hover:border-(--hover-bg-color) gap-1.5 has-[>svg:first-child]:pr-3 has-[>svg:last-child]:pl-3 has-[>svg:only-child]:px-2 rounded-3xl"
                    href="tel:+12345678900"
                  >
                    <span
                      className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)"
                      style={{
                        '--typography-font-size': 'var(--typography-body-sm-em-font-size)',
                        '--typography-font-weight': '600',
                        '--typography-line-height': 'var(--typography-body-sm-em-line-height)',
                        '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)',
                        '--typography-font-family': 'var(--typography-body-sm-em-font-family)',
                        color: '#fff',
                      }}
                    >
                      Call Us Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 @desktop:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`fixed top-0 left-0 w-3/4 max-w-sm h-full shadow-2xl transition-transform duration-500 ease-in-out flex flex-col p-6 z-[101] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ backgroundColor: '#ffffff' }} onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-8 gap-4">
            <img src="/images/electra-wires-logo.png" alt="Electra Wires" className="drawer-logo" />
            <button onClick={() => setIsMenuOpen(false)} className="nav-icon-button p-2 text-gray-500 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto pb-6 hide-scrollbar">
            <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
            <Link to="/products" className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
            <Link to="/contact" className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            <Link to="/blogs" className="text-lg font-semibold text-gray-800 hover:text-red-600 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>BLOGS</Link>
          </div>
          <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-gray-200">
            <a href="tel:+918684800529" className="flex items-center justify-center gap-2 bg-[#c62828] text-white py-3 px-6 rounded-3xl font-semibold hover:bg-[#a00000] transition-colors shadow-md text-center">
               Call Us Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
